const { instrument } = require("@socket.io/admin-ui");
const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:5500", "http://10.10.1.44:5500", "https://admin.socket.io/"]
    }
})

const userIo = io.of("/user");

userIo.on("connection", socket => {
    console.log("connected to User namespace with username " + socket.username);
})

userIo.use((socket, next) => {
    if (socket.handshake.auth.token) {
        socket.username = getUsernameFromToken(socket.handshake.auth.token);
        next();
    } else {
        next(new Error("Please sent token"));
    }
})

function getUsernameFromToken(token) {
    return token;
}

io.on("connection", socket => {
    console.log(socket.id);
    socket.on("custom-event", (number, string, obj) => {
        console.log(number, string, obj);
    });

    socket.on("send-message", (message, room) => {
        // receive everyone
        // socket.emit("receive-message", message);

        // receive every sockeck that isn't me
        
        if (room === '') socket.broadcast.emit("receive-message", message);
        else {
            socket.to(room).emit("receive-message", message);
        }
        console.log(message, room);
    });

    socket.on("join-room", (room, cb = () => "") => {
        socket.join(room);
        cb(`Joined ${room}`)
    });

    socket.on("ping", n => console.log(n));
});

// open https://admin.socket.io/ on browser
instrument(io, { auth: false });
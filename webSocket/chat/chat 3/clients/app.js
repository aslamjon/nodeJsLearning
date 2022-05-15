const joinRoomButton = document.getElementById("room-button");
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const dispalyMessage = document.getElementById("dispalyMessage");


const socket = io("http://10.10.1.44:3000");
const userSocket = io("http://10.10.1.44:3000/user", { auth: { token: "test Token"} });

userSocket.on("connect_error", (error) => {
    displayMessage(error);
})

// Listining
socket.on("connect", () => {
    displayMessage(`You connect with id: ${socket.id}`)
})

// Listining
socket.on("receive-message", (message) => {
    displayMessage(message);
});

// receive
// socket.emit("custom-event", 10, "Hi", {a: "a"});




sendButton.onclick = () => {
    let value = messageInput.value;
    socket.emit("send-message", value, roomInput.value);
    displayMessage(value);
    messageInput.value = "";
}

joinRoomButton.onclick = () => {
    let value = roomInput.value;
    socket.emit("join-room", value, (message) => {
        displayMessage(message);
    });
}
const displayMessage = (message) => {
    let div = document.createElement("div");
    div.innerText = message;
    dispalyMessage.appendChild(div);
}


let count = 0;
setInterval(() => {
    socket.emit("ping", ++count);
}, 1000);

document.addEventListener("keydown", (e) => {
    if (e.target.matches("input")) return;
    else if (e.key === "c") socket.connect();
    else if (e.key === "d") socket.disconnect();
})
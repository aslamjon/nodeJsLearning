const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });




wss.on("connection", function connection(ws, req, client) {
    const ip = req.socket.remoteAddress;
    const headers = req.headers;
    console.log("A new client Connected!", ip);
    ws.send("Welcome New Client!");

    ws.on("open", function open() {
        console.log("connected");
        ws.send(Date.now());
    });

    ws.on("close", function close() {
        console.log("disconnected");
    });

    ws.on("message", function incoming(data, isBinary) {
        console.log("received: %s", data, isBinary);

        wss.clients.forEach(function each(client) {
            console.log("client", client.readyState, WebSocket.OPEN, data);
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

server.listen(port, function () {
    console.log(`Server is listening on ${port}!`);
});

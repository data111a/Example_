const express = require("express");
const cors = require("cors");
const { WebSocket, WebSocketServer } = require("ws"); // Import the 'ws' library
const { createServer } = require("http");

const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const wsServer = new WebSocketServer({ server });

app.use(cors());

app.get("/messages/get/all", (req, res) => {
  res.send(JSON.stringify({ message: ["data", "mate", "lola", "yliko"] }));
});

app.get("/users/get/all", (req, res) => {
  res.send("ager chemi yle daichi");
});

wsServer.on("connection", (ws, req) => {
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    console.log(data.message);
  });

  ws.on("close", () => {
    console.log("user left");
  });
});

server.listen(PORT, () => {
  console.log(`listening to port : ${PORT}`);
});

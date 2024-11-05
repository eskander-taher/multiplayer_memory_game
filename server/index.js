const { app, server, io } = require("./config/server");
const handleSocketConnection = require("./sockets/socketHandler");

io.on("connection", handleSocketConnection);

app.get("/", (req,res)=>{
    res.send("Welcome to memory multiplayer game")
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

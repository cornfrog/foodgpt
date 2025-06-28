import express from "express";

const server = express();

server.get("/", (request, response) => {
    return response.json({
        message: "server running..."
    })
})

server.listen(3001, () => console.log('Server running on port 3001'));
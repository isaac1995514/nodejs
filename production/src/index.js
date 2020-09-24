import express from "express";

// Create app instance
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

const server = app.listen(3030, () => console.log("Server Ready"));

process.on("SiGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});

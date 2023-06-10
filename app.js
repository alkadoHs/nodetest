import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API works 😎" });
});

app.listen(3002, () => {
  console.log("Listening to http://localhost:3002");
});

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./db/dbConnect");


app.use(cors());

app.use(express.json());

app.get("/api/status", async (req, res) => {
  return res.json({
    message: "Server Working",
  });
});

const PORT = process.env.PORT;

const startServer = async () => {
  await dbConnect();

  app.listen(PORT, () => {
    console.log(`Server Listening at Port: ${PORT}`);
  });
};

startServer();

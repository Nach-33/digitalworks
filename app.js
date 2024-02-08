const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./db/dbConnect");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

app.use(cors());

app.use(express.json());

app.get("/api/status", async (req, res) => {
  return res.json({
    message: "Server Working",
  });
});

app.use("/api/auth", authRoutes);

app.use(authMiddleware);

app.post('/api/check', (req, res) => {
  const user = req.user;
  return res.json({
    message: "working",
    user
  })
})

const PORT = process.env.PORT;

const startServer = async () => {
  await dbConnect();

  app.listen(PORT, () => {
    console.log(`Server Listening at Port: ${PORT}`);
  });
};

startServer();

const fs = require("fs");
const https = require("https");

const app = require("./app");
const connectDB = require("./utils/db");

const port = process.env.PORT || 3000;

const server = https.createServer(
  {
    key: fs.readFileSync("./key.pem"),
    cert: fs.readFileSync("./cert.pem"),
  },
  app
);

const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();

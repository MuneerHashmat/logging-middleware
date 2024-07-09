const express = require("express");
const app = express();
const getTimeStamp = require("./utils");

app.use((req, res, next) => {
  const start = Date.now();

  console.log(
    `name: Muneer Hashmat \ntimestamp: ${getTimeStamp()} \nrequest method: ${
      req.method
    } \nrequest url: ${req.url}`
  );

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`time taken: ${duration}ms \nstatus code: ${res.statusCode}`);
  });

  next();
});

app.get("/login", (req, res) => {
  const response = {
    status: "success",
    message: "logged in successfully",
  };

  return res.status(200).json(response);
});

app.listen(10000, () => {
  console.log("Server is up and running at port 10000");
});

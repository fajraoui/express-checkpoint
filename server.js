const express = require("express");
const app = express();
const path = require("path");
const openTime = require("./middleware/Interval");
app.use(express.json());
const port = process.env.PORT || 9000;

app.use(openTime);
app.use(express.static("public"));
app.listen(port, (err) => {
  err ? console.log("error") : console.log(`server is running on port ${port}`);
});

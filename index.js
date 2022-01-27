const express = require("express");

const app = express();

app.use(express.json());   //middleware function that parses JSON payload, if any, in the incoming API requests

app.use(express.urlencoded({ extended: false }));
 

app.use("/api/users", require("./users"));
 

app.listen(3000, () => console.log('Server is Running'));
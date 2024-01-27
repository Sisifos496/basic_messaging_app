const path = require("path");
const express = require("express");

const app = express();

app.use('/JS', express.static(path.resolve(__dirname, 'html', '../../src/js')));

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "../../src/html/login.html"));
});

app.get("/sign-up", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "../../src/html/signup.html"));
});

app.get("/forgot-password", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "../../src/html/forgotpass.html"))
});

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html", "../../src/html/home.html"))
});

app.listen(8080, () => {
    console.log("Server is running");
});

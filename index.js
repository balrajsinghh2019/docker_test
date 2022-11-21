// calling
const express = require('express');
const app = express();

// route
app.get("/", (req, res) => {
    res.json({
        message : "You are visiting root"
    })
})

app.get("/login", (req, res) => {
    res.json({
        message : "You are visiting login"
    })
})

app.get("/signup", (req, res) => {
    res.json({
        message : "You are visiting signup"
    })
})

app.get("/logout", (req, res) => {
    res.json({
        message : "You are visiting logout"
    })
})

// listen
app.listen(8001, () => {
    console.log("App is running on port 8001.");
})
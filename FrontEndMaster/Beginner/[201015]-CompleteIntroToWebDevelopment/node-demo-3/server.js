const express = require("express");
const path = require("path");

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do",
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/favicon.ico", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/flame.svg"));
});

app.get("/complement", function (req, res) {
    res.json({
        complement: getRandomComplement(),
    }).end();
});

// NodeJS serve public directory
app.use("/public", express.static("./public"));

// NodeJS serve ./node_modules
app.use(
    "/popmotion",
    express.static(__dirname + "/node_modules/popmotion/dist")
);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);

const express = require('express');
const path = require('path');
const bodyparser = require('body-parser'); 

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('views'));

app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/views/main.html');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000: http://localhost:3000");
});
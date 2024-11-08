// Create web server and listen on port 3000
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', function (req, res) {
  res.json(comments);
});

// Add a comment
app.post('/comments', function (req, res) {
  if (!req.body || !req.body.author || !req.body.text) {
    return res.status(400).send('Bad Request');
  }
});

var newComment = {
  id: comments.length + 1,
}

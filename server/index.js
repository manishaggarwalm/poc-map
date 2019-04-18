/* eslint-disable no-console */
// const express = require('express');

// const app = express();
const port = 3001;

// app.get('/', (req, res) => res.send('Hello World!'));
var express = require('express');

var app = express();

// app.use(express.logger());
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/build'));

app.get('/*', function(req, res) {
  res.render('/build/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

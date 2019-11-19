var express = require('express')
var mustache = require('mustache-express');
var bodyParser = require('body-parser');


var state = {
  messages: [{
		id: 0,
    username: 'Guy',
    text: 'Welcome to the chat',
  }]
};

var app = express()
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello', function (req, res) {
  var age = req.query.age;
  var name = req.query.name;
  if (!name) {
    name = "Unknown Person";
  }

  var templateData = {
    name: name,
    age: age,
    address: address,
  };

  res.render('hello', templateData);

});

app.get('/test', function (req, res) {
  console.log(req.query);
  res.send('Kianna');
});

app.get('/mydata', function (req, res){
  var data = {
    something: 1,
    pet: "Mimi"
  };
  res.json(data);
});

app.get('/myname', function (req, res) {
  console.log(req.query);
  res.send('Kianna ' + 'Love');
});

app.get('/itsme', function (req, res) {
 console.log(req.query);
 var name = req.query.name;
 if (name === 'Kianna') {
   res.send("Hi " + name);
  } else {
    res.send("Unknown");
  }

});

app.post('/mydata', function (req, res) {
  console.log(req.body);
  res.send('Posted');
});

app.post('/somedata', function (req, res) {
  console.log(req.body);
  res.send('OK');
});

app.get('/chat', function (req, res) {
  res.render('chat', {messages: state.messages});
});

var port = 3000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

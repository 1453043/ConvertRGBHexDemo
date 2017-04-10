var express = require("express");
var app = express();
var path = require('path');
var converter = require("./converter");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/rgbToHex", function(req, res) {
  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  var obj = {"red": red, "green": green, "blue":blue, "hex": hex};
  //res.send(hex);
  res.render('index', {val: JSON.stringify(obj), val2: undefined});
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  var obj = {"hex": hex, "rgb": JSON.stringify(rgb)};
  //res.send(JSON.stringify(rgb));
  res.render('index', {val: undefined, val2: JSON.stringify(obj)});
});

app.get('/', function(req, res){
	res.render('index', {val: undefined, val2: undefined});
});

app.listen(3000);
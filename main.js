const express = require("express");
const readJsonBin = require("./readJsonBin");
const Filters = require("./Filters");
var app = express();
var bins = {};

readJsonBin.getData("./jsonBin.json").then(d => {
  bins.bins = d;

  let Filter = new Filters(bins.bins);

  app.get("/api/bins/africa", function(req, res) {
    let bins = Filter.africa();
    res.json({ bins: bins });
  });

  app.get("/api/bins/type", function(req, res) {
    let types = Filter.type();
    res.json({ types: types });
  });

  app.get("/api/bins/validate/:bin/:country", function(req, res) {
    let validate = Filter.validate(req);
    res.json({ validate: validate });
  });

  app.listen(3000, console.log("bin lookup app running on port 3000"));
});

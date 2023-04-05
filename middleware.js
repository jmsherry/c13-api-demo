const express = require('express');

module.exports = function(app) {
  app.use(express.static('public'));
  console.log('ji');

  app.use(express.json());

  const cars = [];

  app.get('/api/v1/cars',  (req, res) => {
    res.status(200).json(cars);
  });

  app.get('/api/v1/drivers', (req, res) => {
    res.status(200).json(cars);
  });

  app.post('/api/v1/cars', (req, res) => {
    cars.push(req.body);
    res.sendStatus(201);
  })
}


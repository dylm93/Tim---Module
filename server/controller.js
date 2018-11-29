const express = require('express');
const db = require('../database/models.js');

// TO USE: db.Products.aMethodHere

const Controller = {
  get: (req, res) => {
    db.Products.findAll({order: [['id', 'DESC']], limit: 100 })
      .then(data=>res.send(data))
  },

  post: (req, res) => {
    res.send('hello from post');
  },

  update: (req, res) => {
    res.send('hello from update');
  },

  delete: (req, res) => {
    res.send('hello from delete');
  },
};

module.exports = { Controller };

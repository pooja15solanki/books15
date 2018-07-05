const express = require('express');

const User = require('../../model/db.js').User
const Book = require('../../model/db.js').Book
const Message = require('../../model/db.js').Message

const route = express.Router();

//sign up for the user
route.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    college: req.body.college,
    address:req.body.address,
    mobile: req.body.mobile,
    password: req.body.password
  })
    .then(user => {
      res.status(200).send(user);
    })
    .catch(error => {
      res.status(501).send({
        error: "Error in creating user"
      });
    });
});

//sign in of the user, return all the message and books posted by them
route.post("/signIn", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    },
    include:[{
      model:Book
    },{
      model:Message
    }]
  }).then(user => {
  	res.status(200).send(user)
  })
  .catch(error => {
  	res.status(501).send({
  		error:"Error in create user"
  	})
  })
});


module.exports = route;
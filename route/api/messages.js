const express = require('express');

const Message = require('../../model/db.js').Message

const route = express.Router();

//send a message
route.post('/',(req,res) =>{
	
	Message.create({
		message:req.body.message,
		bookBId:req.body.bookBId,
		userUId: req.body.userUId
	}).then((message)=>{
		res.status(200).send(message)
	}).catch((error)=>{
		res.status(500).send({
			error:console.log(error)
		})
	})
})



module.exports = route;
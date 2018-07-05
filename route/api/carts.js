const express = require('express');
const Book = require('../../model/db.js').Book

const Cart = require('../../model/db').Cart

const route = express.Router();

//get all cart items of particular user
route.post('/getCart',(req,res,next)=>{
	Cart.findAndCountAll({where:{
		userUId:req.body.Id,
	},
		include:[{
			model:Book
		}]
	})
	.then((carts)=>{
		res.status(200).send(carts)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});

//insert a item to cart
route.post('/',(req,res) =>{
	Cart.create({
		userUId:req.body.userUId,
		bookBId:req.body.bookBId
	}).then((cart)=>{
		res.status(200).send(cart)
	}).catch((error)=>{
		res.status(500).send({
			error:console.log(error)
		})
	})
})



//remove particular item from cart
route.delete('/:id', (req,res) =>{

Cart.destroy({
    where: {
      id: req.params.id
    }
  }).then((tasks) => {
  res.status(200).send("0") 
})
});


module.exports = route;
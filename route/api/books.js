const express = require('express');

const Book = require('../../model/db.js').Book
const path = require('path');
const route = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
var multer = require('multer');

 var DIR = './public/uploads/';




 var Storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, DIR);
     },
     filename: function(req, file, callback) {
         callback(null, file.fieldname + "-" + Date.now() + "." + path.extname(file.originalname));
     }
 });

  var upload = multer({
     storage: Storage
 });

//get all books
route.get('/',(req,res,next)=>{
	Book.findAll()
	.then((books)=>{
		res.status(200).send(books)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});

//get a particular book
route.post('/book',(req,res,next)=>{
	Book.findOne({
		where:{
			bId:req.body.Id
		}
	})
	.then((books)=>{
		res.status(200).send(books)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});

//get the books posted by an user
route.post('/userBooks',(req,res,next)=>{
	Book.findAll({
		where:{
			userUId:req.body.Id
		}
	})
	.then((books)=>{
		res.status(200).send(books)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});

//filter books from high to low
route.get('/filterHighToLow',(req,res,next)=>{
	Book.findAll({order:[
    ['price', 'DESC']]
	})
	.then((books)=>{
		res.status(200).send(books)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});

//filter books by low to high
route.get('/filterLowToHigh',(req,res,next)=>{
	Book.findAll({order:[
    ['price', 'ASC']]
	})
	.then((books)=>{
		res.status(200).send(books)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});
//filter books by condition
route.post('/filterCondition',(req,res,next)=>{
	//console.log(req.body)
	Book.findAll({where:{
		condition:req.body.condition
	}
	})
	.then((books)=>{
		res.status(200).send(books)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});


//find books by tittle, author name

route.post('/searchByName',(req,res,next)=>{
	//console.log(req.body)
	Book.findAll({where:{
		[Op.or]: [{name: req.body.searchBy.toLowerCase()}, {authorName: req.body.searchBy.toLowerCase()}]
	}
	})
	.then((books)=>{
		res.status(200).send(books)
	})
	.catch((err)=>{
		res.status(500).send({
			error:"Could not retrive Users"
		})
	})
});




//to upload a image, it generate the path
route.post('/upload',upload.single('photo'), function (req, res) {
	console.log('in upload', req.file.path);
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send(req.file.path)
      }
});

//post a book
route.post('/',(req,res) =>{
	console.log(req.body.userId)
	Book.create({
		name:req.body.name,
		authorName:req.body.authorName,
		price: parseFloat(req.body.price),
		image:req.body.image,
		condition:req.body.condition,
		userUId:req.body.userId
	}).then((book)=>{
		res.status(200).send(book)
	}).catch((error)=>{
		res.status(500).send({
			error:console.log(error)
		})
	})
})

route.delete('/:id', (req,res) =>{

Book.destroy({
    where: {
      bId: req.params.id
    }
  }).then((tasks) => {
  res.status(200).send("0") 
})
});

module.exports = route;
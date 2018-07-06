
const Sequelize = require('sequelize')
const op = Sequelize.Op
const db = new Sequelize('mytestdb1', '','',{
	host: '',
	dialect:'sqlite',
	operatorsAliases : op,
	pool: {
		min :0,
		max:5,
		idle:5000,
	 },
	 "storage":"./mybookdb.sqlite"
});
//user table
const User = db.define('users',{
	uId: {
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email:{
		type: Sequelize.STRING,
		allowNull: false	
	},
	college:{
		type: Sequelize.STRING,
		allowNull: false
	},
	address:{
		type: Sequelize.STRING
	},
	mobile:{
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	password:{
		type: Sequelize.STRING,
		allowNull: false
	}
})
//Listing table
const Book = db.define('books',{
	bId: {
		type: Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	authorName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0.0
	},
	image: {
		type: Sequelize.STRING,
		allowNull: false
	},
	condition: {
		type: Sequelize.STRING,
		enum:['new','almost new','slight damage','worn'],
		defaultValue: 'new',
		allowNull:false
	}
})


//wishlist table
const Cart = db.define("cart", {
	id: {
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
});

//message table
const Message = db.define("message", {
  message: {
    type: Sequelize.STRING
  }
});

User.hasMany(Message);
Message.belongsTo(User);

Book.hasMany(Message);
Message.belongsTo(Book);



User.hasOne(Cart);
Cart.belongsTo(User);


Cart.belongsTo(Book);
Book.hasMany(Cart);


Book.belongsTo(User);
User.hasMany(Book);

db.sync()
	.then(() => console.log("Database have been synced"))
	.catch((err) => console.error(err))
exports = module.exports = {
	 User, Book, Cart, Message
}
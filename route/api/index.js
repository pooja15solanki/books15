const route=require('express').Router()

route.use('/users',require('./users'))
route.use('/books',require('./books'))
route.use('/carts',require('./carts'))
route.use('/message',require('./messages'))


module.exports=route
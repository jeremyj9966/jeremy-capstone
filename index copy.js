const express = require("express");
const cors = require("cors");
const controller = require("./ctrl/controller.js");
const path = require('path')
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve('./client')))

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'../client/index.html'))
})
app.get('/js', (req,res)=> {
    res.sendFile(path.join(__dirname,'../client/main.js'))
    
})
app.get('/wishjs', (req,res)=> {
    res.sendFile(path.join(__dirname,'../client/wishlist.js'))
})
app.get('/css', (req,res)=> {
    res.sendFile(path.join(__dirname,'../client/styles.css'))
})
app.get('/wishcss', (req,res)=> {
    res.sendFile(path.join(__dirname,'../client/wishlist.css'))
})
app.get('/wishlist', (req,res)=> {
    res.sendFile(path.join(__dirname,'../client/wishlist.html'))
})

app.get(`/api/Birds`, controller.getAllBirds);
app.post(`/api/birds`,controller.updateWishList)
// create a endpoint to get wishlist from controller(get request )
app.get(`/api/wish`,controller.getWishList);
app.delete(`/api/wish/:id`, controller.deleteBird);

app.listen(4000,()=> console.log('hello'))
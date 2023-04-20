const express = require('express')
const mongoose = require('mongoose')

const Article = require('/home/ravleen/Desktop/mean_project/models/article')
const articleRouter = require('/home/ravleen/Desktop/mean_project/routes/articles')
const methodOverride = require('method-override')
const app = express()
var db = require('./config/db');
console.log("connecting--",db);
mongoose.connect(db.url); //Mongoose connection created
app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended: false }))
app.use('/articles',articleRouter)
app.use(methodOverride('_method'))
app.get('/', async (req,res) => {
const articles = await Article.find().sort({
createdAt: 'desc' })
/*const articles = [{
title: "Test",
createdAt: new Date(),
description: "LOL"
},
{
title: "Test 2",
createdAt: new Date(),
description: "LOL 2"
}
]*/
res.render('articles/index', {articles: articles})
})
app.use('/articles',articleRouter)
app.listen(3000)

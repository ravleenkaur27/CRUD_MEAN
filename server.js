const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Article = require('./models/article')
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')
mongoose.connect('mongodb://localhost/meanblog')
app.use('/articles',articleRouter)
app.use(express.urlencoded({ extended: false }))
app.get('/', (req,res) => {
const articles = [{
title: "Test",
createdAt: new Date(),
description: "LOL"
},
{
title: "Test 2",
createdAt: new Date(),
description: "LOL 2"
}
]
res.render('articles/index', {articles: articles})
})

app.listen(3000)

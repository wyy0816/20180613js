const express = require('express')
const pug = require('pug')

const app = express()
dataList=[
  {id: 1, name: "zzz"},
  {id: 2, name: "xxx"}
]

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

app.get('/list', function(req, res) {
  res.render('list', {list:dataList})
})

app.get('/delete/:id',function(req, res){
  var index=0
  for (var i = 0;i< dataList.length;i++)
  {
    if(dataList[i].id ==req) 
    index=i
  }
  dataList.splice(index,1)
  res.redirect('/list')
  }
  )




app.get('/index', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
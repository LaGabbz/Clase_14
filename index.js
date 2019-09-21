const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
res.send('Hello World!')
})

app.post('/post-route', function(req,res){
    res.send('Hello other world');
})

app.put('/put-route', function(req,res){
    res.send('this is a put route');
})

app.delete('/delete-route', function(req,res){
    res.send('this is delete route');
})

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})

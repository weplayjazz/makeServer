const express = require("express")
const fs = require("fs")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/designers", function(req, res){
    res.json({
        designs : [{}, {}, {}, { }]
    })
})

app.get("/user", function(req, res){
    res.json({
        name : "MJ",
        sex : "M"
    })
})

app.get("/board", function(req, res){
    res.json({
        title : "안녕하세요",
        user : "MJ",
    })
})

app.get("/", function(req, res){
    fs.readFile("main.html", function(err, data){
        res.send(data.toString())
    })
})

const db_id = "abc"
const db_pw = "123"

app.post("/process", function(req, res){
    console.log(req.body.myid, req.body.mypw)
})

app.get("/process", function(req, res){

    // 
    // 

    if(req.query.myid == db_id && req.query.mypw == db_pw){
        res.send("login success")
    } else {
        res.send("login fail")
    }

    console.log("아이디는 : " + req.query.myid)
    console.log("비밀번호는 : " + req.query.mypw)
})

app.get("/test", function(req, res){
    res.json({
        number : age
    })
})

app.get("/a", function(req, res){
    res.send("123")
})

app.listen(3000, function(){
    console.log("PORT 3000 OPEND")
})

app.get("/sc", function(req, res){
    res.send("12345")
})
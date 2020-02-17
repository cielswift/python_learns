const express = require('express')
const mysql = require('mysql2')
const redis = require("redis")
const app = express()
const file = require("fs");

const request = require("request");

const connection = mysql.createConnection({
    host: 'mysql.ciel.cl',
    port: 1601,
    user: 'root',
    password: 'ciel',
    database: 'ssh-data'
});
    
//client = redis.createClient(6510, "127.0.0.1");

var xia = {name:"xiapeixin",age:22};

app.get('/', function (req, res) {

    if(req.query.callback == "show"){

    }

    connection.query(
        "SELECT * FROM ssh_user where name like ?",
        ["%夏%"],
        function (err, results, fields) {
            res.json(JSON.stringify(results));
            res.end();
            // for (let i of results) {
            //     res.send(i)
            // }
        });
});

app.get("/redis", function (req, resp) {
    client.set("fff", "ffffuck", redis.print);
    client.get("fff", function (e, r) {
        resp.send(r)
    });

});


app.get("/other",function(req,resp){

    let options = {
        url:'http://nginx.ciel.cl'
        // url: 'https://api.some-server.com/',
        // agentOptions: {
        //     cert: fs.readFileSync(certFile),
        //     key: fs.readFileSync(keyFile),
        //     passphrase: 'password',
        //     securityOptions: 'SSL_OP_NO_SSLv3'
        // }
    };
    request.get(options, function(err, response, body){

        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.write(body);
        resp.end();
    });
});


app.get("/hello",function (req,resp) {
    file.readFile("./hello.html",function (err,data) {
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.write(data);
        resp.end();
    })
});


app.use(express.static('public')); //静态资源

app.get("/vue",function (req,resp) {
    file.readFile("./vue/pei.html",function (err,data) {
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.write(data);
        resp.end();
    })
});


app.get("/citys",function (request,response) {
    file.readFile("./cityall.js",function (err,data) {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });

        response.write(data);
        response.end();
    })
});


var server = app.listen(2500, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Application Demo, visit http://127.0.0.1:2500", host, port)
});





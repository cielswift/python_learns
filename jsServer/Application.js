const express = require('express');
const redis = require("redis");
const file = require("fs");

option = {
    host: "127.0.0.1",
    port: 6510,
    password: "ciel",
    db: 3
};

client = redis.createClient(option);
    
const app = new express();

//引入route模块
const admin  = require("./controller/RouterController");

app.use(express.static('public')); //静态资源

//加载admin模块
app.use("/admin",admin);

function uuidRandom() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}


app.get('/', function (request, response) {
    let ip = request.ip.match(/\d+\.\d+\.\d+\.\d+/).toString();
        client.get(ip.toString(), function (err, reply) {
        if (isNaN(reply)) {
            client.set(ip.toString(), 1);
        } else {
            client.set(ip.toString(), parseInt(reply) + 1);
        }
    });

     let a = 5;
     let b = a || "null--";
     console.log(b);

     let uuid = uuidRandom();
    console.log(uuid);

    client.set(uuid,"xiapeixin");

    response.send(uuid);
    response.end();
});




var server = app.listen(2500, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Application === http://127.0.0.1:2500")
});





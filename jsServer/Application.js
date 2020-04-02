const express = require('express');
const redis = require("redis");
const file = require("fs");

option = {
    host: "127.0.0.1", port: 6510, password: "ciel", db: 3
};

client = redis.createClient(option);
const app = new express();

//引入route模块
const admin = require("./controller/RouterController");
app.use(express.static('public')); //静态资源

//加载admin模块
app.use("/admin", admin);

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

function uuidRandom() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

let Result = function (code, msg) {
    this.code = code;
    this.msg = msg;
    this.setBody = function (body) {
        this.body = body;
        return this;
    }
};

Result.ok = function (msg) {
    return new Result(200, msg);
};

Result.error = function (msg) {
    return new Result(400, msg);
};

app.get('/', function (request, response) {
    let ip = request.ip.match(/\d+\.\d+\.\d+\.\d+/).toString();
    client.get(ip.toString(), function (err, reply) {
        if (isNaN(reply)) {
            client.set(ip.toString(), 1);
        } else {
            client.set(ip.toString(), parseInt(reply) + 1);
        }
    });
    let uid_s = new Array(1 << 10);
    for (let i = 0; i < uid_s.length; i++) {
        uid_s[i] = uuidRandom();
    }

    let body = {
        uuid: uid_s,
    };

    let mp = new Map();

    uid_s.forEach(function (t, i) {
        if (mp.get(t) == null) {
            mp.set(t, 1);
        } else {
            mp.set(t, parseInt(mp.get(t)) + 1);
        }
    });
    response.send(Result.ok("成功").setBody(body));
    response.end();
});


var server = app.listen(2505, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Application === http://127.0.0.1:2505");
    console.log("Application === http://127.0.0.1:2505/html/spali.html");
});





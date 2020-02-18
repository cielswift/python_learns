const express = require("express");

const router = express.Router();

router.get('/', function (request, response) {
    let ip = request.ip.match(/\d+\.\d+\.\d+\.\d+/).toString();
        client.get(ip.toString(), function (err, reply) {
        if (isNaN(reply)) {
            client.set(ip.toString(), 1);
        } else {
            client.set(ip.toString(), parseInt(reply) + 1);
        }
    });
    response.send("hello");
    response.end();
});

router.get("/vue", function (req, resp) {
    file.readFile("./vue/pei.html", function (err, data) {
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.write(data);
        resp.end();
    })
});


router.get("/citys", function (request, response) {
    file.readFile("./cityall.js", function (err, data) {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });

        response.write(data);
        response.end();
    })
});

module.exports = router;
let p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
let p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) { //并行执行两个Promise, resolve的参数组装成一个数组
    console.log(results); // 获得一个Array: ['P1', 'P2']
});


let p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P3');
});
let p4 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P4');
});
Promise.race([p3, p4]).then(function (result) { //由于p1执行较快，Promise的then()将获得结果'P1'。p2仍在继续执行，但执行结果将被丢弃
    console.log(result); // 'P1'
});




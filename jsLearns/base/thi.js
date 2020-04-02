
let st = new Date().getTime();

const file = require("fs");
// 这个“处理器函数”接受两个函数resolve 和 reject 作为其参数。当异步任务顺利完成且返回结果值时，会调用 resolve 函数，
let jk = function (uri) {
    //每当new 一个Promise实例,就会立即执行这个异步函数
    let promise = new Promise(function (resolve, reject) {
        //function 内部写具体的异步操作

        file.readFile(uri, 'utf-8', function (err, data) {
            if (err == null) {
                resolve(data)
            } else {
                reject(err)
            }
        });
    });
    return promise;
};

let pro = jk("C:\\Users\\Administrator\\Desktop\\hhmisback_web-1.0.0-SNAPSHOT.wa");

pro.then(function (data) {  //指定成功的回调, 先于promise里的异步执行;
    console.log("成功+++++++++++++++++++++++");
    console.log(data);
    console.log(new Date().getTime()-st);

    return jk("C:\\Users\\Administrator\\Desktop\\6500_prot_log.txt");  //再返回一个 Promise对象;
}
// ,function (err) {  //失败的回调
//     console.log("失败+++++++++++++++++++++++");
//     console.log(err);
//
//    // return jk("C:\\Users\\Administrator\\Desktop\\6500_prot_log.txt");  //再返回一个 Promise对象;
// }
)

    //这里调用的是 上个resolve或reject(前面失败 不影响后面的执行)  返回的 Promise对象; then里可以只传一个就是 resolve;
    //有时候 我们像控制; 成功后不执行, 失败后执行什么,那么就只用 reject 返回即可;

    .then(function (data) {
    console.log(data);
    console.log("aaa")
  }
  // ,function (err) {
  //       console.log("_____________")
  //   }
    )
    .catch(function (err) {  //如果前面有任何一个.then失败了,那么就会进入catch 里处理,前提是没有一个reject;
        console.log(err);
         console.log("END=======================");
    })



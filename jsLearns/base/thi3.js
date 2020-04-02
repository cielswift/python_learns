//async 告诉程序这是一个异步操作，await 是一个操作符，即 await 后面是一个表达式
// 当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；　当 async 函数抛出异常时
// Promise 的 reject 方法也会传递这个异常值。async 函数中可能会有 await 表达式，await表达式会使 async 函数暂停执行，
// 直到表达式中的 Promise 解析完成后继续         执行 async中await 后面的代码并返回解决结果

//假如这个表达式如果返回的是一个Promise 对象， 那么它的返回值，实际上就是 Promise 的回调函数 resolve 的参数，
// 如果这个Promise rejected 了，await 表达式会把 Promise 的异常抛出。
//假如这个表达式如果返回的是一个常量，那么会把这个常量转为Promise.resolve(xx)，同理如果没有返回值也是Promise.resolve(underfind)

function say() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("DASDSADASD");
        }, 1000);
    });
}

async function testAsync() {
    // const data = await "hello await"; //返回常量
    // return data;

    const data = await say();  //返回Promise 对象;
    return data;
}

const data = testAsync().then(function (data) {
    console.log(data);
    console.log("^^^^^^^^^^SUCCESS^^^^^^^^^^^^^^^^^^^^^^^");
}).catch(function (data) {
    console.log(data);
    console.log("^^^^^^^^^^^^^^^ERROR^^^^^^^^^^^^^^^^^^");
})

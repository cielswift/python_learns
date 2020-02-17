(() =>{
  const obj = {
  name: 'Joe',
  food: 'cake'
  }

    const { name: myName, food: myFood } = obj; //参数解构可以从对象中干中提取所需属性的常用方法。
    console.log(myName, myFood);

    function f({name,food}) {
        console.log(name,food)
    }
    f(obj);

    const arr = [4, 6, -1, 3, 10, 4];
    console.log(...arr);  //展开运算符...可用于提取数组的各个元素


    function myFunc(...args) {  //类似于java的可变参数;
        console.log(args[0] + args[1]);
    }
    myFunc("吖", "额", "嚷嚷");

    
    const myPromise = new Promise(function (f,u) {
      //f(88); //'Success++++++++++++++++++++++: ' + data
       u(99); //Error+++++++++++++++++++++: ' + err
    });


    // Promise 对象是由关键字 new 及其构造函数来创建的。构造函数会，把一个叫做“处理器函数”（executor function）的函数作为它的参数。
    // 这个“处理器函数”接受两个函数resolve 和 reject 作为其参数。当异步任务顺利完成且返回结果值时，会调用 resolve 函数，
    // 而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数
myPromise
  .then(function(data) {
    console.error('Success++++++++++++++++++++++: ' + data);
   })
   .catch(function(err) {
    console.error('Error+++++++++++++++++++++: ' + err);});


        //async 告诉程序这是一个异步操作，await 是一个操作符，即 await 后面是一个表达式
    // 当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；　当 async 函数抛出异常时
    // Promise 的 reject 方法也会传递这个异常值。async 函数中可能会有 await 表达式，await表达式会使 async 函数暂停执行，
    // 直到表达式中的 Promise 解析完成后继续         执行 async中await 后面的代码并返回解决结果

    //假如这个表达式如果返回的是一个Promise 对象， 那么它的返回值，实际上就是 Promise 的回调函数 resolve 的参数，
    // 如果这个Promise rejected 了，await 表达式会把 Promise 的异常抛出。
　　//假如这个表达式如果返回的是一个常量，那么会把这个常量转为Promise.resolve(xx)，同理如果没有返回值也是Promise.resolve(underfind)

       function say() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("DASDSADASD");
            }, 1000);
        });
    }

     async function testAsync() {
        // const data = await "hello await"; //返回常量
        // return data;

         const data  = await say();  //返回Promise 对象;
         return data;
    }

    const data = testAsync().then(function (data) {
        console.log(data);
        console.log("^^^^^^^^^^SUCCESS^^^^^^^^^^^^^^^^^^^^^^^");
    }).catch(function (data) {
        console.log(data);
        console.log("^^^^^^^^^^^^^^^ERROR^^^^^^^^^^^^^^^^^^");
    })

})();

function Hare(){
}
function Fox(){

}
Hare.PAI = 3.1415926; Hare.FUCK = function () {console.error("fuck")}; //静态属性
var ha = new Hare(); ha.name="xiapeixin"; ha.eat = function() {}; ha.sons = ["a","b","c"];  //实例属性

console.log(ha.__proto__ === Hare.prototype);

console.log(ha.constructor.name);

//ha.constructor = Fox; //替换构造函数属性, 适用于原型替换后 新原型没有构造函数的情况;

console.log(ha.hasOwnProperty("name")); //判断对象自身是否拥有某个属性，返回值：布尔类型。
// 对象1.isPrototypeOf(对象2)，判断对象1是否是对象2的原型，或者对象1是否是对象2原型链上的原型

console.log(ha.propertyIsEnumerable("sons")); //判断一个对象是否有该属性，并且这个属性可以被for-in遍历，返回值：布尔类型

Hare.FUCK();

//引擎在对代码进行解释执行之前，会对代码进行预解析，
// 在预解析阶段，会将以关键字var和function开头的语句块提前进行处理。

                // 变量提升 提升的只是变量声明的提升，并不包括赋值 (提升会提升到作用域的顶部,而不会跨作用域)
               // var a;      // 这里是声明
              //  alert(a);   // 变量声明之后并未有初始化和赋值操作，所以这里是 undefined
              //  a = 123;

//变量名代表的函数不会被提升, 如var test = function(){ console.log(123);}  和 var test = new Function(){ console.log(123);}
    //这和变量提升的只是变量声明的提升，并不包括赋值一个道理;
    // 如果函数和变量重名，只会提升函数，变量不会被提升

var ttt = "cnm";
var txt = `可换行 + ${ttt}
           的字符串`;
console.log(txt);

var de = new Date();
console.log(de.toLocaleString());

function fun() {
    for (let i of arguments){console.log(i);} //函数代码体内有一个默认的对象arguments, 它存储着实际传入的所有参数。
}           //arguments.callee 表示当前函数的引用; (fun) ,这有利于匿名函数的递归或者保证函数的封装性。

fun(1,2,3,5);

console.error(">>>>>%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>>>>>>>>>>>>>");

function fn(num1, num2){
    console.log(num1 - num2);
    this.girlfriend = "null";
    console.log(this);
}

var obj1 = {name:"夏培鑫"};

var tt = fn.apply(obj1, [1,2]);

    // 第一个参数：表示函数内部this的指向的对象,也就是 函数内部的this 其实指向的是这个对象;
    // 第二个参数：是一个数组（或者伪数组），数组中的每一项都将作为被调用方法的参数
    //apply方法的第一个参数必须是一个对象！如果传入的参数不是一个对象，那么这个方法内部会将其转化为一个包装对象;

var ee = fn.call(obj1, [1, 3], 0); // [1, 3, 9] 0 , 相当于传递了[1, 3], 0 这两个参数;
                //call 和apply类似,只是不再把第二个参数封装为数组,而是把参数直接传递给函数;

var bb  = fn.bind(obj1, 5);  //bind 会返回一个新的函数
                                    //使用bind()方法使函数拥有预设的初始参数，这些参数会排在最前面，传给绑定函数的参数会跟在它们后面
var bbb = bb(6);
console.log(bbb);


// var bb1  = fn.bindRight(obj1, 5);
// var bbb1 = bb1(6);

console.error(">>%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%>>>>");
//在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，
//process是node.js的一个对象，它代表当前node.js的进程。

function Woman(){
    this.age = 22;

    this.makelove = () =>{
        console.log(this.age); //Woman
    }

    this.fuck = function () {
        console.log(this.age); //Woman

        (() =>{
            console.log(this.age); //Woman ,内部匿名函数指向上一级的this
        })();

        (function () {
            console.log(this); //global 内部函数指向global
        })();

       // this.fuck(); // foo函是global对象调用的
    }

}

var w = new Woman();

w.makelove();
w.fuck();

console.error(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
function Teacher(name, age, gender, workYear, subject) {
  // 借用 Person 函数来给当前对象添加属性
  Person.call(this, name, age, gender);  // 这里的this和 Person里的this 指向的就是当前的Teacher的实例对象,
  this.workYear = workYear;
  this.subject = subject;
}
var tec = new Teacher('张老师', 32, 'male', '7年', '语文');
console.log(tec);

console.error(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function countJc(num){
    if(num<=1){
        return 1;
    }else{
       return num * countJc(num-1);
    }
}

console.log(countJc(17));

function countMi(num,mi){
    if(mi <= 1){
        return num;
    }else{
         return num*countMi(num,mi-1)
    }
}

console.log(countMi(5,6));



function Array22() {

    function Iterator22() {  //定义内部构造函数;
        this.for = () => {
            console.log(this);
            console.log("for i of ....");
        }
    }

    this.it = new Iterator22();

    this.for = function () {
        console.log(this);
        this.it.for();
    }
    
}


var xia = new Array22();

xia.for();

Array22.init = function () { //关联另一个对象;
    this.fff = "ffff";
}

var t  = new Array22.init();

console.log(t.fff);


//闭包 :/ 具体做法就是在函数内部返回一个函数，并且这个函数使用了这个变量
    // 当用户调用最外层的函数的时候，使用的这个变量就会随着返回的函数返回给用户

   // 注意 两次调用函数，返回的数据并不是同一个数据,原因：函数在每次调用的时候，内部的数据会被新创建一次;
            //也就是每次调用,都会产生新的闭包实例

//foo = null;// 手动释放闭包占用的内存!


(()=>{
   var fib = (function () {
  // 缓存对象
  var cache = {};

  // 这个返回函数才是 递归函数!
  return function (num) {
    // 1 首先查看缓存中有没有 num 对应的数据

    /**
        if(cache[num]) {
          return cache[num];
        }
    */
    // 只要缓存对象中存在 num 这个key, 那么结果就应该是 true
    if (num in cache) {
      // 说明缓存中有我们需要的数据
      return cache[num];
    }

    // 2 如果缓存中没有, 就先计算, 并且将计算的结果存储到缓存中
    if (num === 0 || num === 1) {
      // 存储到缓存中
      // cache[num] = 1 是一个赋值表达式, 赋值表达式的结果为: 等号右边的值!
      return (cache[num] = 1);
    }

    // arguments.callee 表示当前函数的引用
    return (cache[num] = arguments.callee(num - 1) + arguments.callee(num - 2));
  };
})();

let ret = fib(20);
console.log(ret);
})();



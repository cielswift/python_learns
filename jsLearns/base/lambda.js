
function even(i){  //不能使用匿名函数,因为匿名函数的this是window;
    return i % this === 0;
}

const listOfNumbers = [8,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = listOfNumbers.filter(even,2);  //第一个参数必须是函数,必须返回boolean值;//第二个参数规定回调函数中this所指向的对象;
console.log(arr);

    //filter：返回一个数组，只有当指定函数返回 true 时，相应的元素才会被包含在这个数组中
    //map：返回一个数组，其中每个元素都使用指定函数进行过转换
    //reduce:按函数中指定的值累加

aac = listOfNumbers.find(function (i) { //返回与指定条件匹配的第一个实例，如果查到不会继续查找其他匹配的实例。 只返回第一个;
    return true;                    //findIndex：这与find几乎完全相同，但不是返回第一个匹配元素，而是返回第一个匹配元素的索引。
});                                 //indexOf：与findIndex几乎完全相同，但它不是将函数作为参数，而是采用一个简单的值。

                                    //push：它将一个项添加到数组的末尾 pop:这将从数组中删除最后一项。 shift:从数组中删除第一项
                                    //unshift:将一个或多个元素添加到数组的开头。
//slice：从指定的起始位置和指定的结束位置之前返回数组的浅拷贝。 如果未指定结束位置，则返回数组的其余部分。 重要的是，此方法不会修改数组，而是返回所需的子集。
//splice(1, 0, 'b'); 在数组的位置 1 上删除 0 个元素，并插入 b

console.log("lllllllllllll"+aac);

var people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];

let qq = people.map(function (t,i) { //第一个参数必须是函数,返回要修改后的内容;
        return `${t.name} is ${t.age} ears old ${this.toString()}  ;;;${i}`; //占位符 ,用来替换 必须用``包围;
});

console.log(qq);


let values = [1, 2, 3, -4, 5];
const updateListMap =  values.map(Math.abs);
const updateListMap1 = values.map(function (i) { //updateListMap1 === updateListMap
        return Math.abs(i);
});

console.warn(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;

const getTotalAmount = (cart) => cart.reduce(sumAmount, 0); //第二个参数会参与到第一个参数(回调函数)的每次运算中;

console.log(getTotalAmount(shoppingCart));

var fc = shoppingCart.reduce(function (a,b) {
        return a + b.amount;
},0);

console.log(fc);
console.warn(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


//使用 filter 函数过滤书籍类型
// 使用 map 函数将购物车转换为数量的集合
// 使用 reduce 函数累加所有项目
let shoppingCart2 = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
];


const byBooks = (order) => order.type === "books";
const getAmount = (order) => order.amount;
const sumAmount2 = (acc, amount) => acc + amount;

function getTotalAmount2(shoppingCart) {
  return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount2, 0);
}

var re = getTotalAmount2(shoppingCart2);
console.log(re);

// 一个嵌套的一元函数
const addCurried = x => y => x + y;
console.log(addCurried(2)(3));

function a(a){
    return function (b) {
        return a+b;
    }
}

ee = a(5)(6);
console.log(ee);

console.warn(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

const Container = function (value) {
  this.value = value
}

Container.of = function (value) {
  return new Container(value)
}

Container.prototype.map = function (fn) {
    console.log(this);
  return Container.of(fn(this.value))
}

// 然后我们实现一个数字的 double 操作
let double = (x) => x + x;
var ty = Container.of(3).map(double);
var tyy= Container.of(3).map(double).map(double).map(double);
console.log(tyy);

function add(x, y, z){
    return 100*x + 10 * y + z;
}

let add1 = add.bind(null, 1, 2);
//let add2 = add.bindRight(null, 1, 2);

console.log(add1(3)); //123
//add2(3); //321
(()=>{
    let arr = ["ad","sad","ds"];

// for (let i of arr){
//     for (let j of i){
//         console.log(j)
//     }
// }

// arr.forEach((i,item) =>{
//     console.log(i)
//     console.log(item)
// })

let a = parseInt("159");

console.error(a);
console.error(Math.round(23.4));

let hour = new Set([9,9,6,7]);

let maps = new Map();
maps.set("S","S1"); maps.get("S");
maps.delete("S");maps.clear();maps.has("S");


arr.slice(0,2);// 去第0个和第1个后返回数组;
arr.slice(-3); //去掉最后三个返回数组
})();

const rg = /\d{17}[X|\d]/g;  //i 大小写不敏感, g全局(查找所有匹配而非在找到第一个匹配后停止), m多行匹配;
const id = "xiapeixin37112119960112235X";

var is1 = id.match(rg); //返回符合匹配的 字符数组
console.log(is1);

console.warn("------------------------------")

is3 = id.search(rg); // search() 方法 用于检索字符串中指定的子字符串，并返回子串的起始位置。
console.log(is3);

is4 = id.replace(rg,"你爹"); // replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
console.log(is4);

is6 = id.split(rg);
console.log(is6); //该方法主要用来将一个字符串拆分成一个数组，它接受一个正则或者子字符（串）作为参数


console.error("ooooooooooooooooooooooooooo");
//正则的方法
// var is2 = rg.test(id);  //是否匹配到了 boolean
// console.log(is2);

var is5 = rg.exec(id); //如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null,继续执行将从当前下标位置开始匹配,而不是0;
console.log(is5);
        //[ '37112119960112235X', index: 9, input: 'xiapeixin37112119960112235X', groups: undefined ]
        //index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。

rg.compile(rg); //正则表达式进行编译，被编译过的正则在使用的时候效率会更高

//[\u4E00-\u9FA5\\s]+ 多个汉字，包括空格
// [\u4E00-\u9FA5]+ 多个汉字，不包括空格
// [\u4E00-\u9FA5] 一个汉字

const rgx = /^\d*T$/g; //^和$分别代表字符串的开始和结束，
                        //\b是正则表达式规定的一个特殊代码，代表着单词的开头或结尾，也就是单词的分界处。
                        // 虽然通常英文的单词是由空格，标点符号或者换行来分隔的，但是\b并不匹配这些单词分隔字符中的任何一个，它只匹配一个位置。
const name= "51561T";

let et = name.match(rgx);

console.log(et);


console.warn("<<<<<<<<<<<<<<<<");

const rgix = /^AR.+\d{2,5}$/g;

let se = "AR@15";

var arts = [];

const rg2 = /1\d{10}/g;



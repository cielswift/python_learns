var name = "null";
var mynale = name || "ciel"; //短路取值
console.log(mynale);

var xiapeixin = {
    name : "xiapeixin"
}


function names(){
    console.log(this);
}

names();
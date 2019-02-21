// let 和 const

//变量声明

var s = 1; //ES5

/**
 * var的问题：
 * var s = 1;  var another = function() { var s = 2}; another(); console.log(s);  //输出 1
 * js的函数作用域
 * var s = 2; if(true) { var s = 1 }; console.log(s);    //输出 1
 * js中只有函数作用域 而 没有块级作用域
 * 通过函数作用域 函数作用域内的赋值不会影响外面的
 * 通过块级作用域 里面的变量赋值会影响外面的
 * 
 * let和const就是为了解决var作用域的问题  产生 块级作用域
 * let s = 2; if(true) { let s = 1 }; console.log(s);   //输出 2
 * 
 * node启动v8环境
 */

let a = 0 ;

// 适用for 循环
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// //比对

// 块级作用域
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
f1()

/**
 * 编译后
 * function f1() {
  var n = 5;
  if (true) {
    var _n = 10;
  }
  console.log(n); // 5
}
f1();
 */

const C= 'C'; // readonly 
//C = 'D';    // SyntaxError: src/ES6/let_const.js: "C" is read-only

const c= { // point to a reference 堆栈存储 指针
	a:1
}
// c={a: 2}; // point to another reference   
c.a = 2;    // c的reference并没有变 可以



















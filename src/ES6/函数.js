//函数参数的默认值

// 1. arrow function  箭头函数

const another = function() {
	// function body
	return {
		a: 'hello world'
	}
}

// ==>
const C = 'c';  
const s = () => {
	const C = 's';    //作用域中没有C即可,function作用域中上下文中没有const c 所以可以声明
	return {
		a: 'hello world'
	}
}

//如果返回值非常简单是不用写function body的
const lit = () => '1';
lit();           // '1'


//ES5中函数的几种调用方法
var s2 = fn;
fn.apply(this, [arguments]);
fn.call(this, 1,2,3,4)
fn(1, 2, 4, 5)    //执行1+2+4+5... 如何处理动态化参数？？？


//参数不定 采用apply  数组扩展
// 一个function （入参 + 返回值）是函数最重要的
const pa = (...args) => {
	console.log(args);
	return args.reduce((pre,cur) => {
		return pre+cur;
	}, 0);
};
pa(1, 2, 45);
pa.apply(this, [1,2,45]);     //48


//解构赋值
let a = [1,2,3];
let [c, ...d] = a;
console.log(d);    //d=>[2, 3]


//解构赋值错误写法
// var arraytest = [1, 2, 3];
// let[...c, d] = arraytest;
// console.log(d);
// SyntaxError: Rest element must be last element  数组最后一项才可以

// 支持 参数 初始值定义y
function log(x, y = 'World') {
  console.log(x, y);
}
log('hello'); // Hello World
log('Hello', 'haha');   //Hello haha


//rest参数
function add(a, b, ...values) {
  console.log(values)
}
add(2, 5, 3) // 10

console.log(5,...[1, 2, 3])

//函数中this的指向依赖函数对应的调用方式

const s1 = function(){
	return () => {
		console.log(this)
	}
};
s();  //浏览器环境中是window   node环境中是global
s1.apply({a:1})        //function

// //箭头函数 {}
// var f = v => v;
// var f1 = v=>{
// 	console.log(this)
// }
var f3 = function(v){
	//this
	return v=>{
		console.log(this);
	}
}

// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
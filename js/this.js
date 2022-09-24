"use strict";

// function showThis() {
// 	console.log(this);
// }
// showThis();

// function show(a,b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }
// show(2,4);



// const obj = {
// 	a: 20,
// 	b: 3,
// 	sum: function() {
// 		console.log(this);
// 		function sh() {
// 			console.log(this);
// 		}
// 		sh();
// 	}
// };
// obj.sum();


// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// }
// const dima = new User('Dima', 33);

// function sayName() {
// 	console.log(this);
// 	console.log(this.name);
// }

// const obj = {
// 	name: "john",
// };

// sayName.call(obj);
// sayName.apply(obj);

function count(num) {
	return this*num;
}
const double = count.bind(2);
console.log(double(3));



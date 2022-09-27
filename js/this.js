// "use strict";


// // function show(a,b) {
// // 	// console.log(this);
// // 	function sum() {
// // 		// console.log(this);
// // 		return a+b;
// // 	}
// // 	console.log(sum());
// // }
// // show(4,4);

// // let obj = {
// // 	a: 33,
// // 	b: 11,


// // };
// // obj.su();



// // function user (name) {
// // 	this.name = name;
// // 	console.log(this);

// // }
// // let ivan = new user('ivan');
// // console.log(ivan);


// function say() {
// 	console.log(this.name);
// }

// const obj = {
// 	name: 'john'
// };

// // say.call(obj, 'jonsoniuk');
// // say.apply(obj, ['smith']);
// // say.bind(obj);
// // say.call(obj);
// let bbb = say.bind(obj);
// console.log(bbb());


// function count(num) {
// 	return this*num;
// }
// const dob = count.bind(2);
// console.log(dob(3));



// const obj = {
// 	d: 12,
// 	say: function() {
// 		const jjj = () => {
// 			console.log(this);
// 		};
// 		jjj();
// 	}
// };

// const dub = a => a*2;
// console.log(dub(12));






























// // function showThis() {
// // 	console.log(this);
// // }
// // showThis();

// // function show(a,b) {
// // 	console.log(this);
// // 	function sum() {
// // 		console.log(this);
// // 		return a + b;
// // 	}
// // 	console.log(sum());
// // }
// // show(2,4);



// // const obj = {
// // 	a: 20,
// // 	b: 3,
// // 	sum: function() {
// // 		console.log(this);
// // 		function sh() {
// // 			console.log(this);
// // 		}
// // 		sh();
// // 	}
// // };
// // obj.sum();


// // function User(name, id) {
// // 	this.name = name;
// // 	this.id = id;
// // 	this.human = true;
// // }
// // const dima = new User('Dima', 33);

// // function sayName() {
// // 	console.log(this);
// // 	console.log(this.name);
// // }

// // const obj = {
// // 	name: "john",
// // };

// // sayName.call(obj);
// // sayName.apply(obj);

// // function count(num) {
// // 	return this*num;
// // }
// // const double = count.bind(2);
// // console.log(double(3));

// // const btn = document.querySelector('.btn');

// // btn.addEventListener('click', function() {
// // 	console.log(this);
// // });

// // btn.addEventListener('click', () => {
// // 	console.log(this);
// // });


















// // function show() {
// // 	console.log(this);
// // }
// // show();
// // show();


// // function showThis(a, b) {
// // 	// console.log(this);
// // 	function sum() {
// // 		// console.log(this);
// // 		return a + b;
// // 	}
// // 	console.log(sum());
// // }
// // showThis(1, 4);


// // const obj = {
// // 	a: 20,
// // 	sum: function sh() {
// // 		console.log(this);
// // 		// sh();
// // 	}
// // };

// // obj.sum();









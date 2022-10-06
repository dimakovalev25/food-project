// 'use strict';

// const num = new Number(3);
// console.log(num);

// const f = new Function(3);
// console.log(f);


function user(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`hello ${this.name}`);
	}

}
const ivan = new user('ivan', 20);
const ann = new user('ann', 24);
// console.log(ivan);
// console.log(ann);
// ivan.hello();
// ann.hello();

user.prototype.exit = function() {
	console.log(`user ${this.name}`);
};
ivan.exit();





























// const num = new Number(3); 
// console.log(num);

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log('hello');
// 	};
// }

// User.prototype.exit = function() {
// 	console.log(`User ${this.name} finish`);
// };

// const dima = new User('Dima', 33);
// const alex = new User('Alex', 34);

// dima.exit();
// dima.hello();

// console.log(dima);
// console.log(alex);













// const num = new Number(3);
// console.log(num);



// function user(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`hello ${this.name}`);
// 	};
// }

// user.prototype.exit = function() {
// 	console.log(`user ${this.name} finish`);
// };



// const ivan = new user('ivan', 23);
// const sasha = new user('alex', 23);

// ivan.exit();
// ivan.hello();
// sasha.hello();

// console.log(ivan);
// console.log(sasha);










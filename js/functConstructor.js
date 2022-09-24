'use strict';

// const num = new Number(3); 
// console.log(num);

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log('hello');
	};
}

User.prototype.exit = function() {
	console.log(`User ${this.name} finish`);
};

const dima = new User('Dima', 33);
const alex = new User('Alex', 34);

dima.exit();
dima.hello();

console.log(dima);
console.log(alex);
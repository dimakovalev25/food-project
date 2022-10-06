'use strict';

const obj = {
	name: 'alex',
	age: 25,

	get userAge() {
		return this.age;
	},

	set userAge(num) {
		this.age = num;
	}
	
};

console.log(obj.userAge);

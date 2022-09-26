'use strict';

const obj = {
	name: 'alex',
	tel: '99999999',
	parents: {
		mom: 'anna'
	}
};

// console.log(JSON.stringify(obj));

const clone = JSON.parse(JSON.stringify(obj));
clone.parents.mom = '!';

console.log(clone);
console.log(obj);
'use strict';

// forEach перебирает но не возвращает новый массив!


// filter   возвращает новый массив

const names = ['ivan', 'rex', 'volandemarrt'];

const names2 = names.filter((name) => {
	return name.length < 5;
});

console.log(names2);


//  map!

const answers = ['Tr', 'RR', 'TyT'];

const res = answers.map((item) => {
	return item.toLowerCase();
});

console.log(res);

// every/some    возвращают или true /false

const arr = [4, 'ggg', '55'];
console.log(arr.every(item => typeof(item) === 'number'));
console.log(arr.some(item => typeof(item) === 'number'));


// reduce  собрать массив в 1 целое

const arr = [null, 4, 5, 6, 1, 't', false];
const ress = arr.reduce((sum, i) => {
	return sum + i;
});
console.log(ress);


const arrr = ['a', 'b'];
const ress = arrr.reduce((sum, i) => {
	return sum + ', ' + i;
});
console.log(ress);





const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: 'animal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);




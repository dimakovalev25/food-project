// 'use strict';

// // // forEach перебирает но не возвращает новый массив!


// // // filter   возвращает новый массив

// const names = ['ivan', 'rex', 'volandemarrt'];

// const names2 = names.filter((name) => {
// 	return name.length < 5;
// });

// console.log(names2);


// // //  map!

// const answers = ['Tr', 'RR', 'TyT'];
// const res = answers.map((item) => {
// 	return item.toLowerCase();
// });
// console.log(res);

// // // every/some    возвращают или true /false

// const arr = [4, 'ggg', '55'];
// console.log(arr.every(item => typeof(item) === 'number'));
// console.log(arr.some(item => typeof(item) === 'number'));


// // // reduce  собрать массив в 1 целое

// const arr = [null, 4, 5, 6, 1, 't', false];
// const ress = arr.reduce((sum, i) => {
// 	return sum + i;
// });
// console.log(ress);


// const arrr = ['a', 'b'];
// const ress = arrr.reduce((sum, i) => {
// 	return sum + ', ' + i;
// });
// console.log(ress);

// const obj = {
// 	ivan: 'persone',
// 	ann: 'persone',
// 	dog: 'animal',
// 	cat: 'animal',
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);
// console.log(newArr);






// // P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...


// // Пример:

// // showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"


// // Пример:

// // setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

// // 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)


// const films = [
// 	{name: 'Titanic',rating: 9
// },{name: 'Die hard 5',rating: 5
// },{name: 'Matrix',rating: 8
// },{name: 'Some bad film',rating: 4}
// ];
// // 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
// let tranformedArray = [];
// function setFilmsIds(arr) {
// 	let position = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		let str = arr[i];
// 		str.id = position;
// 		position++;
// 		tranformedArray.push(str);
// 	}
// 	return tranformedArray;
// }
// setFilmsIds(films);


// function checkFilms(arr) {
// 	console.log(arr.every((item) => typeof(item.id) === 'number'));
// 	// let res = arr.every((item) => typeof(item.id) === 'number');
// }
// checkFilms(tranformedArray);






// // 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
// function showListOfFilms(arr) {
// 	const res = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		res.push(arr[i].name);
// 	}
// 	console.log(res.join(', '));
// }
// showListOfFilms(films);



// // 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
// function showGoodFilms(films) {
// 	const res = films.filter((el) => {
// 		return el.rating >= 8;
// 	});
// 	console.log(res);
// }
// showGoodFilms(films);




// // const tranformedArray = setFilmsIds(films);

// // function checkFilms(arr) {
	
// // }












// // 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
// // getPositiveIncomeAmount(funds) => 13300

// // 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
// // getTotalIncomeAmount(funds) => -500

// const funds = [
// 	{amount: 1400},	{amount: 2400},	{amount: 1000},	{amount: 500},	{amount: 10400},	{amount: 11400}
// ];

// const getPositiveIncomeAmount = (data) => {
// 	let res = 0;
// 	for (let i = 0; i < data.length; i++) {
// 		if (data[i].amount > 0) {
// 			res += data[i].amount;
// 		} else {
// 			continue;
// 		}
// 	}
// 	console.log(res);
// };
// getPositiveIncomeAmount(funds);


// const getTotalIncomeAmount = (data) => {

// 	// let res = 0;
// 	// // res = data.some((item) => item.amount < 0);
// 	// console.log(data.some((item) => item.amount < 0));
// 	let ress = 0;
// 	if (data.some((item) => item.amount < 0) === true) {
// 		for (let i = 0; i < data.length; i++) {
// 			ress += data[i].amount;
// 		}
// 	} else {
// 		getPositiveIncomeAmount(funds);
// 	}
// 	console.log(ress);

// };
// getTotalIncomeAmount(funds);
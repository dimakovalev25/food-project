'use strict';

// console.log("1");

// setTimeout(() => {

// 	const arr = ['q'];
// 	console.log('2');

// 	setTimeout(() => {
// 		arr.push('w');
// 		console.log(arr);
// 	}, 1000);
// }, 1000);







console.log("1");

const prom = new Promise(function(resolve, reject) {
	setTimeout(() => {
	
		const arr = ['q'];
		console.log('2');
	
		resolve(arr);
	}, 1000);
});

prom.then((arr) => {
	setTimeout(() => {
		arr.push('w');
		console.log(arr);
	}, 1000);
});




























// console.log('search data...');

// setTimeout(() => {
// 	console.log('made data...');

// 	const product = {
// 		name: 'phone',
// 	};

// 	setTimeout(() => {
// 		product.status = 'error';
// 		console.log(product);

// 	}, 1000);

// }, 1000);

// //callbackHELL

// console.log('search data...');
// const req = new Promise(function(resolve, reject) {    

// 	setTimeout(() => {
// 		console.log('made data...');
	
// 		const product = {
// 			name: 'phone',
// 		};

// 		resolve(product);

// 	}, 1000);
// });


// req.then((product) => {
// 	// console.log('data getting');

// 	const req2 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'in way';
// 			resolve(product);
// 			// console.log(product);
		
// 		}, 1000);
// 	});

// 	req2.then(data => {
// 		console.log(data);
// 	});
// }); 














// console.log('search data...');
// const req = new Promise(function(resolve, reject) {    

// 	setTimeout(() => {
// 		console.log('made data...');
	
// 		const product = {
// 			name: 'phone',
// 		};

// 		resolve(product);

// 	}, 1000);
// });


// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'in way';
// 			resolve(product);
// 		}, 1000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then(data => {
// 	console.log(data);

// });



























// // console.log('zapros...');

// // const req = new Promise(function(resolve, reject){
// // 	setTimeout(() => {
// // 		console.log('podgotovka...');
	
// // 		const product = {
// // 			name: 'tv',
// // 			price: 200,
// // 		};
	
// // 		resolve();
// // 	}, 1000);
// // });

// // req.then(() => {
// // 	console.log('data poluchena');
// // });

// // setTimeout(() => { 
// // 	product.status = "orded";
// // 	console.log(product);
// // }, 1000);
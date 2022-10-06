
let arr = ['alex',1,1,1,2];
// let arr = ['alex', 'alex', 'oleg'];

function uniq(arr) {
	return Array.from(new Set (arr));
}

console.log(uniq(arr));

const set = new Set(arr);

set.add('sef');
set.has('1');
set.has('alex');
// set.clear();

console.log(set.values());

set.forEach((value, valueAgain, set) => {
	console.log(value);
});

for (let value of set) {
	console.log(value);
}


console.log(set);
console.log(set.has('ale'));
console.log(set.size);



// amountOfPages(5) => 5
// amountOfPages(25) => 17
// amountOfPages(1095) => 401   

function amountOfPages(n) {
	let res = [];
	for (let i = 1; i <= n; i++) {
		if (res.length < n) {
			res.push(i);
			res = res.join("").split("");
		} else if (res.length == n) {
			break;
		}
	}
	res = res.join("");
	// console.log(res.length);

	if (res.length <= 9) {
		console.log(res.slice(-1,));
		return res.slice(-1, );
	} else if (res.length > 9 && res.length <= 189) {
		console.log(res.slice(-2, ));
		return res.slice(-2, );
	} else if (res.length > 189) {
		console.log(res.slice(-3, ));
		return res.slice(-3, );
	}
}
amountOfPages(11);


function amountOfPages(summary) {
	let n = summary;
	let res = [];
	for (let i = 1; i <= n; i++) {
		if (res.length < n) {
			res.push(i);
			res = res.join("").split("");
		} else if (res.length == n) {
			break;
		}
	}
	res = res.join("");
	// console.log(res.length);

	if (res.length <= 9) {
		console.log(res.slice(-1,));
		return res.slice(-1, );
	} else if (res.length > 9 && res.length <= 189) {
		console.log(res.slice(-2, ));
		return res.slice(-2, );
	} else if (res.length > 189) {
		console.log(res.slice(-3, ));
		return res.slice(-3, );
	}
}
amountOfPages(185);
amountOfPages(1095);
amountOfPages(189);
amountOfPages(25);
amountOfPages(5);
amountOfPages(9);
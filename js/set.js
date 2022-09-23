
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




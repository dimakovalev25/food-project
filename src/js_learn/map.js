const shop = [
	{rice: 500},
	{oil: 200},
];

const map = new Map([
	[{paper: 400}, 8000]
]);
// map.set(shop[0], 4000);
// map.set(shop[1], 14000);


const budjet = [4000, 14000]; 

shop.forEach((shop, i) => {
	map.set(shop, budjet[i]);
});

// console.log(map);

map.keys();

map.forEach((value, key, map) => {
	console.log(key, value);
});


for (let [shop, price] of map.entries()) {
	console.log(price, shop);
}

for (let price of map.entries()) {
	console.log(price);
}


for (let price of map.values()) {
	console.log(price);
}

const goods = [];
for (let shop of map.keys()) {
	goods.push(Object.keys(shop)[0]);
}
console.log(goods);

for (let shop of map.keys()) {
	console.log(shop);
}






console.log(map);  /* Map(2) { { rice: 500 } => 4000, { oil: 200 } => 14000 } */
console.log(map.get(shop[0]));    /* 4000 */
console.log(map.has(shop[0]));    /* true */
console.log(map.delete(shop[0]));    /* delete element */
console.log(map);   /* Map(1) { { oil: 200 } => 14000 } */
console.log(map.clear());  /*  delete map */
console.log(map);
console.log(map.size);






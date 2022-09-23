const timer = setTimeout(() => {
	console.log("!");
}, 1500);


const timerw = setTimeout((text) => {
	console.log(text);
}, 1000, "1");





function logger () {
	console.log('2');
}

const tim = setTimeout(logger, 2000);



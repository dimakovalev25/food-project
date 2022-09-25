
"use strict";

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height*this.width;
	}
}

// const square = new Rectangle(12, 13);
// const long = new Rectangle(20, 100); 
// console.log(square.calcArea());
// console.log(square);

class ColoredRectangle extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}
	showMyProps() {
		console.log(`text: ${this.text}, color: ${this.bgColor}`);
	}
}
const div = new ColoredRectangle(12, 11, 'rrr', 'green');
div.showMyProps();
console.log(div.calcArea());

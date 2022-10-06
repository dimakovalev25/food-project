"use strict";

class menuCard {
	constructor(src, alt, title, descr, price, parentSelector){
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.descr = descr;
		this.price = price;
		this.parent = document.querySelector(parentSelector);
		this.transfer = 27;
		this.changeToUAH();

	}

	changeToUAH() {
		return this.price * this.transfer;

	}

	render() {
		const element = document.createElement('div');
		element.innerHTML = `
			<div class="menu__item">
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			</div>
		`;
		this.parent.append(element);
	}
}

new menuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		".menu .container"
).render();










































// class menuCard {
// 	constructor(src, alt, title, descr, price, parentSelector) {

// 		this.src = src;
// 		this.alt = alt;
// 		this.title = title;
// 		this.descr = descr;
// 		this.price = price;
// 		this.parent = document.querySelector(parentSelector);
// 		this.transfer = 27;
// 		this.changeToUAH();
// 	}

// 	changeToUAH() {
// 		this.price = this.price * this.transfer;
// 	}

// 	render() {
// 		const element = document.createElement('div');
// 		element.innerHTML = `
// 			<div class="menu__item">
// 				<img src=${this.src} alt=${this.alt}>
// 				<h3 class="menu__item-subtitle">${this.title}</h3>
// 				<div class="menu__item-descr">${this.descr}</div>
// 				<div class="menu__item-divider"></div>
// 				<div class="menu__item-price">
// 						<div class="menu__item-cost">Цена:</div>
// 						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
// 				</div>
// 			</div>
// 		`;

// 		this.parent.append(element);
// 	}
// }

// // const div = new menuCard();
// // div.render();

// new menuCard(
// 		"img/tabs/vegy.jpg",
// 		"vegy",
// 		'Меню "Фитнес"',
// 		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
// 		9,
// 		".menu .container"
// ).render();



































// class Rectangle {
// 	constructor(width, heigth){
// 		this.width = width;
// 		this.heigth = heigth;

// 	}

// 	calcArea() {
// 		return this.width*this.heigth;
// 	}
// }


// class RectangleColor extends Rectangle {
// 	constructor(width, heigth, text){
// 		super(width, heigth);
// 		this.text = text;
		
// 	}
// 	show() {
// 		console.log(this.width);
// 	}
// }

// const rex = new RectangleColor(200,10, "Ttttt");
// console.log(rex);


// // const qw = new Rectangle(12, 90);
// // const long = new Rectangle(120, 90);
// // console.log(qw.calcArea());
// // console.log(long);

























// class Rectangle {
// 	constructor(heigth, width){
// 		this.heigth = heigth;
// 		this.width = width;
// 	}

// 	calcArea() {
// 		return this.heigth*this.width;
// 	}
// }

// class RectangleColor extends Rectangle {
// 	constructor(heigth, width, text, color){
// 		super(heigth, width);
// 		this.text = text;
// 		this.color = color;

// 	}

// 	showMyProps() {
// 		console.log(`text: ${this.text}, color: ${this.color}`);
// 	}
// }

// const div = new RectangleColor(25, 10, 'RRRRR', "RED");
// div.showMyProps();
// console.log(div.calcArea());


// const square = new Rectangle(23, 55);
// const long = new Rectangle(2, 55);
// console.log(square);
// console.log(long);






































// class Rectangle {
// 	constructor(height, width) {
// 		this.height = height;
// 		this.width = width;
// 	}

// 	calcArea() {
// 		return this.height*this.width;
// 	}
// }

// // const square = new Rectangle(12, 13);
// // const long = new Rectangle(20, 100); 
// // console.log(square.calcArea());
// // console.log(square);

// class ColoredRectangle extends Rectangle {
// 	constructor(height, width, text, bgColor) {
// 		super(height, width);
// 		this.text = text;
// 		this.bgColor = bgColor;
// 	}
// 	showMyProps() {
// 		console.log(`text: ${this.text}, color: ${this.bgColor}`);
// 	}
// }
// const div = new ColoredRectangle(12, 11, 'rrr', 'green');
// div.showMyProps();
// console.log(div.calcArea());

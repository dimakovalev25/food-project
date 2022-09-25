'use strict';

class MenuCard {
	constructor(src, alt, title, descr, price, parentSelector) {
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
		this.price = this.price * this.transfer;
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

// const div = new MenuCard();
// div.render();

new MenuCard(
	"img/tabs/vegy.jpg",
	"vegy",
	'Меню "Фитнес"',
	'Меню "Фитнес" - это новый подход к приготовлению блюд',
	9,
	'.menu .container',
).render();

new MenuCard(
	"img/tabs/vegy.jpg",
	"vegy",
	'Меню "Фитнес"',
	'Меню "Фитнес" - это новый подход к приготовлению блюд',
	9,
	'.menu .container',
).render();

















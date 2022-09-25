"use strict";

window.addEventListener("DOMContentLoaded", () => {

	const tabs = document.querySelectorAll('.tabheader__item');
	const tabsContent = document.querySelectorAll('.tabcontent');
	const tabsParent = document.querySelector('.tabheader__items');
	
	// console.log(tabsContent);
	// console.log(tabsParent);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});
		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabs[i].classList.add('tabheader__item_active');
	}

	
		hideTabContent();
		showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if(target && target.classList.contains("tabheader__item")) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}

	});

	// class MenuCard {
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
	// 					<div class="menu__item-cost">Цена:</div>
	// 					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
	// 			</div>
	// 	</div>
	// 		`;
	// 		this.parent.append(element);
	// 	}
	// }
	
	// // const div = new MenuCard();
	// // div.render();
	
	// new MenuCard(
	// 	"img/tabs/vegy.jpg",
	// 	"vegy",
	// 	'Меню "Фитнес"',
	// 	'Меню "Фитнес" - это новый подход к приготовлению блюд',
	// 	9,
	// 	'.menu .container',
	
	
	// ).render();

});






























// window.addEventListener("DOMContentLoaded", () => {

// 	const tabs = document.querySelectorAll(".tabheader__item");
// 	const tabsContent = document.querySelectorAll(".tabcontent");
// 	const tabsParent = document.querySelector(".tabheader__items");

// 	console.log(tabsContent);

// 	function hideTabContent() {
// 		tabsContent.forEach(item => {
// 			item.style.display = "none";
// 		});

// 		tabs.forEach(item => {
// 			item.classList.remove('tabheader__item_active');
// 		});
// 	} 

// 	function showTabContect(i = 0) {
// 		tabsContent[i].style.display = 'block';
// 		tabs[i].classList.add('tabheader__item_active');

// 	}

// 	hideTabContent();
// 	showTabContect();

// 	tabsParent.addEventListener('click', (event) => {
// 		const target = event.target;

// 		if(target && target.classList.contains('tabheader__item')) {
// 			tabs.forEach((item, i) => {
// 				if (target == item) {
// 					hideTabContent();
// 					showTabContect(i);
// 				}
// 			});
// 		}

// 	});

// });




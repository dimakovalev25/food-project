'use strict';
//modal
// window.addEventListener('DOMContentLoaded', () => {
// 	const modalTrigger = document.querySelector('[data-modal]'); 
// 	const modal = document.querySelector('.modal'); 
// 	const modalCloseBTN = document.querySelector('[data-close]'); 
	// 	modalTrigger.addEventListener('click', () => {
// 		console.log('!');
// 		modal.classList.add('show');
// 		modal.classList.remove('hide');
// 	});
	// 	modalCloseBTN.addEventListener("click", () => {
// 		console.log("-");
// 		modal.classList.add('hide');
// 		modal.classList.remove('show');
// 	});
// });
    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            // Либо вариант с toggle - но тогда назначить класс в верстке
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = '';
    }
    
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });
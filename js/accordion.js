const accordion = document.getElementsByClassName("accordion-iteam-main");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    }
    )
}


// const accordionItems = document.querySelectorAll('.accordion-iteam-main');
 
// accordionItems.forEach(item => {
//     const title = item.querySelector('.accordion-lable');
//     const content = item.querySelector('.accordion-content');
 
//     title.addEventListener('click', () => {
//         for (i = 0; i < accordionItems.length; i++) {
//             if (accordionItems[i] == item) {
//                 item.classList.toggle('active');
 
//             } else {
//                 // toggle the accordion item
//                 accordionItems[i].classList.remove('active');
//             }
//         }
//     });
// });



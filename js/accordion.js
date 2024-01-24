// const accordion = document.getElementsByClassName("accordion-iteam-main");

// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//     }
//     )
// }



// active and remove 

let accordionitems = document.querySelectorAll(".accordion-iteam-main");

accordionitems.forEach(item => {
    let lable = item.querySelector(".accordion-lable");
    let content = item.querySelector(".accordion-content");
    lable.addEventListener('click', function () {
        for (i = 0; i < accordionitems.length; i++) {
            if (accordionitems[i] == item) {
                item.classList.toggle("active");
            }
            else {
                accordionitems[i].classList.remove("active");
            }
        }
    });
});

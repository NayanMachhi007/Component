let tabButtons = document.querySelectorAll(".buttonlinks");

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    let tabName = this.dataset.tab;
    let tabContent = document.getElementById(tabName);
    let allTabContent = document.querySelectorAll(".btncontent");
    let allTabButtons = document.querySelectorAll(".buttonlinks");

    for (let j = 0; j < allTabContent.length; j++) {
      allTabContent[j].style.display = "none";
    }

    for (let k = 0; k < allTabButtons.length; k++) {
      allTabButtons[k].classList.remove("active");
    }
    tabContent.style.display = "block";
    this.classList.add("active");
  });
}
document.querySelector(".buttonlinks").click();

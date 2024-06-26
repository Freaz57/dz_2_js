// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropItem = document.querySelectorAll(".dropdown-item");

dropItem.forEach(item => {
    item.classList.add("super-dropdown");
})
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента,
// либо добавить, если такого класса у элемента не было.
const btn = document.querySelector(".btn");

    if(btn.classList.contains("btn-secondary")){
        btn.classList.remove("btn-secondary");
    } else {
        btn.classList.add("btn-secondary");
    }
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menu = document.querySelector(".menu");
    if(menu.classList.contains("dropdown-menu")){
        menu.classList.remove("dropdown-menu");
    }
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`
const dropDown = document.querySelector("div.dropdown");
    dropDown.insertAdjacentHTML('afterend', `<a href="#">link</a>`)

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropdownMenuButton  = document.querySelector("#dropdownMenuButton");
    dropdownMenuButton.setAttribute("id", "superDropdown");
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby"
// равный "dropdownMenuButton" используя dataset.

const dataDd = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
    if(dataDd) {
        dataDd.dataset.dd = '3'
    }
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const toggle = document.querySelector('.dropdown-toggle');
    toggle.removeAttribute("type")
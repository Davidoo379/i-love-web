const changeViewButton = document.querySelector("body>header>menu>li>button");
const main = document.querySelector("body>main");

changeViewButton.addEventListener("click", ChangeView);

function ChangeView() {
    main.classList.toggle("circle-view");
}


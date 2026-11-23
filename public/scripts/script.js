const cards = document.querySelectorAll("#card");

cards.forEach((card, index) => {
    card.addEventListener('click', setTransitionName());
});

function setTransitionName() {
    console.log("hello");
}
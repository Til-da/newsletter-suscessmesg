const form = document.querySelector("form");
const card_1 = document.querySelector(".container");
const card_2 = document.querySelector(".success-message-container");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    card_1.classList.add("hidden");
    card_2.classList.remove("hidden");
});
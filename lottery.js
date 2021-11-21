
const total_circles = 7;
const normal_circles = 5;
const normal_circles_max = 48;
const lucky_max = 18;

const lucky_1_index= 5;
const lucky_2_index= 8;

let random_numbers=[total_circles];

const random_circles = document.querySelectorAll(".circles");

const button_run = document.querySelector("#button_run");
button_run.addEventListener("click", () => {
  button_run.innerHTML = "BUTTON CLICKED";
})

//FOR WINNING NUMBERS
const winning_balls = document.querySelectorAll(".wballs");

let winning_numbers = prompt("Enter the first 5 winning numbers – the numbers should be entered separated by a space.").split(/[ ,]+/);
let wlucky = prompt("Enter the Lucky Ball");

let wlucky = winning_numbers[5];

display_winning_number();

const display_winning_number = () => {
  for(let col=0; col < 6; col++) {
    winning_balls[col].innerHTML = winning_numbers[col];
  }
}

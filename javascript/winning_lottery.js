// FOR WINNING NUMBERS
var win_5_numbers = prompt("Enter the first 5 winning numbers – the numbers should be entered separated by a space.").split(/[ ,]+/);
var win_lucky = prompt("Enter the Lucky Ball.");

var win_6_numbers = win_5_numbers;

const check_win_numbers = () => {
  //sorts win_5_numbers
  win_5_numbers.sort((num_1, num_2) => (num_1 - num_2));

  //copies the chosen lucky ball to the array win_6_numbers
  win_6_numbers[5] = win_lucky;
  return win_5_numbers;
}
win_5_numbers = check_win_numbers();

const win_balls = document.querySelectorAll(".wballs");

//displays the winning numbers
const display_win_number = () => {
  for(let col=0; col < 6; col++) {
    win_balls[col].innerHTML = win_6_numbers[col];
  }
}
display_win_number();

//export { win_lucky };
//export { win_5_numbers };

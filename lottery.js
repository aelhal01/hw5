
const total_balls = 7;
const normal_balls = 5;
const normal_balls_max = 48;
const lucky_max = 18;

const lucky_index= 5;

let random_6_numbers=[total_balls];

const random_balls = document.querySelectorAll(".balls");

const button_run = document.querySelector("#button_run");
button_run.addEventListener("click", () => pick_6_numbers());

//picks 1 random number
//  if the column number is less than 5, then the random number is between 1 and 48
//  if the column number is 5 or more, then the random number is between 1 and 18
const pick_1_number = col => {
  let num;
  if(col < normal_balls) {
    num = Math.floor((Math.random() * normal_balls_max) + 1)
  } else {
    num = Math.floor((Math.random() * lucky_max) + 1)
  }
  return num;
}


//pick all 7 random numbers
const pick_6_numbers = () => {
  for (let col = 0; col < total_balls; col++) {
    random_6_numbers[col] = pick_1_number(col);
  }
  check_random_numbers();
}


const check_random_numbers = () => {
  let random_5_numbers = [normal_balls];
    //copies 5 numbers from the array random_6_numbers
  random_5_numbers = random_6_numbers.slice(0, normal_balls);

  //sort random_5_numbers
  random_5_numbers.sort((num_1, num_2) => (num_1 - num_2));

    //copies 1 lucky ball from the array random_6_numbers
  let lucky = random_6_numbers[lucky_index];

  for(let col = 0; col < normal_balls; col++) {
    if(random_5_numbers[col] === random_5_numbers[col + 2]) {
      //duplicate number gets new number
      pick_6_numbers();
      return;
    }
  }

  //copies 5 numbers from the array random_5_numbers
  random_6_numbers = random_5_numbers.slice(0, normal_balls);
  random_6_numbers[lucky_index] = lucky;

  display_random_numbers();
}

const display_random_numbers = () => {
  for(let col = 0; col < total_balls; col++) {
    random_balls[col].innerHTML = random_6_numbers[col];
  }
}

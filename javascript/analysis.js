//ANALYSIS OF DATA

// import data from different files
import {random_lucky} from './javascript/random_lottery.js';
import {random_6_numbers} from './random_lottery.js';
import {win_lucky} from './winning_lottery.js';
import {win_5_numbers} from './winning_lottery.js';

// Function to return commonElements
//  Compare the first 5 numbers
function getCommon(win_5_numbers, random_5_numbers) {
  var common = [];                   // Array to contain common elements

  for(var i=0 ; i<win_5_numbers.length ; ++i) {
    for(var j=0 ; j<random_5_numbers.length ; ++j) {
      if(win_5_numbers[i] == random_5_numbers[j]) {     // If element is in both the arrays
        common.push(win_5_numbers[i]);        // Push to common array
      }
    }
  }

  return common;                     // Return the common elements
}

// Get common elements of win_5_numbers, random_5_numbers
var random_5_numbers = random_6_numbers.splice(-1,1);
var commonElements = getCommon(win_5_numbers, random_5_numbers);

document.getElementById("common_howMany").innerHTML = commonElements.length;


//Compare the lucky balls
function luckyMatch(w_lucky, r_lucky){
  if (w_lucky == r_lucky) {
    document.getElementById("lucky_ball_match").innerHTML = "Yes";
    return true;
  } else {
    document.getElementById("lucky_ball_match").innerHTML = "No";
    return false;
  }
}
const ball_lucky = luckyMatch(win_lucky, random_lucky);

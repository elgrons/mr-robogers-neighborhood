# Mr Roboger's Neighborhood

#### By Eliot Gronstal

#### A web application that takes a number from the user and returns a list of values the user's inputted number with substitutions made within the returned list.

## Technologies Used

* Javascript
* HTML
* CSS

## Description

A web application made for my independent project at Epicodus Coding School during Week 3 of Intro to Programming: Arrays & Looping. The site takes a number from the user and returns a list of values from 0 to the user's inputted number with substitutions made within a returned list.

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

## TDD

* In my finished program:

For numbers that contain a 1, all digits are replaced with "Beep!"
For numbers that contain a 2, all digits are replaced with "Boop!"
For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

<!-- function1
function recognizes numbers/puts them in order
put numbers into an array starting at 0
if numbers are input to the array it should return them in order
If I put them in order of 1 to 100 do I need a piece of code that gives an error after 100, or do my index parameters do that for me? -->

<!-- function2
it should replace number 4 in the array with a string
it should replace number 16 in the array with a string
it should replace number 42 in the array with a string
it should replace number 61 in the array with a string
must push into the array -->

<!-- ADAPTED FROM THE FIRST PROMPT OF THE FRIDAY PROJECT USING A FOR LOOOP -->

<!-- WHERE AM I GETTING MY PARAMETERS AND ARGUMENTS FROM!?!?!? -->

> const sequence = ["X", "A", "Y", "M", "D"];
> const pattern1 = "A";
> const pattern2 = "Z";

fredBotInput = ...
const pattern = [] ..?

const fredBot = ( ,pattern) {
  for (let i=0; i <= fredBotInput.length>; i+= 1) {
    if (fredBot[i]) === pattern) {
      botOutput = true;
      break;
    };
    elseFor numbers that contain a 1, all digits are replaced with "Beep!"

    else For numbers that contain a 2, all digits are replaced with "Boop!"

    else For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

    console.log("Looped!");
  }
    <!-- fredBot++ -->

    return FredBot
};

<!-- function fredBotArray() {
  fredBotReturn = [];
  for (let index = 0; index <= input.length; index += 1) {
      fredBotReturn(input);
      }
  <!-- fredBot++; -->
  <!-- console.log(index);
  return fredBotReturn;
  } --> -->

  function fredBotArray() {
  for (let index = 0; index <= input.length; index += 1) {
      fredBotArray(input);
      }
  console.log(index);
  return fredBotArray;
  }

Describe: fredBot()

* Test One
Test: "It should return an array of numbers from 0 to 5."
Code: 
const input = [1, 2, 3, 4, 5];
Expected Output: [0, 1, 2, 3, 4, 5]
<!-- function fredBot() {
  for (let index = 1; index <= 5; index += 1)
  console.log(index);
} -->

test passes

*  Test Two
Test: "It should return an array of numbers from 0 to the user's inputted number."
Code:
const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fredBot(input)
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
<!-- function fredBot() {
  for (let index = 1; index <= input.length; index += 1) {
  console.log(index);
  };
  return fredBot;
} -->

false: it goes to 11

*  Test Three

*  Test Four

*  Test Five

*  Test Six

*  Test Seven

*  Test Eight

*  Test Nine

*  Test Ten

I want to end up with something like:

funtion xyz = empty starting point  
  runs through the whole array  
    goes through the array
    pulls out numbers, 4, 16, 62, and 61
    replaces those numbers with the silly phrases
    .appends them back into the array

    punches the array into the html

    the html does it over and over again based on resubmmisions

    is this two functions? is it three functions?
    do I need a string or can it be done with just numbers?


## Known Bugs

* _Any known issues_
* _should go here_

* Please reach out to eliot.lauren@gmail.com with any questions or concerns.

## License

MIT

Copyright (c) 2023 Eliot Gronstal

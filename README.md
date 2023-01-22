# Mr Roboger's Neighborhood

#### By Eliot Gronstal

#### A web application that takes a number from the user and returns a list of values the user's inputted number with substitutions made within the returned list.

## Technologies Used

* Javascript
* HTML
* CSS

## Description

A web application made for my independent project at Epicodus Coding School during Week 3 of Intro to Programming: Arrays & Looping. The site takes a number from the user and returns a list of values from 0 to the user's inputted number with substitutions made within a returned list.

In my finished program:

For numbers that contain a 1, all digits are replaced with "Beep!"
For numbers that contain a 2, all digits are replaced with "Boop!"
For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

## TDD

* The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

<!-- Do I need two functions? -->

<!-- ADAPTED FROM THE FIRST PROMPT OF THE FRIDAY PROJECT USING A FOR LOOOP -->

<!-- WHERE AM I GETTING MY PARAMETERS AND ARGUMENTS FROM!?!?!? -->

Spitballing what it might end up looking like:

<!-- function fredBot() {
  const fredBotArray[] = fredBot() {
    for (let index = 1; index <= input.length; index += 1)
  }
  function "NEXT"() {
    if () {
      return etc.};
      else {
        const value = etc[i];
        fredBot++;
        return (value, done: false};
      }
    }
    console.log(fredBot[index]);
    return fredBot;
  };
} 

-->

    elseFor numbers that contain a 1, all digits are replaced with "Beep!"

    else For numbers that contain a 2, all digits are replaced with "Boop!"

    else For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

  return fredBot;
}

Describe: fredBot()

* Test One
Test: "It should return an array of numbers from 0 to 5."
Code: 
const input = [1, 2, 3, 4, 5];
fredBot(input);
Expected Output: [0, 1, 2, 3, 4, 5]
<!-- function fredBot() {
  for (let index = 0; index <= 5; index += 1)
  console.log(index);
} -->

<!-- Test Passes -->

*  Test Two
Test: "It should return an array of numbers from 0 to the user's input number."
Code:
const input = 10;
fredBot(input);
Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

<!-- function fredBot(input) {
  let fredBotArray = []
  for (let i = 0; i <= input; i +=1) {
    console.log("array" + fredBotArray[i]);
    console.log("index" + i);
    fredBotArray.push(i);
  };
  return fredBotArray;
} -->

*  Test Three
Test: "It should update numbers that contain a 1 to have all digits replaced with "Beep!""
Code:
const input = [1, 2, 3]
fredBot(input)
Expected Output: ["Beep!, 2, 3]



<!-- 
[PASSES BUT NEEDS TO BE REFACTORED SO THAT IT'S EVERY NUMBER WITH A ONE IN IT, AND NOT JUST NUMBER 1] -->




<!-- function fredBot(input) {
  let fredBotArray = []
  for (let i = 0; i <= input; i +=1) {
    console.log("index" + i);
    console.log("array" + fredBotArray[i]);
    if (i === 1) {
      fredBotArray.push("Beep!");
      console.log("1===TRUE");
    }
    else {
        fredBotArray.push(i);
    }
  };
  return fredBotArray; -->
}

*  Test Four
Test: "It should update numbers that contain a 2 to have all digits are replaced with "Boop!!""
Code:
fredBot()
Expected Output: ["Beep!", "Boop!", 3]

function fredBot(input) {
  let fredBotArray = []
  for (let i = 0; i <= input; i +=1) {
    console.log("index" + i);
    console.log("array" + fredBotArray[i]);
    if (i === 1) {
      fredBotArray.push("Beep!");
      console.log("1===TRUE");
    }
     else if {
        fredBotArray.push("Boop!");
    }
    else {
        fredBotArray.push(i);
    }
  };
  return fredBotArray;

*  Test Five
Test: "It should update numbers that contain a 3 so they are replaced with "Won't you be my neighbor?"
Code:
fredBot()
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?"]

function fredBot(input) {
  let fredBotArray = []
  for (let i = 0; i <= input; i +=1) {
    console.log("index" + i);
    console.log("array" + fredBotArray[i]);
    if (i === 1) {
      fredBotArray.push("Beep!");
      console.log("1===TRUE");
    }
     else if {
        fredBotArray.push("Boop!");
    }
        else if {
        fredBotArray.push("Won't you be my neighbor?");
    }
    else {
        fredBotArray.push(i);
    }
  };
  return fredBotArray;


<!-- I want to end up with something like: -->

<!-- funtion xyz = empty starting point  
  runs through the whole array  
    goes through the array
    pulls out numbers, 4, 16, 62, and 61
    replaces those numbers with the silly phrases
    .appends them back into the array

    punches the array into the html

    the html does it over and over again based on resubmmisions

    is this two functions? is it three functions?
    do I need a string or can it be done with just numbers? -->


## Known Bugs

*  My second test output is the correct number, but the output is not in an array in my console like I expected it to be.
* 

* Please reach out to eliot.lauren@gmail.com with any questions or concerns.

## License

MIT

Copyright (c) 2023 Eliot Gronstal

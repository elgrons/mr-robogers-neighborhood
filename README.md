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
  return fredBotArray;
} -->

*  Test Four
Test: "It should update numbers that contain a 2 to have all digits are replaced with "Boop!!""
Code:
fredBot()
Expected Output: ["Beep!", "Boop!", 3]

<!-- function fredBot(input) {
  let fredBotArray = []
  for (let i = 0; i <= input; i +=1) {
    console.log("index" + i);
    console.log("array" + fredBotArray[i]);
    if (i === 1) {
      fredBotArray.push("Beep!");
      console.log("1===TRUE");
    }
     else if (i === 2) {
        fredBotArray.push("Boop!");
    }
    else {
        fredBotArray.push(i);
    }
  };
  return fredBotArray
  } -->

*  Test Five
Test: "It should update numbers that contain a 3 so they are replaced with "Won't you be my neighbor?"
Code:
fredBot()
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?"]

<!-- function fredBot(input) {
  let fredBotArray = []
  for (let i = 1; i <= input; i +=1) {
    console.log("index" + i);
    console.log("array" + fredBotArray[i]);
    let stringBot = fredBotArray.toString();
    if (stringBot.includes("3")) {
        fredBotArray.push("Won't you be my neighbor?");
      console.log("3===TRUE");
    }
    else if (stringBot.includes("2")) {
        fredBotArray.push("Boop!");
    }
    else if (stringBot.includes("1")) {
      fredBotArray.push("Beep!");
    }
    else {
        fredBotArray.push(i);
    }
  };
  return fredBotArray.toString();
} -->

## Known Bugs

*  Every number after one comes out as "Beep!".
* My javascript isn't pushing the output of my function to my HTML.

* Please reach out to eliot.lauren@gmail.com with any questions or concerns.

## License

MIT

Copyright (c) 2023 Eliot Gronstal

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

<!-- ADAPTED FROM TEXT ANALYZER USING FOR EACH LOOPS -->

* Test One
Test: "It should return an array of numbers from 0 to 5."
Code: 
const fredBotNeighbor = [1, 2, 3, 4, 5];
fredBotNeighbor(5);
Expected Output: [0, 1, 2, 3, 4, 5]

*  Test Two
Test: "It should return 2 if the input has two numbers."
Code:
const digit = 44;
fredBot(number);
Expected Output: 2

*  Test Two
Test: "It should return 2 if the input has two numbers."
Code:
const digit = 44;
fredBot(number);
Expected Output: 2

*  Test Three
Test: "It should recognize characters within a string."
Code:
const digit = "44";
fredBot(digit);
Expected Output: 1

*  Test Four
Test: "It should recognize numbers within a string."
Code:
const digit = "44 ";
fredBot(digit);
Expected Output: N/A

*  Test Five

*  Test Six

*  Test Seven

*  Test Eight

*  Test Nine

*  Test Ten


## Known Bugs

* _Any known issues_
* _should go here_

* Please reach out to eliot.lauren@gmail.com with any questions or concerns.

## License

MIT

Copyright (c) 2023 Eliot Gronstal

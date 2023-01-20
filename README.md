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

The number 4 should be replaced with "Won't you be my neighbor?"
The number 16 should be replaced with "Boop!".
The number 42 should be replaced with "Won't you be my neighbor?"
The number 61 should be replaced with "Boop!".

Describe: fredBot()

*  Test One
Test: "It should return 1 if a input has just one number."
Code:
const number = 4;
fredBot(number);
Expected Output: 1

*  Test Two
Test: "It should return 2 if a input has two numbers."
Code:
const number = 44;
fredBot(number);
Expected Output: 2

*  Test Three
<!-- Function is the same as Test 2, but I've updated the variables and parameters. -->
Test: "It should return 0 for an empty string."
Code: fredBot("");
Expected Output: 0

*  Test Four
Test: "It should return 0 for a string that is only spaces."
Code: fredBot("            ");
Expected Output: 0

*  Test Five
Test: "It should not say that words are numbers."
Code: fredBot("oh hey 320 1987");
Expected Output: 2

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

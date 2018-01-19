# _Arrays_and_Looping_

#### _Web App that creates a pattern based on user input number 01/19/18_

#### By _**Josh Rochon**_

## Description

_I. The logic of this application can be described as follows:

User enters a number into an input field, which is parsed by JavaScript into an integer.

II. That integer is saved into a variable.

III. An array with 50 indexes is declared, which stores the integers 1-50.

IV. A function is declared which is responsible for all of the logic of the application and determining the output to the web document.

V. The function has a series of if else logic statements. First it checks if the particular index its evaluating is divisible by 3. If so it will append the var badLuck in the span of the html document. Next it checks if the index is equal to all numbers containing a 1. If so those will be replaced with a string. Third it checks for all numbers containing 0 and finally if an integer doesn't match any of those conditions, the integer will be appended to the document.

VI. This function runs in a for loop, and the for loop runs as many times as the difference of what the user input and 1.

VII. The function is called, so as to run when the user triggers the button that submits the form.

VIII. After submitting the form, the user is able to try another number all made possible with jQuery. When the user triggers the "try again" button, the current content is set to hide, and the former is set to display._

## Setup/Installation Requirements

* _Copy paste code into text editor_

## Known Bugs

_The first time a user hits the submit button after entering a number, the application functions as intended. However, the second time, (without page refresh) a user hits the submit button after entering a number, the new pattern is appended to the end of the first pattern_

## Support and contact details

_If you have any concerns email joshdrochon@gmail.com_

## Technologies Used

_Atom text editor, Terminal, Git, Github, HTML5, CSS, bootstrap, JavaScript, jQuery_

### License

*Licensed by Josh Rochon*

Copyright (c) 2018 **_Josh Rochon_**

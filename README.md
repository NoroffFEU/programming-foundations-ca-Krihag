[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11203593&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA

# Calculator Object

This object has the following properties:

- Brand (String): Shows the calculators brand name.
- Model (Number / int): Shows the calculators model number.
- Buttons (Array): all calculator buttons are added in this (not hard coded but will be added once code runs using forEach)
- Powered (Boolean): Returns true if the calculator is currently powered on and false if it is not.

- equalBtn (Function): When equal button is pressed it takes the current calculation and sums it up. It then displays the result.

- display (function): Whenever a calculation button is pressed. It first checks if calculator is powered = true or false. if true it will display numbers pressed. If its false then you will get a message saying "Power is off".

- togglePower (function): Whenever PWR button is pressed. If pressed while powered is true then it returns false. If it is false it will return true (if false calculator can not be used).

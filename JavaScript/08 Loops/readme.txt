JavaScript Loops:

Loops can be complicated, there are for loops, while loops, and do...while loops.

1. for Loop
We will be creating a few mini-projects that will loop through a set of numbers.

syntax:

    for (component1, component2, component3) {
        //code or statements
    }

    var num = 1;
    for (num == 1; num <= 10; num++){
        console.log(`Number: ${num}`);
    }

https://www.geeksforgeeks.org/javascript-for-loop/


*For Loop in JavaScript
    The for loop runs until the given condition becomes false. It is similar to the for loops in C++ and Java.

    JavaScript for loop is used to iterate the elements/code block a fixed number of times. It is used if the number of the iteration is known.

    for statement creates the loop that accepts three optional expressions and a code block that will be executed in a loop.


while Loop:
The While loop is similar to the for loop, with a few minor difference:

    let x = 0;
    
    while (x <= 3) {
        console.log("You can run the code")
    }


do While loop:
The basics of the do...while loop is the code will execute the loop before checking if the condition is true.

This code will ALWAYS execute at least once.
It does this because loops normally require the conditions to be true, but a do...while loop doesn't require this as it executes before checking if the condition is truthy.





let c = 10;

do {

console.log(c++); // Outputs 10-50

} 
while (c <= 50);

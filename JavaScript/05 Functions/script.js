
//ECMAScript 5
function multiply(a, b, c) {
    let nums = a * b * c;
    console.log(nums);
}

function add(num1, num2) {
    let number = num1 + num2;
    console.log(`The sum of two numbers is ${number}`);
}

multiply(2, 3, 2);

multiply(10, 5, 5);

add(10, 10);
add(5, 10);



/* 
    Creating an function, to multiply the give two numbers;

    function_keyword functionName(parameter){
        conditions or computations;
    }


*/

// ECAMAScript 6:

const multiplication  = (a, b, c) => {
    let nums = a * b * c;
    console.log(nums);
}


const printName = (name) => {
    console.log(name);
}

const dob = (d, m, y) => {
    let DOB = d+ "/"+m+"/"+y;
    // alert(`This is the date of birth ${DOB}`);
    console.log(DOB);
}

dob(9, 6, 2004);
dob(10, 5, 2000);

printName('sanjay');

printName('Ram');
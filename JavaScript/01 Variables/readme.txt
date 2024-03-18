Javascript Programming lang - NodeJS(Frame work to Javascript)

JavaScript Variables:

1. There are 3 types of Variables - var, let and const

Overview:
 * let: If a variable is going to be <b>reassigned later</b> within the application, this is the ideal variable type to use.
    eg: let name = 'JavaScript';
        name = 'Python';

 * var: It's better to use either let or const for variables, but this variable type will still work and is still used in applications to this day. 
 This variable can be updated and re-declared.
   eg:  var name = 'JavaScript';
        name = 'Python';

 * const: If the variable will never change or won't be reassigned anywhere else in the application, this keyword is the best option.


2. Need to Remember:

    * The var variable is globally-scoped and can be updated and re-declared.
    * The let variable is block-scoped and can be updated but not re-declared.
    * The const variable is block-scoped and cannot be updated or re-declared.


1. Global Scope: A variable declared outside a function. This means all scripts and functions on a web application or webpage can access this variable.

2. Block Scope: A variable declared inside a block. This means we can use these variables inside of loops, if statements, or other declarations within curly brackets and have them be only used for that declaration instead of the entire application having access to it.

Examples:

syntax: 
    datatype variableName = values;


    var name = "Sanjay";
    let number = 10;
    const aboutJS = "It is a Programming language";

    DateType   Example
    Number       40
    String       'Name' "Name"
    Boolean       True or False



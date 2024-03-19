JavaScript Switch Cases:

If you need to test multiple conditions, then most of the time switch cases are best for optimization and readability within your code.

If, else if, else statements and switch cases can both do similar tasks, but switch cases are better for performing multiple different conditions.

syntax:

    switch (conditions){
        case 1:
            statements;
            break;
        case 2:
            statements;
            break;
        default:
            statements;
            break;
    }

We use each case to define a number, have our variable hold the number we're pulling from, and the break keyword is used for ending that specific case or switch block.

The default keyword is there just in case our variable is equal to something that isn't present in our switch...case code.
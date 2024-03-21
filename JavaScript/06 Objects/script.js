var car = {
    Model: 2020,
    Color: 'white',
    Ownership: 'First Owner'
}

console.log(car);
console.log(typeof(car));

console.log(car.Color);



const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
}
  
//Dot Notation:
    myCar.make = "ford";
    myCar.model = "mustang";
    myCar.year = 1956;


// Bracket Notation:
myCar["make"] = "ford";
myCar["model"] = "mustang";
myCar["year"] = '1969';


// objects:

const personDetails = {
    Name: "sanjay",
    age: 20,
    Occupation: "Software Engineering",
    Place: "Bangalore",
    Skills: ["Python", "JavaScript", "React", "AWS", "Nodejs", "Tailwindcss", "Astro", "Docker", "etc", 1],
    Education: "Under Graduate"
}

console.log(personDetails);

console.log(personDetails.Skills.slice(0, 3));
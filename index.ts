// 2.  Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric,
//  would you like to learn some Python today?

var Name: string = "Bareera ";
function message(Name: string) {
    console.log("Hello" + Name + " would you like to learn some Python today?");
}
message("Bareera")





// 3. Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName: string = "Bareera";
var lowercase: string = personName.toLowerCase();
console.log("Lower Case:", lowercase);

var uppercase: string = personName.toUpperCase();
console.log("Upper Case:", uppercase);





// 4.  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

var personName: string = "Olivia Ann Rose";
var quote: string = '"i hope one day u look at me, and see everything you ever you ever wante. a letter to my future self"';
console.log(personName, "once said,", quote);






//  6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once.
//  Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var personNameWithWhitespace: string = "\t\n   Bareera Joiya   \t\n";
console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);

const strippedName: string = personNameWithWhitespace.trim();
console.log("\nName after Stripping Whitespace:");
console.log(strippedName);






// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
// Be sure to enclose your operations in print statements to see the results.

const addition: number = 5 + 3;
console.log(addition);
const subtraction: number = 15 - 7;
console.log(subtraction);
const multiplication: number = 4 * 2;
console.log(multiplication);
const division: number = 64 / 8;
console.log(division);






//9.  Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.

var favoriteNumber: number = 22;
// combines msg and favoriteNumber
var msg: string = `My favorite number is ${favoriteNumber}.`;
console.log(msg);





// 11. Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

var Names: string[] = ["Bareera", "Hannan", "Hassan"]
console.log(Names);

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}





// 12.  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same,but each message should be personalized with the person’s name.

var Names: string[] = ["Bareera", "Hannan", "Hassan"];
console.log(Names);

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i], "Have a great day");
}





// 13.   Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.

const favoriteTransportation: string[] = [
    "Audi E-tron",
    "BMW",
    "Toyota Prius",
];

favoriteTransportation.forEach((transport) => {
    console.log(`I would like to own a ${transport}.`);
});






// 14.  Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//    Then use your list to print a message to each person, inviting them to dinner.

var Guest: string[] = ["Bareera", "Hassan", "Hannan", "Khansa"];
Guest.splice(3, 1, "Zohan")


for (let i = 0; i < Guest.length; i++) {
    if (Guest[i] == "Bareera") {
        console.log(Guest[i], "I would like to invite you to dinner.");

    } else if (Guest[i] == "Hassan") {
        console.log(Guest[i], "I would like to invite you to dinner.");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "I would like to invite you to dinner.");
    } else if (Guest[i] == "zohan") {
        console.log(Guest[i], "I would like to invite you to dinner.");
    }
}


// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

console.log("Hassan won't be able to make it to the party.");
var Guest: string[] = ["Bareera", "Sundas", "Hannan", "Khansa"];

for (let i = 0; i < Guest.length; i++) {
    if (Guest[i] == "Bareera") {
        console.log(Guest[i], "I would like to invite you to dinner.");

    } else if (Guest[i] == "Sundas") {
        console.log(Guest[i], "I would like to invite you to dinner.");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "I would like to invite you to dinner.");
    } else if (Guest[i] == "zohan") {
        console.log(Guest[i], "I would like to invite you to dinner.");
    }
}


// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

var Guest: string[] = ["Bareera", "Sundas", "Hannan", "Khansa"];
console.log(Names);
Guest.splice(3, 1, "Anam")
// b. Add one new guest to the beginning of your array.
Guest.unshift("Hafsa")
// c. Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
// each person in your list.
Guest.splice(Guest.length / 2 + 1, 0, "Zain")
// • Use append() to add one new guest to the end of your list. •
Guest.push("Nisha")
for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");

    if (Guest[i] == "Bareera") {
        console.log(Guest[i], "Hello, I trust you're doing great. I am very excited to invite you in my Company party ");

    } else if (Guest[i] == "Sundas") {
        console.log(Guest[i], "Hello, I trust you're doing great. I am very excited to invite you in my Company party ");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hello, I trust you're doing great. I am very excited to invite you in my Company party ");
    } else if (Guest[i] == "Anam") {
        console.log(Guest[i], "Hello, I trust you're doing great. I am very excited to invite you in my Company party ");
    } else if (Guest[i] == "Hafsa") {
        console.log(Guest[i], "Hello, I trust you're doing great. I am very excited to invite you in my Company party ");
    } else if (Guest[i] == "Zain") {
        console.log(Guest[i], "Hello, I trust you're doing great. I am very excited to invite you in my Company party ");
    } else if (Guest[i] == "Nisha") {
        console.log(Guest[i], "Hello, I trust you're doing great. I am very excited to invite you in my Company party ");
    }

}
console.log("Nisha cannot join us in the party");
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.

console.log("We've secured a larger table, which means we'll be able to invite more guests.");






// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// 17(a). Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("you can invite only two people for dinner.");

// 17(b). Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

var Guest1: string[] = ["Bareera", "Sundas", "Hannan", "Khansa"];
while (Guest1.length > 2) {
    var Final = Guest1.pop()
    console.log("you’re sorry you can’t invite them to dinner.", Final);

}


// 17(c). Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < Guest1.length; i++) {
    console.log(Guest1[i], "You are still invited");

}
// 17(d). Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = 0; i <= Guest1.length; i++) {
    Guest1.pop()

}
console.log(Guest1);








// 18.  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
//   Write a program that creates a list containing these items.

// Define the array of places
const placesToVisit = [
    "Tokyo",
    "Paris",
    "New York",
    "Sydney",
    "Machu Picchu"
];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the original order
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the original array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to get it back to the original order
placesToVisit.reverse();
console.log("\nBack to Original Order:");
console.log(placesToVisit);

// Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order and print it
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);






// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

var Dinner: string[] = ["Hannan", "Zohan", "Bareera"]
var Totpeople: number = 0
for (let i = 0; i < Dinner.length; i++) {
    Totpeople = Totpeople + i;

}
console.log("Total number of people ", Totpeople);


//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

var Cities: string[] = ["Ankara", "Istanbul", "Capadocia", "Lahore", "Islamabad"];
console.log("List of Cities");
var Arr_1 = Cities.map((items, index) => {
    console.log((index + 1) + ". " + items);

})



// 21.  They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.


var car: { model: number, name: string, color: string } = {
    model: 2020,
    name: "Audi E-tron",
    color: "Black"
};



//  22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//  Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

var ErrorIndex: string[] = ["Bareera", "Joiya", "Khansa", "Happy"];
ErrorIndex.splice(1, 0, "DataScience");
console.log(ErrorIndex);
console.log(ErrorIndex[10]);


//  23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Example 1 test for equality
let num: number = 42;
console.log("Is number == 42? I predict True.");
console.log(num == 42);
// Example 2  test for enequality
let fruit: string = "banana";
console.log("is fruit is not equal to apple? i pridict the true");
console.log(fruit != "Apple");
// Example 3  Numeric comparison
let num1: number = 20;
console.log("is number<30? i pridecit the true");
console.log(num1 < 30);

// Example 4  weekend test
let day: string = "sunday"
console.log("is it sunday? i pridict true");
console.log(day == "sunday");

// Example 5  weekend test
let year: string = "September"
console.log("is it September? i pridict true");
console.log(year == "September");


// Example 6  logical
let isweekend = true;
let hasPlane = false;
console.log("today i have a plan i pridict false");
console.log(isweekend && hasPlane);

// Example 7  logical
let isRainyDay = true;
console.log("it is raining ? i pridict false ");
console.log(!isRainyDay);

// Example 8  logical
let isFeePaid = false;
console.log(" fee is paid ? i pridict false ");
console.log(isFeePaid);





// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// 1 Tests for equality and inequality with strings

let equality: string = "Bareera";
console.log("Is equality == 'Bareera'? I predict true.");
console.log(equality == "Bareera");

// Inequality
let equality1: string = "Bob";
console.log("Is equality1 == 'Bareera'? I predict false.");
console.log(equality1 == "Bareera");


// 2 Tests using the lower case function

let lowerCase: string = "bareerajoiya";
let isLowerCase = false;
console.log("it is lower case? i predict true");
console.log(lowerCase.toLowerCase() == "bareerajoiya");


// 3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let a: number = 10;
let b: number = 20;
console.log("start", a == b);
console.log(a != b);
console.log(a >= b && a <= b);
console.log(a >= b || a <= b);
console.log(a <= b);

// 4 Tests using "and" and "or" operators

let c: number = 500;
let d: number = 80;
console.log(c == d && c < d);
console.log(c == d || c < d);

// 5 Test whether an item is in a array

var arr2: string[] = ["Cold Drinks", "Noodles", "Lays", "candies"];
if (arr2.includes("Noodles")) {
    console.log("Noodles");
} else {
    console.log("item not include");

}

// 6 Test whether an item is not in a array

var arr3: string[] = ["Cold Drinks", "Noodles", "Lays", "candies"];
if (arr3.includes("fries")) {
    console.log("Noodles");
} else {
    console.log("item not include");

}



// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

var alien_color: string[] = ["green", "yellow", "red"];

// a. Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let color: boolean = alien_color.includes("green")
if (color) {
    console.log("Player just earned 5 points");

}

//b. Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if (color) {
    console.log("Test is pass");
    console.log(color == true);
} else {
    console.log(false);

}


// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

var alien_color2: string[] = ["green", "yellow", "red"];
// a. If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let color2: boolean = alien_color2.includes("Green")
if (color2) {
    console.log("player just earned 5 points for shooting the alien.");
    // b. If the alien’s color isn’t green, print a statement that the player just earned 10 points. 
} else {
    console.log("player just earned 10 points.");

}


// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_color3: string[] = ["green", "yellow", "red"];

//a. If the alien is green, print a message that the player earned 5 points.
for (let i = 0; i < alien_color3.length; i++) {
    if (alien_color3[i] == "green") {
        console.log(alien_color3[i], "So, player earned 5 points.");
        //b. If the alien is yellow, print a message that the player earned 10 points.
    } else if (alien_color3[i] == "yellow") {
        console.log(alien_color3[i], "So,player earned 10 points.");
        //c. If the alien is red, print a message that the player earned 15 points.
    } else if (alien_color3[i] == "red") {
        console.log(alien_color3[i], "So,player earned 15 points.");
    }
}



// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

var age: number = 24;
// If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("person is baby");
    //If the person is at least 2 years old but less than 4, print a message that the  person is a toddler. 
} else if (age == 2 || age < 4) {
    console.log("person is a toddler.");
    // If the person is at least 4 years old but less than 13, print a message that the person is a kid.   
} else if (age == 4 || age < 13) {
    console.log("person is a kid");
    //If the person is at least 13 years old but less than 20, print a message that the person is a teenager.    
} else if (age == 13 || age < 20) {
    console.log("person is a teenager.");
    // If the person is at least 20 years old but less than 65, print a message that the person is an adult.   
} else if (age == 20 || age < 65) {
    console.log("person is an adult.");
    // If the person is age 65 or older, print a message that the person is an  elder    
} else if (age >= 65) {
    console.log("person is an  elder");
}



// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// a. Make a array of your three favorite fruits and call it favorite_fruits.
var favFruits: string[] = ["Mango", "Guava", "Orange", "Papaya", "grapes"]

// b. Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
favFruits.map((fruit) => {
    if (fruit == "Mango") {
        console.log("i like Mango it Gives the energy");

    } else if (fruit == "Guava") {
        console.log("i like Guava it Gives the energy ");

    } else if (fruit == "Orange") {
        console.log("i like orange it Gives the energy ");

    } else if (fruit == "Papaya") {
        console.log("i like Papaya it Gives the energy ");

    } else {
        console.log("i dont like ");

    }
})


// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:


var usernames: string[] = ["Bareera", "Hannan", "Hassan", "Anam"]

// a. If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
usernames.map((Names) => {
    if (Names == "Bareera") {
        console.log("Hello Bareera would you like to see a status report?");
        // b. Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.     
    } else if (Names == "Hannna") {
        console.log("Hello", Names, "thank you for logging in again.");

    } else if (Names == "Hassan") {
        console.log("Hello", Names, "thank you for logging in again.");

    } else if (Names == "Anam") {
        console.log("Hello", Names, "thank you for logging in again.");

    }
})


// by using for loop
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello ", usernames[i], "would you like to see a status report?");

    } else {
        console.log("Hello", usernames[i], "thank you for logging in again.");

    }
}



// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

var users: string[] = ["Bareera", "Hassan", "Hannan", "Zohan"]


// a. Remove all of the usernames from your array, and make sure the correct message is printed.

while (users.length > 0) {
    users.pop()
}
// b. If the list is empty, print the message We need to find some users!
if (users.length == 0) {
    console.log("We Need some users!");

}



// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. 

// a. Make a list of five or more usernames called current_users.

var current_users: string[] = ["Bareera", "Hassan", "Hannan", "Khansa", "Zohan"]

// b. Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

var new_users: string[] = ["Sundas", "Anam", "Shoaib", "Bareera", "Fakhir", "Hannan"]

// c. Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for (var i = 0; i < new_users.length; i++) {

    if (current_users.includes(new_users[i])) {
        console.log(new_users[i], "Sorry, the username is already in use.");
    } else {
        console.log(new_users[i], "Congratulations! The username is available.");
    }
}




// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

//  Store the numbers 1 through 9 in a array.

var ordinalNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]


//  Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

for (let i = 0; i < ordinalNum.length; i++) {
    if (ordinalNum[i] == 1) {
        console.log(ordinalNum[i]);

    } else if (ordinalNum[i] == 2) {
        console.log(ordinalNum[i]);
    } else if (ordinalNum[i] == 3) {
        console.log(ordinalNum[i]);
    } else {
        console.log(ordinalNum[i] + "th");

    }
}




// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

var pizzas: string[] = ["malai boti", " fajita", "behari kabbab"]

for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);

}
// a. Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
var pizzas: string[] = ["malai boti", " fajita", "behari kabbab"]

for (let i = 0; i < pizzas.length; i++) {
    console.log("I like", pizzas[i], "pizza");

}
console.log("Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.");






// 35. Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//  • Add a line at the end of your program stating what these animals have in common. 
//  You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Common Characteristic: These animals are all mammals.");
console.log("Animals:");

for (let animal of animals) {
    console.log(`- ${animal}`);
}

console.log("Any of these animals would make a great pet!");





// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makeShirt(size: string, message: string): void {
    console.log(`T-shirt size: ${size}`);
    console.log(`Message printed on the shirt: ${message}`);
}

makeShirt("Large", "I love TypeScript!");





// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function makeShirt2(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`T-shirt size: ${size}`);
    console.log(`Message printed on the shirt: ${message}`);
}
makeShirt2();
makeShirt2("Medium");
makeShirt2("Small", "Custom message: TypeScript is awesome!");


// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//  Call your function for three different cities, at least one of which is not in the default country.

function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("Paris", "France");
describeCity("Sydney");




// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city: string, country: string) {
    console.log('"' + city + ",", country + '"');

}

city_country("Faisalabd", "Pakistan")
city_country("Lahore", "Pakistan")
city_country("Islamabad", "Pakistan")



// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


var magician_names: string[] = ["Hannan", "Hassan", "Zohan"];
function show_magicians(magician: string[]) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);


    }
}
show_magicians(magician_names)





// 42. Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

var magicians: string[] = ["Hannan", "Hassan", "Zohan"];

// Function to make magicians great
function makeGreat(magicianNames: string[]): string[] {
    // Use map to add "the Great" to each magician's name
    return magicianNames.map((name) => name + " the Great");
}

function showMagicians(magicianNames: string[]): void {
    magicianNames.forEach((name) => {
        console.log(name);
    });
}
// Make the magicians great
magicians = makeGreat(magicians);

// Show the modified list of magicians
showMagicians(magicians);




// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

function makeSandwich(...items: string[]) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("Sandwich Summary:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
        console.log("Enjoy your sandwich!");
    }
}
// Calling the function with different numbers of arguments
makeSandwich("Mayo", "Cheese", "Salad", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich();



// 45. Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly



function Cars1(company: string = "Honda", model: number = 2024, ...args: any[]) {
    let car_object: any = {
        Company: company,
        Model: model,
    };


    for (let i = 0; i < args.length; i += 2) {
        const name: string = args[i];
        const value: any = args[i + 1];
        car_object[name] = value;
    }

    console.log(car_object);
}

Cars1("Honda", 2023, "Color", "Blue");





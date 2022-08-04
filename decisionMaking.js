// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
//      Door number1 will show a bear with a hat and door2 will show a bear with a scarf.
// 2. What variable has a new value assigned to it after the first if statement executes?
//      var bearChoice
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//      scarf
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//      if the value for bearChoice is 1, it will print, "You offer the bear your hat/scarf(depending on the door choice) and the bear shows you a secret passage out!"
//      if the value for bearChoice is 2 it will print,  "You tell the bear the hat/scarf(depending on the door choice) is too small and it starts to cry!"
//      if the value for bearChoice is 3 it will print,  "You run as fast as you can into the next room. It's full of snakes!"
//      if the value for bearChoice is greater than 3 it will print, "You stay with the bear and become it's best friend!"
//      if they choose any of the printed options on the console, it will log depending on the number they choose. if it's greater than 3 or they picked a number above 3, it will print what is in the else parameter.
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//      if the value for bearChoice is 3 it will print,  "You run as fast as you can into the next room. It's full of snakes!"
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//      if the value for bearChoice is 2 it will print,  "You tell the bear the hat/scarf(depending on the door choice) is too small and it starts to cry!"
// 7. What is your favorite ending?
//      when they pick a number greater than 3 :)

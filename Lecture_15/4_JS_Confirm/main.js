// CONFIRM IN JS
// Confirm is a function that displays a message in a popup window and waits for 
// the user to confirm or cancel.

let ans = confirm("Are you above 18?");

if (ans) {
    console.log("You are an adult.");
} else {
    console.log("You are a child.");
}
// part 1 : is mai username generate kia 
// prompt ka use kr k username pusha

let FullName = prompt("Enter your full name: ");

// template literal use kr k welcome msg show kiya
 alert(`Welcome, ${FullName}!`);

// name sy spaces khtm ki or sary chracters ko lowercase mai convert kiya
let username = FullName.replace(/ /g, "").toLowerCase();

// shuru mai @ lagaya or username ki length ko username mai add kiya
username = "@" + username + username.length;

// username ko alert mai show kiya
alert(`Your username is: ${username}`);

// part 2 : ake  number guess game banaya
// ake random number select kiya
const randomnumber = 19;

// user sy phla number guess karwaya
// parseint ka mtlb ye hai k user ka input string mai hoga or usko number mai convert krna hoga
let userGuess = parseInt(prompt("Guess a number between 1 and 25: "));

// while loop tb tk chly ga jb tk sahi number enter na ho
while (userGuess !== randomnumber) {     

    // agr user actual number sy bra  num select kry tb
    if (userGuess > randomnumber) {
        userGuess = parseInt(prompt("Your guess is too high. Try again!"));
    }
    // agr user actual number sy chota  num select kry tb
    else if (userGuess < randomnumber) {
        userGuess = parseInt(prompt("Your guess is too low. Try again!"));
    }
}
alert("Congratulations! You guessed the correct number!");

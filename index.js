/**
 * Name: Gwinneth N. Apolinar
 * Section: U2L
 * Date: February 21, 2024
 * Description:  Simulation of a password validation program in JavaScript
 */

let password1 = "Gwinneth1";
let password2 = "Gwinneth1";
let name = "Gwin";

// Checks if the password is valid
function checkPass(password1, password2) {
    let hasMatch; 
    let hasCharacter; 
    let hasNumber = false; 
    let hasUpperCase = false; 
    let hasLowerCase = false;
   
    // Checks if the password has at least 8 characters
    if(password1.length >= 8) {
        hasCharacter = true;
    } else {
        console.log("Insufficient Number of Strings!\n");
        return false;
    }

    // Checks if two password match
    for(let i = 0; i < password2.length; i++) {
        if(password2[i] == password1[i]) {
            hasMatch = true;
        } else {
            console.log("Wrong Password!\n");
            return false;
        }

        // Checks if the password has a number
        if(password1[i] >= 0 || password1[i] <= 9) {
            hasNumber = true;
        } 

        //  Checks if the password has an uppercase character
        if(password1[i].charCodeAt(0) >= 65 && password1[i].charCodeAt(0) <= 90) {
            hasUpperCase = true;
        }

        //  Checks if the password has a lowercase character
        if(password1[i].charCodeAt(0) >= 97 && password1[i].charCodeAt(0) <= 122) {
            hasLowerCase = true;
        } 
    }

    if(hasNumber == false || hasUpperCase == false || hasLowerCase == false) {
        console.log("Invalid Password!");
        return false;
    }

    if(hasMatch == hasCharacter == hasNumber == hasUpperCase == hasLowerCase) {
        return true;
    }
}

// Reverse the password
function reversePass(password1) {
    let reverseString = "";
    for(let i = password1.length - 1; i >= 0; i--) {
        reverseString += password1[i];
    }
    return reverseString;
}

// Store the password and name in an object
function storePass(name, password1 ,password2) {
    let listOfPass = {};
    if(checkPass(password1, password2)) {
        let reversePassword = reversePass(password1);
        listOfPass[name] = name;
        listOfPass.newpassword = reversePassword;
    }

    return listOfPass
}


let result = storePass(name, password1, password2);

// Checks if the returned object is empty
if (Object.keys(result).length !== 0) {
    console.log(result);
}
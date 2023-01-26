// controller
function getValues() {
    let inputString = document.getElementById('userString').value;

    let check = checkForPalindrome(inputString);

    displayResults(check, inputString);
}

// logic function
function checkForPalindrome(userString) {

    userString = userString.toLowerCase();

    const regex = /[^a-z0-0]/gi;
    userString = userString.replace(regex, "");

    for(let i = 0; i < userString.length/2; i++) {
        if(userString[i] != userString[userString.length - 1 - i])
    {
        // if not a palindrome
        return false;
    } else {
        // not a palindrome
        return true;
    }
    }
}

function reverseString(string) {
    let reversedString = '';

    for (let i = string.length -1; i >= 0; i--) {
        reversedString += string[i];
    }

    return reversedString;
}




// view function
function displayResults(revString, userString) {

    let alert = document.getElementById('alert');

    let reversedString = reverseString(userString);

    let resultsElement = document.getElementById('results');

    let messageElement = document.getElementById('message');

    //reset alert box
    alert.classList.remove('alert-danger');
    alert.classList.remove('alert-success');

    if (revString) {
        alert.classList.add('alert-success');
        resultsElement.textContent = "Congrats! It's a palindrome!";
        messageElement.textContent  = "Your phrased reversed: " + reversedString;
    } else {
        alert.classList.add('alert-danger');
        resultsElement.textContent = "Oh no! It's not a palindrome!";
        messageElement.textContent  = "Your phrased reversed: " + reversedString;
    }

    alert.classList.remove('invisible');

}
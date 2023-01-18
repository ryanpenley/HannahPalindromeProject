// controller
function getValues() {
    let inputString = document.getElementById('userString').value;

    let checkPalin = checkForPalindrome(inputString);

    displayResults(checkPalin, inputString);
}

// logic function
function checkForPalindrome(userString) {

    for(let i = 0; i < userString.length/2; i++) {
        if(userString[i] != userString[userString.length - 1 - i]) {
            return textContent = "Uh-oh! This is not a Palindrome!";
        }
    }

    return textContent = "Way to go! This is a Palindrome!";
}

// view function
function displayResults(checkPalin, inputString) {

    document.getElementById('results').textContent = checkPalin;
    document.getElementById('alert').classList.remove('invisible');

}
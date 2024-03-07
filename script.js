document.addEventListener("DOMContentLoaded", function() {
    
    const checkBtn = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const resultDiv = document.getElementById('result');

    checkBtn.addEventListener("click", buttonClicked);

    function buttonClicked() {
        const inputValue = textInput.value;
        if (inputValue === '') {
        alert("Please input a value");
        console.log("workin")
        return;
        }
        const isPalindrome = checkPalindrome(inputValue);
        if (isPalindrome) {
            resultDiv.textContent = inputValue + " is a palindrome";
        } else {
            resultDiv.textContent = inputValue + " is not a palindrome.";
        }
    }

    function checkPalindrome(str) {
        const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
        const reversedStr = cleanStr.split('').reverse().join('');
        return cleanStr === reversedStr;
    }
});

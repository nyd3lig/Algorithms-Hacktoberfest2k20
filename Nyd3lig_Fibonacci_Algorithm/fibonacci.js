const fibonacci = function(num) {
    if (num > 0) {
    let firstNumber = 1;
    let secondNumber = 0;
    let thirdNumber
    for (let i = 0; num >= i; i++) {
        console.log(firstNumber);
        thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;

    }

   
return firstNumber;
} else 
return "OOPS";
}

module.exports = fibonacci

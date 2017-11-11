"use strict";

var buttonsArray = document.getElementsByClassName("buttons");

// VARIABLES
var first = document.getElementById("first_and_result");
var operator = document.getElementById("operator");
var secondField = document.getElementById("second_number");
var someStuff = "";
var someOtherStuff = "";
var clear = document.getElementById("clear");
var operators = document.getElementsByClassName("operators");
var equals = document.getElementById("equals");

// NUMBER & OPERATOR BUTTONS
function enterNumberFunction (event) {
    if (isOperatorBtn(event.target) && first.value.length > 0) {
        operator.value = event.target.innerText;

    } else if (operator.value.length > 0 && (isOperatorBtn(event.target) == false) && operator.value != "√") {
        someOtherStuff += event.target.innerText;
        secondField.value = someOtherStuff;
    }else if ((isOperatorBtn(event.target)==false)){
        someStuff += event.target.innerText;
        first.value = someStuff;

    }
}

for (var i = 0; i < buttonsArray.length; i++) {
            buttonsArray[i].addEventListener("click", enterNumberFunction);
        }



// CLEAR BUTTON
function clearFunction() {
    first.value = "";
    someStuff = "";
    operator.value = "";
    secondField.value = "";
    someOtherStuff = "";
}
clear.addEventListener("click", clearFunction);

// EQUALS BUTTON
function equalsFunction(){
    if(first.value.indexOf(".")==first.value.lastIndexOf(".") && secondField.value.indexOf(".")==secondField.value.lastIndexOf(".")) {
        var firstOperand = parseFloat(first.value);
        var secondOperand = parseFloat(secondField.value);
        switch (operator.value) {
            case "√":
                first.value = Math.sqrt(first.value);
                break;
            case "+":
                first.value = firstOperand + secondOperand;

                break;
            case "-":
                first.value = firstOperand - secondOperand;

                break;
            case "*":
                first.value = firstOperand * secondOperand;

                break;
            case "/":
                if (secondOperand == 0) {
                    alert("cannot divide by zero!");
                    break;
                }
                first.value = firstOperand / secondOperand;

                break;
        }

        secondField.value = "";
        someOtherStuff = "";
    }else{
        alert("Too many '.' characters!")
    }

}

equals.addEventListener("click", equalsFunction);

// OPERATOR BUTTONS


// function enterOperatorFunction (i) {
//
//     return function () {
//         operatorFunctionVariable = operator.innerText;
//         operatorFunctionVariable += operators[i].innerText;
//         operator.innerText = operatorFunctionVariable;
//
//     }
//
//
// }
//
// for(i=0; i< operators.length; i++) {
//     operators[i].addEventListener("click", enterOperatorFunction(i), false);
// }
function isOperatorBtn (buttonToTest) {
    return (buttonToTest.className.split(" ").indexOf("operators") > -1 ? true : false);
}

// for(var i=0; i< operators.length; i++) {
//     (function(index) {
//         operators[index].addEventListener("click", function() {
//             haveIEnteredSomething = true;
//         })
//     })(i);
// }

// KEYBOARD EVENTS
document.getElementsByTagName("body")[0].addEventListener("keydown", function (e) {
    var event = new MouseEvent('click', {
        'view': window
    });
    var event2 = new MouseEvent('mouseover', {'view': window});

    console.log(e.keyCode);

    switch (e.keyCode) {
        // Number 0-9
        case 48:
            document.getElementById("zero_btn").dispatchEvent(event);
            document.getElementById("zero_btn").style.opacity = 1;
            break;
        case 49:
            document.getElementById("one_btn").dispatchEvent(event);
            document.getElementById("one_btn").style.opacity = 1;
            break;
        case 50:
            document.getElementById("two_btn").dispatchEvent(event);
            document.getElementById("two_btn").style.opacity = 1;
            break;

        case 51:
            document.getElementById("three_btn").dispatchEvent(event);
            document.getElementById("three_btn").style.opacity = 1;
            break;

        case 52:
            document.getElementById("four_btn").dispatchEvent(event);
            document.getElementById("four_btn").style.opacity = 1;
            break;

        case 53:
            document.getElementById("five_btn").dispatchEvent(event);
            document.getElementById("five_btn").style.opacity = 1;
            break;

        case 54:
            document.getElementById("six_btn").dispatchEvent(event);
            document.getElementById("six_btn").style.opacity = 1;
            break;

        case 55:
            document.getElementById("seven_btn").dispatchEvent(event);
            document.getElementById("seven_btn").style.opacity = 1;
            break;

        case 56:
            if (e.shiftKey) {
                // asterisk
                document.getElementById("times").dispatchEvent(event);
                document.getElementById("times").style.opacity = 1;
                // eight
            } else {
                document.getElementById("eight_btn").dispatchEvent(event);
                document.getElementById("eight_btn").style.opacity = 1;

            }
            break;
        case 57:
            document.getElementById("nine_btn").dispatchEvent(event);
            document.getElementById("nine_btn").style.opacity = 1;
            break;

        // OPERATORS AND SPECIAL KEYS
        // +
        case 187:
            document.getElementById("plus").dispatchEvent(event);
            document.getElementById("plus").style.opacity = 1;
            break;

        // minus: -
        case 189:
            document.getElementById("minus").dispatchEvent(event);
            document.getElementById("minus").style.opacity = 1;
            break;

        // div: /
        case 191:
            document.getElementById("divide").dispatchEvent(event);
            document.getElementById("divide").style.opacity = 1;
            break;

        // equal: =
        case 13:
            document.getElementById("equals").dispatchEvent(event);
            document.getElementById("equals").style.opacity = 1;
            break;

        // .
        case 190:
            document.getElementById("decimal").dispatchEvent(event);
            document.getElementById("decimal").style.opacity = 1;
            break;

        // C
        case 8:
            document.getElementById("clear").dispatchEvent(event);
            document.getElementById("clear").style.opacity = 1;
            break;
    }
});

document.getElementsByTagName("body")[0].addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        // Number 0-9
        case 48:
            document.getElementById("zero_btn").style.opacity = 0.6;
            break;
        case 49:
            document.getElementById("one_btn").style.opacity = 0.6;
            break;
        case 50:
            document.getElementById("two_btn").style.opacity = 0.6;
            break;

        case 51:
            document.getElementById("three_btn").style.opacity = 0.6;
            break;

        case 52:
            document.getElementById("four_btn").style.opacity = 0.6;
            break;

        case 53:
            document.getElementById("five_btn").style.opacity = 0.6;
            break;

        case 54:
            document.getElementById("six_btn").style.opacity = 0.6;
            break;

        case 55:
            document.getElementById("seven_btn").style.opacity = 0.6;
            break;

        case 56:
            if (e.shiftKey) {
                document.getElementById("times").style.opacity = 0.6;
            } else {
                document.getElementById("eight_btn").style.opacity = 0.6;
            }
            break;
        case 57:
            document.getElementById("nine_btn").style.opacity = 0.6;
            break;

        // OPERATORS AND SPECIAL KEYS
        // +
        case 187:
            document.getElementById("plus").style.opacity = 0.6;
            break;

        // minus: -
        case 189:
            document.getElementById("minus").style.opacity = 0.6;
            break;

        // div: /
        case 191:
            document.getElementById("divide").style.opacity = 0.6;
            break;

        // equal: =
        case 13:
            document.getElementById("equals").style.opacity = 0.6;
            break;

        // .
        case 190:
            document.getElementById("decimal").style.opacity = 0.6;
            break;

        // C
        case 8:
            document.getElementById("clear").style.opacity = 0.6;
            break;
    }
})
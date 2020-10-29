var input = document.getElementById("number");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

document.getElementById("number").value;
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("number").click();
    }
});

function convertToRoman() {
    let originalNum = document.getElementById("number").value;

    let num = document.getElementById("number").value;
    if (num == 0) {
        document.getElementById("output").innerHTML = originalNum + " does not have a symbol and is called nulla";
    }
    else {
        let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        let result = [];
        for (let i = 0; i < numbers.length; i++) {
            while (numbers[i] <= num) {
                result.push(symbols[i]);
                num -= numbers[i];
            }

        }
        document.getElementById("output").innerHTML = originalNum + " is " + result.join('');
    }



}

function ClearFields() {

    document.getElementById("number").value = "";
}

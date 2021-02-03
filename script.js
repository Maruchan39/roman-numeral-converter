function convertToRoman(num) {
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[i] <= num) {
      result.push(symbols[i]);
      num -= numbers[i];
    }
  }
  return result.join("");
}

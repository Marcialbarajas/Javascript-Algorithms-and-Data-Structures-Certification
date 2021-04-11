function convertToRoman(num) {
  var result = [];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  numbers.map((number, i) => {
     while (num >= number) {
       result += roman[i];
       num -= number;
     }
    });
  return result;
}

convertToRoman(52); // LII

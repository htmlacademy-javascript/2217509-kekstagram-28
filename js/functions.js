//Проверяет длину строки
const checkStringLength = function (string, acceptedLength) {
  if (string.length > acceptedLength) {
    return false;
  }

  return true;
};

checkStringLength('проверка', 8);

//Проверяет, является ли строка палиндромом
const checkPalindrome = function (string) {
  string = string.toLowerCase();
  if (string === string.split('').reverse().join('')) {
    return true;
  }

  return false;
};

checkPalindrome('ДовОд');

//Извлекает цифры из строки, компелирует их в целое положительное число
let getNumber = function (string) {
  string = string.split('');
  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let g = 0; g < arrNum.length; g++) {
      // eslint-disable-next-line eqeqeq
      if (string[i] == arrNum[g]) {
        result.push(string[i]);
      }
    }
  }
  return result.join('').replace(/ /g,'');
};

getNumber('hja dj873 5jc9   875983');

//У функции три параметра: 1. исходная строка (primaryStr) 2. минимальная длина строки (minLength) 3. добавочные символы (extraSymbols)
//- extraSymbols - в начало итоговой строки (resultStr); +++
//- if (primaryStr > minLength) {add primaryStr};
//- if (extraSymbols > resultLength) {cut extraSymbols from ending};

let getResultString = function (primaryStr, minLength, extraSymbols) {
  let resultStr = '';
  let resultLength = (extraSymbols + primaryStr).length;
  let extraLength = minLength - primaryStr.length;
  extraSymbols = extraSymbols.split('');
  if (primaryStr.length >= minLength) {
    return primaryStr;
  } else if (primaryStr.length < minLength && extraSymbols.length === extraLength) {
    resultStr = extraSymbols.join('') + primaryStr;
    return resultStr;
  } else if (primaryStr.length < minLength && extraSymbols.length > extraLength) {
    for (let i = 0; i <= extraLength - 1; i++) {
      resultStr = resultStr + extraSymbols[i];
    }
    resultStr = resultStr + primaryStr;
    return resultStr;
  } else if (primaryStr.length < minLength && extraSymbols.length < extraLength) {
    resultStr = primaryStr.padStart(6, extraSymbols.join(''));
    return resultStr;
  }
};

getResultString('h', 6, 'fkjjjjj');

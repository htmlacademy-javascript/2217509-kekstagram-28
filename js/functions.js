//Проверяет длину строки
const checkStringLength = function (string, acceptedLength) {
  return string.length <= acceptedLength;
};

checkStringLength('проверка', 8);

//Проверяет, является ли строка палиндромом
const checkPalindrome = function (string) {
  string = string.toLowerCase();
  return string === string.split('').reverse().join('');
};

checkPalindrome('ДовОд');

//Извлекает цифры из строки, компелирует их в целое положительное число
const getNumber = function (string) {
  const stringDivided = string.split('');
  const result = [];
  for (let i = 0; i < stringDivided.length; i++) {
    for (let g = 0; g < 10; g++) {
      g = String(g);
      if (stringDivided[i] === g) {
        result.push(stringDivided[i]);
      }
    }
  }
  return result.join('').replace(/ /g,'');
};

getNumber('hja dj873 5jc9   875983');

//У функции три параметра: 1. исходная строка (primaryStr) 2. минимальная длина строки (minLength) 3. добавочные символы (extraSymbols)


const getResultString = function (primaryStr, minLength, extraSymbols) {
  let resultStr = '';
  const extraLength = minLength - primaryStr.length;
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

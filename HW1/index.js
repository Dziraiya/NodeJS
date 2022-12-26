import colors from "colors";

// let [n1,n2] = process.argv.slice(2);

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

function returnSimpleNumbers(num1, num2) {
  // проверки на ввод нечисловых символов и отсутствия одного из аргументов нет, так как программа в этом случае возвращает: простых нет (см. строка 47)

  if (num1 <= 1 || num2 <= 1) {
    return [
      `Уважаемый пользователь, понятие простого числа в здравом смысле и контексте, является положительным простым в наборе целых чисел. Вводите, пожалуйста, числа больше 1. 1 тоже не вводите, так как 1 не является простым в соответствии с фундаментальной теоремой арифметики`,
    ];
  }

  // если аргументы передали наоборот, ну, бывает такое

  if (num2 < num1) {
    const num_1 = num2;
    const num_2 = num1;
    return display(num_1, num_2);
  }

  return display(num1, num2);
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function display(num1, num2) {
  const arr = [];

  for (let i = num1; i <= num2; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  if (arr.length === 0) {
    return ["простых нет или одним из аргументов был передан символ"];
  } else {
    return arr;
  }
}

function returnColorsNumb(arr) {
  const colorsPallete = [colors.red, colors.yellow, colors.green];
  let primeCount = 0;

  for (let index = 0; index < arr.length; index++) {
    console.log(colorsPallete[primeCount % 3](arr[index]));
    primeCount++;
  }
}

returnColorsNumb(returnSimpleNumbers(num1, num2));

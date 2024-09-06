/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром. */
function getResult(a, b, c) {
  return (a - b) / c;
}
console.log(getResult(10, 4, 2));

/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. */
function getCubeOfNumber(number) {
  return Math.pow(number, 3);
}
console.log(getCubeOfNumber(3));
function getSquareOfNumber(number) {
  return Math.pow(number, 2);
}
console.log(getSquareOfNumber(3));

/*3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b. */
function getMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(getMin(-5, 4));

function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(getMax(-5, 4));

/*4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив. */

function returnArray(from, to) {
  let arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(returnArray(3, 10));

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
{
  let a = 3;
  let b = 10;

  let arr = returnArray(a, b);
  printArray(arr);
}

/*5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false. */

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(10));

/*6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи. */

function getEvenNumbers(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}
console.log(getEvenNumbers([1, 4, 7, 3, 33, 12, 44]));

/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,
например:

*
**
***
****
*****
******
*******
********
********* */
function getPyramide(rows) {
  let str = '';
  for (let i = 1; i <= rows; i++) {
   
    console.log(`this is i ${i + str}`);
     for (let j = 0; j <= rows; j++) {
      // console.log(`this is j ${j}`);
     }
  }
}
console.log(getPyramide(6));


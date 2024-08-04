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
// 5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.
function randomElement(arr) {
  let i = Math.floor(Math.random() * arr.length);
  let result = arr[i];
  return result;
  
  }
// console.log(randomElement(['43', 'kfjb', 2, false]));

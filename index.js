/*1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран. */
{
  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/*2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3. */

{
  let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > -10 && arr[i] < -3) {
      console.log(arr[i]);
    }
  }
}

/*3. Создайте новый массив и заполните его значениями от 23 до 57, 
используя цикл for иwhile. Выведите оба массива. С помощью цикла for 
найдите сумму элементов этого массива. Запишите ее в переменную result и выведите. */
{
  let arr = [];
  for (let i = 23; i <= 57; i++) {
    arr.push(i);
  }
  console.log(arr);
}

{
  let arr = [];
  let i = 23;
  while (i <= 57) {
    arr.push(i);
    i++;
  }
  console.log(arr);
}

/*5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.
*/

{
  let arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "СБ" || arr[i] === "ВС") {
      document.write(`<b>${arr[i]}</b><br>`);
    } else {
      document.write(`${arr[i]} <br>`);
    }
  }
}

/* 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.*/
// {
//   let arr = [[12, " ", , , , , , ,], 67, "true", "1", false];
//   console.log(arr.[arr.length-1]);
// }

/*8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse. */

{
  let arr = [12, false, 'Текст', 4, 2, -5, 0];
  let newArr = [];
  let i = arr.length-1;
  while(i > 0) {
  newArr.push(arr[i])
  i--;
  }
  console.log(newArr);
}

{
  let arr = [12, false, 'Текст', 4, 2, -5, 0];
  let rev = arr.reverse();
  console.log(rev);
}

/*9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]. */
{
  let arr = [5, 9, 21, , , 9, 78, , , , 6];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'undefined') {
      count++;
    }
  }
  console.log(count);
}

/*10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
[1,8,0,13,76,8,7,0,22,0,2,3,2]. */
{
  let arr = [1,8,0,13,76,8,7,0,22,0,2,3,2];
  let start = arr.indexOf(0);
  let end = arr.lastIndexOf(0);
  let sum = 0;
  for (let i = start; i < end; i++) {
  sum += arr[i];
  }

  console.log(sum);
}

/* 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь. Например: высота = 5, на экране:*/
{
  let h = 5;
for (let i = 0; i < h; i++) {
  let line = '';
  for (let j = 1; j <= (h - i); j++) {
    line += ' ';
  }
  for( let j = 1; j <= (i + i - 1); j++) {
    line += '@'
  }
  console.log(line)
}

}

// extra tasks

/*1.	Найдите сумму элементов (типа number) массива. */
{
  let arr = [1, 2, 'rythm', false, , {}, '', 4];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] !== NaN) {
      sum += arr[i];
    }
  }

  console.log(sum);
}

/*2.	Найти номер и значение первого найденного отрицательного элемента массива. */
{
  let arr = [0, 72, -12, 4, -4];
  let search;
  let index;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      search = arr[i];
      index = i;
      break;
    }
  }
  console.log(search, index);
}

/*3.Найдите максимальный и минимальный элементы массива. Выведите эти элементы и их сумму. */
{
  let arr = [0, 72, -12, 4, -4];
  let min = arr[0];
  let max = arr[0];
  let sum;
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
   }
   sum = min + max;
   console.log(sum);
}

/*4.	Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), 
например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0] */

{
  let arr = [0, 'N', 98, 'Text', 3, 5];
  let rra = arr.reverse();
  console.log(rra);
}

/*5.	Есть два массива с числовыми значениями одинаковой длины. 
Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6]. */
{
  let arr1 = [12,4,0];
  let arr2 = [8,7,6];
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
   arr3.push(arr1[i] + arr2[i]);
  }
  console.log(arr3);
}

/*6.	Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива 
на противоположные по знаку. Например, задан массив [1, -5, 0, 3, -4]. 
После преобразования должно получиться [-1, 5, 0, -3, 4]. */
{
  let arr = [1, -5, 0, 3, -4];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
     arr[i] *= -1;
    } else {
      arr[i] === 0;
    }
  }
  console.log(arr);
}

/*7. Поменяйте местами максимальный и минимальных элементы в массиве. */
{
  let arr = [3, 9, 17, -1];
  let min = arr[0];
  let max = arr[0];
  let minIndex;
  let maxIndex;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    } if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  arr[minIndex] = max;
  arr[maxIndex] = min;
  console.log(arr);
}
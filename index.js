/*2 Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.
 */
// {
//   let i = 89;
// while (i >= 11) {
//   document.write(i + `<br>`);
//   i--;
// }

// }

/*4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).
 */
{
let i = 1;
let sum = 1;
while (i <= 5) {
  i++;
  sum += i;
  console.log(sum);
}

}
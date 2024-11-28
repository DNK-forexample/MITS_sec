// 3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).
function getQuantityDaysBetweenTwoDates(date1, date2) {
  let result = date2.getTime() - date1.getTime();
  result = Math.ceil(result / (1000 * 3600 * 24));

  if (result < 3) {
    console.log("Дата уже близко");
  } else if (result >= 3 && result <= 7) {
    console.log("Еще есть время");
  } else {
    console.log("Далековато еще");
  }

  return result;
}

// const day1 = new Date();
// const day2 = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate() + 2);
// console.log(getQuantityDaysBetweenTwoDates(day1, day2));


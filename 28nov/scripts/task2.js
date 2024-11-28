// 2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.
let namesAndCitiesArray = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

const distances = [0, 344, 281, 197];

for (let i = 0; i < namesAndCitiesArray.length / 2; i++) {

  for (let j = 0; j < namesAndCitiesArray[i].length; j++) {
  console.log(`${namesAndCitiesArray[i][j]} из ${namesAndCitiesArray[namesAndCitiesArray.length / 2][j]}`);
  }


  console.log(`Расстояние между ${namesAndCitiesArray[i][0]} и ${namesAndCitiesArray[i][3]} равно ${Math.abs(distances[0] - distances[3])}`);
}

function getDistance(i1, i2) {
  let diff = Math.abs(distances[i1] - distances[i2]);
  console.log(`Расстояние между ${namesAndCitiesArray[0][i1]} и ${namesAndCitiesArray[0][i2]} равно ${diff} км`);
}

// console.log(getDistance(1, 3));
// Почему после выполнения кода появляется undefined?

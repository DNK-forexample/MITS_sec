// 1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.
let cities = [];

function addCity(str) {
  let newCities = [];

  if (str) {
    newCities = str.split(',');
  } else {
    const city = prompt("Какой город Беларуси ты знаешь?");
    newCities = [city];
  }

  cities.push(...newCities);
  cities.sort();
  return cities;
}

// console.log(cities);
// console.log(addCity());
// console.log(addCity("Минск, Брест, Витебск"));


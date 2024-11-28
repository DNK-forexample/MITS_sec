// Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).
function celsiusToFahrenheit(celsius) {
  let result = (celsius * 9/5) + 32;
  if (result < -5) {
    console.log('Сегодня очень холодно');
  } else if (result < 0 && result <= -5) {
    console.log('Сегодня очень холодно');
  } else if (result <= 0 && result < 5) {
    console.log('Одевайтесь теплее');
  } else if (result <= 5 && result <= 10) {
    console.log("Сегодня прохладнее, чем обычно");
  }
  return result;
}


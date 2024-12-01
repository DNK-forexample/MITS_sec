// Создайте функцию, которая создает произвольный HTML-элемент в <body> в виде круга/овала/квадрата/прямоугольника. Функция должна принимать параметры: width, height, radius, color; создавать запись "<div style="width: 200px; height: 100px, border-radius: 5px; background-color: red;"></div>". Данное значение добавляйте через document.write. Подумайте о том, как сделать случайную генерацию фигур по вызову функции без параметров.

function getHTMLelement(width, height, radius, color) {
  let style = `width:${width}px; height:${height}px;border-radius:${radius}px;background-color:${color};`;

  let HTMLelement = `<div style="${style}"`;
  document.write(HTMLelement);
}
// console.log(getHTMLelement('300', '500', '10', 'red'));


//подумала над тем, как сделать случайную генерацию фигур
function getRandomHTMLelement() {

  let width  = Math.round(Math.random() * (1000 - 10) + 10); 
  let height = Math.round(Math.random() * (1000 - 10) + 10); 
  let radius = Math.round(Math.random() * (1000 - 10) + 10); 
  let color = getRandomColor();

  let style = `width:${width}px; height:${height}px;border-radius:${radius}px;background-color:${color};`;

  let HTMLelement = `<div style="${style}"`;
  document.write(HTMLelement);
}

function getRandomColor() {
  let char = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += char[Math.round(Math.random() * 16)];
  }
  return color;
}
getRandomHTMLelement();
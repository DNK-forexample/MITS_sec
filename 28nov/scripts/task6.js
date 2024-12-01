// Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига.

function encryptToCaesar(str, shift) {
  let caesarEncryptArr = [];
  // let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
if (!str) return;
if (str && shift == 0) return str;
if (str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) { //диапазон латинских символов
      let newCharCode = charCode + shift;
      caesarEncryptArr.push(String.fromCharCode(newCharCode));
    }
  }
}
return caesarEncryptArr.join('');
}

// console.log(encryptToCaesar('learn', 2)); //'ngctp'

// str.charCodeAt(index)
//String.fromCharCode(65, 66, 67); // "ABC"

function decipherCaesar(str, shift) {
  let decipherArr = [];

  if (!str) return;
  if (str && shift == 0) return str;
  if (str) {
    for (let i = 0; i <= str.length; i++) {
      const charCode = str.charCodeAt(i);
    
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        let newCharCode = charCode - shift;
        decipherArr.push(String.fromCharCode(newCharCode));
      }
    }
  }
  return decipherArr.join('');
}

// console.log(decipherCaesar('ngctp', 2)); //'learn'
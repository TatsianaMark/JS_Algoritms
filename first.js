//Составить алгоритм: если введенное число больше 7, то вывести “Привет”
const num = Math.ceil(Math.random());
const gnum = prompt('Введите любое число');
 if (gnum > 7)
   console.log('Привет');

//Составить алгоритм: если введенное имя совпадает с Вячеслав, то вывести “Привет, Вячеслав”, если нет, то вывести "Нет такого имени"
const name = 'Вячеслав';
const say = prompt('Введите любое имя, например Вячеслав:)');
 if (say == name) 
   console.log('Привет, Вячеслав');
  else
    console.log('Нет такого имени');

//Составить алгоритм: на входе есть числовой массив, необходимо вывести элементы массива кратные 3
var array = prompt('Введите массив через пробел :'), arrayResult = [];
    array = array.trim().split(/\s+/);

    for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] != 0) arrayResult.push(array[i]);
    }

    alert('Ваш массив :\n' + array + '\n \n' + 'Числа которые делиться на 3 :\n' + arrayResult);

//Дана скобочная последовательность: [((())()(())]]
//- Можно ли считать эту последовательность правильной?
//- Если ответ на предыдущий вопрос “нет” - то что необходимо в ней изменить, чтоб она стала правильной?

//Ответ: - Последовательность считать правильной нельзя так не учтено открытие\закрытие скобок. Да и условие должно находиться между скобок. 
    //- Необходимо добавить квадратную скобку вторую слева и круглые скобки недостоющие [[((())()(()))]] 
 

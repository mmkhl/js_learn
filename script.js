// Написать функцию, которая принимает два 
// числа и возращает результат их умножения

// let getvalue = function (first, second) {
//     return result = first * second;
// }
// console.log(getvalue(2, 4));

// Написать функцию, которой передаем, имя, 
// фамилия и возраст, и получаем строку 
// "Привет Иван Петров с возрастом 17 лет" 
// (только здесь данные, которые были переданы в функцию)

// function getUserName (name, lastName, age) {
//     return `Привет ${name} ${lastName} с возрастом ${age} лет!`
// }
// console.log(getUserName('Михаил', 'Попков', '19'));

// Написать функцию, которая принимает пол человека 
// ('M','F') в виде строки, результат функции возвращает
//  строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен

// let gender = 'erv';
// let getGenderValue = function(gender){
//     if(gender === 'M'){
//         return 'Ваш пол мужской';
//     } else if (gender === 'F') {
//         return 'Ваш пол женский';
//     } else {
//         return 'Ваш пол не опеределен';
//     }
// }
// console.log(getGenderValue(gender));

// Сделайте функцию, которая принимает 
// параметром число от 1 до 7, а возвращает 
// день недели на русском языке.

// let numDay = 7;
// const weekDay = ['Понедельник', 'Вторник', 'Среда', 
//      'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// function selectDayName(numDay){
//     if (numDay >= 1 && numDay <= 7) {
//             return weekDay[numDay - 1];
//     } else {
//         return 'Этого не может быть!!!'
//     }
// }
// console.log(selectDayName(numDay));

// Написать функцию, которая принимает 
// строку (в этом тексте 3-5 предложений), 
// верните каждое первое слово в каждом предложении, через запятую.

// let text = 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру. Сгенерировать несколько абзацев более менее осмысленного текста. Рыбы на русском языке, поможет оратору отточить навык выступлений в домашних условиях.';
// let getSomeText = function(text) {
//     let arrayString = text.split(' ');
//     console.log(arrayString);
//     for (let i = 0; i < arrayString.length; i++) {
//         if (arrayString[i] !== arrayString[i].toLowerCase()) {
//             console.log( `${arrayString[i]}, `);
//         }
//     }
// }
// getSomeText(text);

// Написать функцию, которой передаем имя,
// и она возраващает приветствие в зависимости 
// от времени суток (Доброе утро\день\вечер\ночи Иван)

// let hours = new Date();
// let name = 'Михаил';
// let getGreeting = function (hours, name){
//     if (hours.getHours() > 5 && hours.getHours() <=12){
//         return `Доброе утро, ${name}`
//     } else if (hours.getHours() > 12 && hours.getHours() <= 16){
//         return `Добрый день, ${name}`
//     } else if (hours.getHours() > 16 && hours.getHours() <=23){
//         return `Добрый вечер, ${name}`
//     } else {
//         return `Доброй ночи, ${name} `
//     }
// }

// console.log(`${getGreeting(hours, name)} Время: ${hours.getHours()}:${hours.getMinutes()}`);

// Вывести числа от 1 до 100 в столбец. К каждой 
// цифре подписать состояние возраста (1-17 ребенок,
// 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

// let getPersonAge = function (age) {
//     if (age > 0 && age <= 17){
//         return `ребенок`;
//     } else if (age > 17 && age <= 30){
//         return `молодой`;
//     } else if (age > 30 && age <= 55){
//         return `зрелый`;
//     } else if (age > 55){
//         return `старый`;
//     } else {
//         return `Еще не родился!!!`;
//     }
// }
// console.log(getPersonAge(19));

// Создай новую функцию, в которую передаешь имя 
// и возраст человека и получаешь сообщение (Иван
// имеет возраст 44 и он зрелый). А также вызови 
// внутри своей функции, функцию из прошлого задания

// const nam = 'Михаил';
// const age = 19;
// const getPersonData = function (nam, age){
//     return `${nam} имеет возраст ${age} и он ${getPersonAge(age)}`
// }
// console.log(getPersonData(nam, age));

// .. .. .. // 
// // //  НОВЫЙ МОДУЛЬ МАССИВЫ // // //
// .. .. .. //

// Сделай функцию, которая принимает массив любых 
// целых чисел, которая возращает истинну, если все 
// элементы четные, если бы хотя бы один элемент не четный, то false.

// let arrNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrNum2 = [2, 2, 4, 4, 6, 6, 8, 8, 10];
// let arrNum3 = [3, 3, 3, 3, 3, 3, 4, 3, 5];

// let getArrNum = function(arrNum) {
//     let flag;
//     for (let i = 0; i < arrNum.length; i++) {
//         if (arrNum[i] % 2 == 0) {
//             console.log(123);
//             flag = true;        
//         } else if (arrNum[i] % 2 !== 0){
//             console.log(321);
//             flag = false;
//             return flag;
//         }
//     }
//     return flag;
// }

// console.log(getArrNum(arrNum2));

// Сделай функцию, которая принимает массив любых 
// целых чисел, которая возращает истинну, если хотя 
// бы один элемент нечетный, если все четные, то false.
// let arrNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrNum2 = [2, 2, 4, 4, 6, 6, 8, 8, 10];
// let arrNum3 = [3, 3, 3, 3, 3, 3, 4, 3, 5];

// let getArrNum = function(arrNum) {
//     let flag;
//     for (let i = 0; i < arrNum.length; i++) {
//         if (arrNum[i] % 2 !== 0) {
//             console.log(123);
//             flag = true;
//             return flag;        
//         } else if (arrNum[i] % 2 === 0){
//             console.log(321);
//             flag = false;
//         }
//     }
//     return flag;
// }

// console.log(getArrNum(arrNum1));

// Сделай функцию, которая принимает массив любых 
// целых чисел, которая возращает новый массив, 
// где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

let arrayForSelect = [1, 3, 4, 5, 15, 10, 20, 23, 35];
let newArray = [];

let getArrayOfNum = function(arr) {
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0) {
            let k = 0;
            newArray[k] = arr[i];
            k++;
        } else{
            continue;
        }
    }
    return newArray;
} 

//      ????????????
//   ????????????????
// ????           ???
//               ???
//             ????
//            ????
//           ????
//         ?????
//         ?????

//         ?????
//         ?????

console.log(getArrayOfNum(newArray));

// Написать функцию, которая принимает массив чисел, 
// например [1,2,3,4,5] и функция возращает среднее 
// арифметическое, (округлить результат до десятых)

// let arrayForSelect = [1, 3, 4, 5, 15, 10, 20, 23, 25];
// let getArrayOfNum = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         console.log(sum);
//     }
//     return (sum / arr.length).toFixed(1);
// }
// console.log(getArrayOfNum(arrayForSelect));


// Написать функцию, которая принимает массив чисел, 
// например [1,2,3,4,5], и переносит первый элемент 
// массива в конец (например можно засунуть первый 
// элемент в конец, затем удалить первый элемент), 
// попробуй несколькими способами сделать, если догадаешься)






// .. .. .. // 
// // //  НОВЫЙ МОДУЛЬ МАССИВЫ // // //
// .. .. .. //

// ОБЪЕКТЫ
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните 
// результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// function runToObject(object){
//     let generalCash = 0;
//     for (let key in object) {
//         generalCash += object[key];
//     }
//     return generalCash;
// }
// console.log(runToObject(salaries));
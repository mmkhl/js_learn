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

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// function multiplyNumeric(object){
//     for (let prop in object) {
//         if (typeof object[prop] === "number") {
//             object[prop] *= 2;
//         } else {
//             continue;
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// console.log(menu);

// multiplyNumeric(menu);

// console.log(menu);

// Написать объект ladder - объект, который позволяет 
// подниматься вверх и спускаться. Пример работы должен быть таким:
// 
//     ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
//     ladder.up(); 
//     ladder.up();
//     ladder.showStep(); // 2
//     ladder.down();
//     ladder.showStep(); // 1

// let position = 0;

// let ladder = {
//     showStep () {
//         console.log(`Вы находитесь на ${position} ступеньке!`);
//     },
//     up () {
//         ++position;
//     }, 
//     down () {
//         --position;
//     }
// }

//     ladder.showStep(); 
//     ladder.up(); 
//     ladder.up();
//     ladder.showStep(); 
//     ladder.down();
//     ladder.showStep()

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

// let arrayForSelect = [1, 3, 4, 5, 15, 10, 20, 23, 35];
// let newArray = [];

// let getArrayOfNum = function(arr) {
//     console.log(arr.length);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 == 0) {
//             let k = 0;
//             newArray[k] = arr[i];
//             k++;
//         } else{
//             continue;
//         }
//     }
//     return newArray;
// } 

// //      ????????????
// //   ????         ???
// // ????           ???
// //               ???
// //             ????
// //            ????
// //           ????
// //         ?????
// //         ?????

// //         ?????
// //         ?????

// console.log(getArrayOfNum(arrayForSelect));

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


// let arrayForMove = [1,2,3,4,5];

// let getArrOfNumber = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0){
//             arr[arr.length] = arr[i];
//         }
//     }
//     arr.splice(0, 1);
//     return arr;
// }


// console.log(getArrOfNumber(arrayForMove));
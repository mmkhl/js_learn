// Написать функцию с колбеком, которая принимает число с колбеком и через секунду
// выводить в консоль число. Ограничения - для решения задачи setTimeout - можно
// использовать только один раз! Реализовать вывод в консоль от 1 до 10 через секунду.
// Вызываем так (только более большая вложенность):

// function count(num, colback){
//     console.log(num)
//     setTimeout(() => {
//     colback()}, 1000);
// }

// count(1, () => {
//     count(2, () => {
//         count(3, () => {
//             count(4, () => {
//                 count(5, () => {
//                     count(6, () => {
//                         count(7, () => {
//                             count(8, () => {
//                                 count(9, () => {
//                                     count(10, () => { 
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//// данная конструкция с колбэками называется адской пирамидой колбэков
//// так делать не стоит, по причине низкого уровня читабельности и долгого разбора лучше писать отдельно


// Выводим от 1 до 10 через секунду каждый раз. Используя Promise.
// Ограничения - setTimeout и new Promise() мы можем вызывать только
// один раз для решения нашей задачи.


let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("It's good work");
    }, 1000)
})



// Скопируем решения из прошлой задачи и переписываем на async-await
// функцию, конструкцию .then - не используем



// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10.
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в
// секундах. Оберните все это в промис. Пусть промис выполнится успешно, если
// сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.



// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число.
// Сделайте так, чтобы каждый последующий промис через 3 секунды возводил в квадрат
// результат предыдущего промиса. После окончания манипуляций выведите число алертом
// на экран.



// Выполните запрос по получению списка пользователей, по этому url
// https://jsonplaceholder.typicode.com/users, в случае успеха выводим на экран
// пользователей со всеми данными в табличку. В случае не успеха выводим на экран
// ошибку "Ошибка, запрос не отработан". Используем для решения fetch.

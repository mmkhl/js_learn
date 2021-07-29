// Работа с DOM
// Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"

// document.body.innerHTML = `
//     <button onclick = "alert('Hello world')">Hello</button>
// `

// Выводим кнопку с текстом "Заполнить" и незаполненный
// инпут, при клике на кнопку, заполняем инпут текстом "test@email.ru"

// function fill(){
//     const btn = document.getElementById('textarea')
//     btn.value = "test@email.ru"
// }

// document.body.innerHTML = `
// <input type="text" id = "textarea">
// <br/><br/>
// <input type="button" value="Заполнить" id = "btn__fill" onclick= "fill(); ">`

// Выводим кнопку и инпут, в инпуте можно ввести любой и текст 
// и при нажатии на кнопку, выводится алерт с текстом "Вы ввели 
// 'текст инпута'" или "Вы ничего не ввели в поле".
// function getValueFromInput() {
//     let input = document.querySelector('.textarea');
//     if (input.value !== ''){
//         console.log(`Вы ввели ${input.value}`);
//     } else {
//         console.log("Вы ничего не ввели ");
//     }
// }

// document.body.innerHTML = `
// <input type="text" class = "textarea"> <br/><br/>
// <input type="button" value = "Click me" class = "button" onclick = "getValueFromInput(); "> `


// Выводим кнопку с текстом "Поменять" и два инпута, при
// клике на кнопку инпуты меняются своим введеным текстом

// document.body.innerHTML = `
//     <input type = "text" id = "firstInput"/>
//     <input type = "button" id = "btn" value = "Поменять"/>
//     <input type = "text" id = "secondInput"/>
// `
// let button = document.querySelector('#btn');
// let firstElem = document.querySelector('#firstInput');
// let secondElem = document.querySelector('#secondInput');

// button.addEventListener('click', function(){
//     let temp = firstElem.value;
//     firstElem.value = secondElem.value;
//     secondElem.value = temp; 
// });

// Выводим две кнопки "заблокировать" и "разблокировать"
// и инпут. Одна из них блокирует инпут с помощью 
// атрибута disabled, а другая разблокирует

// document.body.innerHTML = `
//     <input type="text" id = "textarea"/>
//     <input type="button" id = "enable__btn" value ="Разблокировать"/>
//     <input type="button" id = "disable__btn" value ="Заблокировать"/>`;

// let enableBtn = document.querySelector('#enable__btn');
// let disableBtn = document.querySelector('#disable__btn');
// let input = document.querySelector('#textarea');

// enableBtn.addEventListener('click', function(){
//     document.querySelector('#textarea').disabled = false

// });
// disableBtn.addEventListener('click', function(){
//     document.querySelector('#textarea').disabled = true;
// });


// Вывести любой квадрат и кнопку "скрыть квадрат".Когда мы 
// нажимаем на скрыть, квадрат исчезает и текст кнопки меняется 
// на "показать квадрат" и так можно кликать сколько угодно раз.


// Выводим красный квадрат, при наведении на него он становиться 
// зеленым, а когда уводим курсор от него, обратно красным.


// Вывести 4 красных квадрата, при клике на любой, он становиться зеленым, 
// при этом если есть уже зеленый квадрат, то он становиться обратно красным 
// и так можно кликать на любой квадрат, он становиться зеленым, а старый 
// зеленый квадрат обратно крассным и тд. (Сделать задачу так, чтобы можно 
// было добавить ещё хоть 100 квадратов при этом скрипт не надо менять).


// Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. Кнопки:
// умножить, поделить, сложить, вычесть, вычислить. При нажатии на кнопки
// в любом порядке выводиться в отдельном блоке строка (5-4+3*2...) и при 
// нажатии на кнопку посчитать, заменяем в блоке данную строку на результат
// её вычисления, при этом можно потом дальше вычислять с уже этим вычеслением.



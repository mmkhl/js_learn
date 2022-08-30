// Проверка URL на валидность. Передаем урл функции и проверяем валидное
//  оно или нет (возращаем тру или фолс). Критерии: Урл должен начинаться
// с http:// иили https:// и заканчиваться на .php или .html. Например -
// http://site.ru/index.php - валидный, http://site.com - не валидный,
//  site.ru/index.php - не валидный

// document.body.innerHTML = `
//     <input type="textarea" id="area">
//     <button id="btn" type="submit">Проверить</button>`

// document.body.style = `
//     max-width: 350px;
//     margin: 10px auto;
//     font-size: 25px;
//     font-weight: 500;`

// function isValidUrl(url){
//     let objRE = /(http(s)?)+\:\/\/+[a-zA-Z]+\.(com|ru|org|ua|uk)\/+([a-zA-Z]+)\.+(php|html|js)/ig;
//     objRE.lastIndex=0;
//     return objRE.test(url);
// }

//     let inputTag = document.querySelector('#area');
//     document.querySelector('#btn').addEventListener('click', ()=>{
//         console.log(isValidUrl(inputTag.value));
//         if (isValidUrl(inputTag.value)){
//             console.log("VALID");
//         } else {
//             console.log("not valid");
//         }
//     })


// Проверка номера телефона на валидность. Передаем телефон функции и проверяем
// валидное оно или нет (возращаем тру или фолс). Такие номера должны быть
// валидными: 89991112233, 8 (999) 1112233, +7 (999) 111-22-33, +7 (999) 111 22 33.
// Т.е. телефон может начинаться как и с +7, так и с 8. код оператора, может быть в
// скобках и без, и с пробелами. Оставшиеся часть может быть с дефисами и пробелами

// document.body.innerHTML = `
//     <input type="textarea" id="area">
//     <button id="btn" type="submit">Проверить</button>`

// document.body.style = `
//     max-width: 350px;
//     margin: 10px auto;
//     font-size: 25px;
//     font-weight: 500;`

// function isValidUrl(phNum){
//     let objRE = /(\+)?\d+\(?\)?(\-)?/gm;
//     objRE.lastIndex=0;
//     return objRE.test(phNum);
// }

// let inputTag = document.querySelector('#area');
// document.querySelector('#btn').addEventListener('click', ()=>{
//     console.log(isValidUrl(inputTag.value));
//     if (isValidUrl(inputTag.value)){
//         console.log("VALID");
//     } else {
//         console.log("not valid");
//     }
// })



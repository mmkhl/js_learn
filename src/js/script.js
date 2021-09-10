// Проверка URL на валидность. Передаем урл функции и проверяем валидное
//  оно или нет (возращаем тру или фолс). Критерии: Урл должен начинаться
// с http:// иили https:// и заканчиваться на .php или .html. Например -
// http://site.ru/index.php - валидный, http://site.com - не валидный,
//  site.ru/index.php - не валидный

let regEx1 = /^http(|s):\/\/+[(a-z)]{1,32}\.com|ru|org|su+\/.|php$|html$/igm ;

document.body.innerHTML = `
    <input type="textarea" id="area">
    <button id="btn" type="submit">Проверить</button>`

document.body.style = `
    max-width: 350px;
    margin: 10px auto;
    font-size: 25px;
    font-weight: 500;`
    let inputTag = document.querySelector('#area')
    document.querySelector('#btn').addEventListener('click', ()=>{
        if (regEx1.test(inputTag.value)){
            console.log("OKAY");
        } else {
            console.log("Is not OKAY");
        }
    })







// Проверка номера телефона на валидность. Передаем телефон функции и проверяем
// валидное оно или нет (возращаем тру или фолс). Такие номера должны быть
// валидными: 89991112233, 8 (999) 1112233, +7 (999) 111-22-33, +7 (999) 111 22 33.
// Т.е. телефон может начинаться как и с +7, так и с 8. код оператора, может быть в
// скобках и без, и с пробелами. Оставшиеся часть может быть с дефисами и пробелами
"use strict";

// let number = 5;
// const leftBorderWidth = 1; // переменную в const изменить нельзя

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name); 
// var name = 'Ivan';



// {
//     var result = 50; 
// }

// console.log(result);


//Следующий урок Типы данных

// const obj = { // это командой создали объект
//     name: "John",
//     age: 25,
//     IsMarried: false,
// };

// //console.log(obj.name); //Вывели только имя в объекте
// console.log(obj ["name"]); // Второй способ вывода из объекта перемен. но перв лучше.




// let arr = ['plump.png', 'orange.jpg', 6 ,'apple.bmp', {}, []]; // можем в массив вставить что угодно
// console.log(arr[1]) // Вывод отдельного массива



// СЛЕДУЮЩИЙ УРОК  ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

// const result = confirm("Ты тут?"); // ВОПРОСИТЕЛЬНОЕ ОКНО ДЛЯ ПОЛЬЗОВАТЕЛЯ
// console.log(result); // получаем булевое значение тру или фолс



// const answer = prompt("Вам есть 18?", "18"); // для экспловера всегда нужно ставить пустые "" после ,  . А если в эти ковычки вставлять значение, оно будет по дефолту в строке
// console.log(typeof(answer)); // если пишем typeof, Данная команда проверяет что это. (строка, цифра и т.д. и пишет это вместро ответа пользователя).



// const answers = []; // создали пустой массив

// answers[0] = prompt('Как ваше имя?', ''); // данными командами пользователь его заполняет
// answers[1] = prompt('Как ваше Фамилия', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// console.log(typeof(answers));




// СЛЕДУЮЩИЙ УРОК ИНТЕРПОЛЯЦИЯ

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`); // использовали интерполяцию, что бы каждый раз не писать + для добавления строки можно ставить $ и писать переменную и текст



// const user = "Ivan"; // Второй пример

// alert (`Привет, ${user}`);




// СЛЕДУЮЩИЙ УРОК ОПЕРАТОРЫ В JS


let incr = 10,
    decr = 10;

// incr++; // оператор инкримента т.е. увиличение на 1 данные две операцаии когда ставим ++ или -- после называется постфиксная
// decr--; // оператор дикримента т.е. уминьшение на 1

// ++incr; // операция будет такая же что и выше данные две операцаии когда ставим ++ или -- перед называется префиксная
// --decr; // операция будет такая же что и выше


console.log(++incr); // тут будет работать ++ т.к. префиксная форма записи сначала читает знак ++ а потом число
console.log(decr--); // так код работать не будет. т.к. сначала читает число а потом знак -- который уже не применится к числу т.к. оно уже выведено

console.log(5%2); // % показывает остаток от деления т.к. ответ будет 1

console.log(2*4 == 8); // = это присваивание == это сравнение. Если 8 поставить в '' так же будет true т.к. он сравнивает только значение.

console.log(2*4 === '8'); // === это строгое равенство. 8 является строкой и мы сравниваем его с числом поэтому выдаст false.

//&& это логический оператор И. Работает когда два или больше значения правда
// || это логический оператор или. работает когда одно значение правда

// const isChecked = true, // запитая позваляет продолжить задавать переменные константы
//       isClose = true;

// console.log(isChecked && isClose); // выдаст true т.к. checked И(&&) close равны

// console.log(isChecked || isClose); // выдаст так же true т.к. или checked или close со значение true. Если изменить одну из переменных на false так же будет true. если обе false
// // тогда значение будет false


// ! оператор отрецания

const isChecked = false, 
      isClose = false;


console.log(isChecked || !isClose); // выдаст true. т.к. close с помощью оператора ! меняет на значение true



console.log(2 + 2 * 2 != 8); // есть таблица приорететов знаков, тут как в матиметике сначала * потом +. МЫ ПОСТАВИЛИ ЗНАК != ЭТО ЗНАЧИТ НЕ РАВЕН ПОЭТОМУ ЗНАЧЕНИЕ TRUE!

console.log(2 + 2 * 2 !== '6'); // знак !== это строгое не равенсво. хоть по формуле должно быть false т.к. 6 должно быть НЕ РАВНО 6, но 6 в '' это строка и а сравниваем с числом




// СЛЕДУЮЩИЙ УРОК. УЧИМСЯ РАБОТАТЬ С СИСТЕМОЙ GIT И СЕРВИСОМ GITHUB

// git init  - команда для терминала что бы git начал следить за папкой. Первый раз этой папке появится скрытая папка git

// git config --local user.name "Kirill"    - указали что пользователь локальный и дали имя Kirill. Что бы распростронялись настройки на весть комп,а не на папку пишем global
// git config --local user.email Saskke@yandex.ru   - указали что пользователь локальный и присвоили емаил Saskke@yandex.ru тут так же global
//после этих двух команд в папке git скрытой появится файл конфиг где будут указанны эти данные

// git status  - пишем что бы посмотреть статус гита. После git commit слежка за гитами пропадет т.к. git сделал контрольные точки


// git add -A   - добавляем все файлы в папке в индекс репозитория -A значит all то есть все. этой командой закрепляем файлы для commit


// git commit -a -m"first commit"  - Данной командой добавили файлы и закоментировали их. -a значит так же all и m messeg то есть сообщение


// git log  - посмотреть инфу по commit когда и какие были


// git remote add origin https://github.com/Saskke/(название проекта на git) --этой командой мы свизали наш локальный репозиторий (папку) с github
// git push -u origin main  -- этой командой мы отправляем файлы на github


//урок
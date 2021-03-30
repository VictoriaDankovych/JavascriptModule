// Створити зміннні. Вивести в консоль, алерт, док
// let a= 'hello';
// let b= 'owu';
// let c= 'com';
// let e= 'ua';
// let f= 1;
// let g= 10;
// let h= -999;
// let i= 123;
// let j= 3.14;
// let k= 2.7;
// let l= 16;
// let m= true;
// let n= false;
// alert(a);
// alert(b);
// alert(c);
// alert(e);
// console.log(a);
// console.log(l);
// // document.write(h);
// // // Переприсвоїти змінні
// a='hi';
// console.log(a);
// document.write(a);
// alert(a);
// 3 змінні промпт
// let name = prompt('enter name');
// let fn = prompt('fathers name');
// let sn = prompt('surname');
// let age = prompt('age');
//
// console.log(name +' '+ fn+' '+ sn+' ' + age);
// console.log(name,fn,sn,age);
// // console.log(name+fn+sn+age);
// let person =(name + fn + sn + age);
// console.log(`${name} ${fn} ${sn} ${age}`)
// console.log(person);

// let number1 = +prompt('number 1');
// let number2 = +prompt('number 2');
// let number3 = +prompt('number 3');
// console.log(number1,number2,number3)

// let number1 = parseInt(prompt('number 1'));
// let number3 = parseInt(prompt('number 3'));
// let number5 = parseInt(prompt('number 5'));
// console.log(number1+number3+number5 )
// let num1= parseFloat(prompt('number 1'));
// let num2= parseFloat(prompt('number 1'));
// let num3= parseFloat(prompt('number 1'));
// let num4= parseFloat(prompt('number 1'));
// let result=num1+num2+num3+num4
// console.log(result);

// let float = parseFloat(prompt('enter float'));
// let float2 = parseFloat(prompt('enter float'));
// let float3 = parseFloat(prompt('enter float'));
// let res = float+float2+float3;
// console.log(Math.round(res));

// let num = prompt();
// let pow = prompt('pow');
// let res = Math.pow(num,pow);
// console.log(res);
// let ab = 100;
// let bc = '100';
// let cd = true;
// console.log(typeof bc, ab, cd)
// let p= 5<6;
// console.log(p);
// let rrr= 5>6;
// console.log(rrr);
// let t = 5===6;
// console.log(t);
// let tt = 5==6;
// console.log(tt);
// let ll = 10===10;
// console.log(ll);
// let lll = 10>=10;
// console.log(lll);
// let ppp = 10!==10;
// console.log(ppp);
// let ppq = 10<=10;
// console.log(ppq);
// let kdb = 123==='123';
// console.log(kdb);
// let kdk = 123=='123';
// console.log(kdk);
// console.log(132>100 && 45<12);
// console.log(34>33 && 23<90);
// console.log(99>100 && 45>12);
// console.log(132>100 || 45<12);
// console.log(111>11 || 45<111);
// console.log(111>11 || 45<111) && (132>100 || 45<12);
// console.log(111>11 || 45<111) || (132>100 || 45<12);
// console.log(132>100 && 45<12) && (132>100 || 45<12);
// console.log(111>11 || 45<111) || (99>100 && 45>12);
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'undefined');
// console.log(!!'null');
// console.log(!!(3/'owu'));
// console.log((111>11||45<111)||(!!"0"));
// console.log((!!111==!11||45<111)&&(99>100&&45>12));
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str ='Привіт';
// let num =123;
// let flag =true;
// let txt ='true';
// console.log(typeof str,typeof num, typeof flag,typeof txt);
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
// let a1= 15+15+4;
// console.log(a1);
// a1= 100-66;
// console.log(a1);
// a1=510/15;
// console.log(a1);
// let a2= 6+6;
// a2= 2*6;
// a2= 24/2;
// console.log(a2,a2,a2);
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// let a6= 5%3;
// let a7= 3%5;
// let a8= 5+'3';
// let a9= '5'+'3';
// let a10= 75+'kg';
// console.log(a6, a7, a8, a9, a10)


// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

// let height= 23;.
// let width= 10;
// let s= 23*10;
// console.log(s);
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let height= 10;
// let dC= 4;
// let v= 3.14*Math.pow(4,2)*10
// console.log(v);
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n= 3;
// let m=4
// let k2= Math.pow(n,2)+Math.pow(m,2)
// console.log(Math.sqrt(k2));....
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str ='Hello world'
// console.log(str);
// alert(str);
// document.write(str);
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let name= 'DVV';
// let age= '22';
// let hobby= 'programming';
// alert(name +'\n' + age + '\n' + hobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1= 'Who';
// let str2= 'are';
// let str3='you?';
// let concatenation= (str1  + '\n' + str2 +  '\n' +   str3 );
// let concatenation2= (`${str1}   ${str2}  ${str3}`);
// alert(concatenation);
// console.log(concatenation2);
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"));
// console.log( parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(  parseInt("Вася"));
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let str = prompt('2+3');
// alert(str);
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt('Enter name');
// let age = prompt('Enter age');
// let res = 'Доброго вечера Иван Иванов, мои поздравления что вам 32'
// alert(res);


// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = prompt("Enter number1");
// let b = prompt("Enter number2");
// let c = prompt("Enter number3");
//
// if (a < b && a < c) {
//     if (b < c) {
//         console.log(a, b, c);
//     } else {
//         console.log(a, c, b);
//     }
// } else if (b < a && b < c) {
//     if (a < c) {
//         console.log(b, a, c);
//     } else {
//         console.log(b, c, a);
//     }
// } else if (c < b && c < a) {
//     if (a < b) {
//         console.log(c, a, b);
//     } else {
//         console.log(c, b, a);
//     }
// }
// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt('Enter color');
// if (color ==='green') {
//     alert('Go')
// }   else {
//     if (color === 'yellow') {
//         alert('Wait')
//     }
//     else {
//     if (color === 'red'){
//     alert('Stop')
// }
//     else {
//         alert('Act on your own');
//     }}}
// const color = prompt('Enter color');
// switch (color) {
//     case 'green':
//         alert('Go');
//         break;
//     case 'yellow':
//         alert('Wait');
//         break;
//     case 'red':
//      alert('Stop');
//         break;
//     default:
//          alert('Act on your own');
// }
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt('Enter color');
// let isRoadClear = confirm('Is the road clear?')
//
// if (color === 'green' && isRoadClear === true) {
//     alert('Go')
// } else  if (color === 'green' && isRoadClear === false) {
//         alert('Wait until they go');
//     }  else if (color === 'yellow' && isRoadClear === false) {
//     alert('Wait');
// } else if (color === 'yellow' && isRoadClear === true) {
//         alert('Wait as well')
// }  else if (color === 'red' && isRoadClear === true) {
//     alert('Dont go');
// } else if (color === 'red' && isRoadClear === false) {
//         alert('Stop and wait')
//     } else {
//         alert('Do what you want')
// }


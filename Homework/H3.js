// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//
// let textCont = document.getElementById('content');
// console.log(textCont);
//     b) отримує текст з блоку з id "rules"
// let textRules = document.getElementById('rules');
// console.log(textRules);
//     c) замініть текст параграфа з id 'content' на будь-який інший
// textCont.innerText = 'Hello world';
//     d) замініть текст параграфа з id 'rules' на будь-який інший
// textRules.innerHTML= '<p>Lorem ipsum dolor.</p>';
//     e) змініть кожному елементу колір фону на червоний
// textCont.style.backgroundColor= 'red';
//     f) змініть кожному елементу колір тексту на синій
// textRules.style.color = 'blue';
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classRules = document.getElementsByClassName('fc bp');
// console.log(classRules);
//     h) отримати всі елементи з класом fc_rules
// let classFc = document.getElementsByClassName('fc_rules');
// console.log(classFc);
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let i = 0; i < classFc.length; i++) {
//     classFc[i].style.color = 'green';
// }
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];
// for (let i = 0; i < users.length-1; i++) {
//     const usersDiv = document.createElement('div');
// usersDiv.innerHTML = `
// My name is ${users[i].name}<br>
// I am ${users[i].age}  years old<br>
// Married ${users[i].status} <br>`
// document.body.appendChild(usersDiv);
//     console.log(usersDiv);
//
// const address = document.createElement('div')
//     address.innerHTML = ` City: ${users[i].address.city} <br>
//   Country: ${users[i].address.country} <br>
//   Street: ${users[i].address.street} <br>
//   HouseNumber: ${users[i].address.houseNumber} `
//
//    usersDiv.appendChild(address);
//     console.log(address);
// }

//
// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let mainHeader = document.getElementById('main_header');
// mainHeader.innerText = "Feb-2021";
// mainHeader.style.color = 'red';
// console.log(mainHeader);
// //     b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul')
// for (let i = 0; i < ul.length; i++) {
//     ul[i].style.width= '400px';
//     console.log(ul[i]);}
// //     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (let i = 0; i < linkList.length; i++) {
//     linkList[i].style.width= '50%';
//     console.log(linkList[i]);
// }
// //     d) отримує текст який зберігається в елементі з класом listElement2
// let linkListText = document.getElementsByClassName('listElement2');
// console.log(linkListText);

//     e) отримує всі елементи li та змінює ім колір фону на сірий
// let lis = document.getElementsByTagName('li')
// for (let i = 0; i < lis.length; i++) {
//     lis[i].style.backgroundColor = 'grey';
//     console.log(lis[i]);
//
// }
//     f) отримує всі елементи 'a' та додає їм клас anchor
// let as = document.getElementsByTagName('a');
// for (let i = 0; i < as.length; i++) {
//     as[i].classList.add('anchor')
// console.log(as[i])
// }

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//     змінює йому розмір тексту на 40 пікселів
// let as = document.getElementsByTagName('a');
// const myConst = 'link3';
// for (const element of as) {
//     if( element.innerText === myConst){
//         element.style.fontSize = '40px'
//
//     }
//
// }


//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let as = document.getElementsByTagName('a');
for (let i = 0; i < as.length; i++)
{

    as[i].classList.add('element_XXX')
    console.log(as[i]);
}



//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub = document.getElementsByClassName('sub-header')
// for (let i = 0; i < sub.length; i++) {
//     prompt(sub[i].style.backgroundColor= 'red');
// }


//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
//     Колір отримати з prompt()
// let sub2 = document.getElementsByClassName('sub-header')
// const el = 'content 2 segment';
// for (let i = 0; i < sub2.length; i++){
//     if (sub2[i].innerText === el){
//    prompt(sub2[i].style.color= 'red')
//     }
// }


//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let cont = document.getElementsByClassName('content_1')
// for (let i = 0; i < cont.length; i++) {
//
//  prompt(cont[i].innerHTML='Hello world')
// }

//     l) отримати елементи p та змінити їм padding на 20px

// let pes = document.getElementsByTagName('p')
// for (let i = 0; i < pes.length; i++) {
//    pes[i].style.padding = '20px'
//     console.log(pes);
// }


//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let text2 = document.getElementsByClassName('text2')
// for (let i = 0; i < text2.length; i++) {
//     text2[i].innerHTML='Feb-22'
//     console.log(text2);
// }
//
// 2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				}
// 			];
// for (let i = 0; i < rules.length; i++) {
//     let wrap = document.createElement('div')
//     let h2 = document.createElement('h2')
//     let p = document.createElement('p')
//     h2.innerText = `${rules[i].title}`
//     p.innerText = `${rules[i].body}`
//  wrap.appendChild(h2)
//     wrap.appendChild(p)
// document.body.appendChild(wrap)
//     console.log(wrap)
// }


// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .

// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
// for (const users of usersWithId) {
//     for (const cities of citiesWithId) {
//         if (users.id === cities.user_id)
//             users.address = cities;
//
//     }
//     console.log(usersWithId)


/* - Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text". */
let div = document.createElement('div')
document.body.appendChild(div)
let p = document.createElement('p')

div.appendChild(p)
p.innerText= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cum?'
p.setAttribute('id', 'text');
console.log(div);
let buttonP = document.createElement('input')
buttonP.setAttribute('type','button')
buttonP.setAttribute('value','')
buttonP.setAttribute('name','buttonP')
div.appendChild(buttonP)
console.log(buttonP);
buttonP.onclick=()=>{
   p.hidden
    ? p.hidden = false
       :p.hidden=true
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

buttonP.onclick=()=>{
   buttonP.hidden
    ? buttonP.hidden = false
       :buttonP.hidden=true
}

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement('form')
document.body.appendChild(form)
let input = document.createElement('input')
input.setAttribute('type','text')
input.setAttribute('value','')
input.setAttribute('name','enterAge')
form.appendChild(input)
let commitButton = document.createElement('input')
commitButton.setAttribute('type','submit')
commitButton.setAttribute('value','OK')
commitButton.setAttribute('name','submitOk')
form.appendChild(commitButton);
console.log(form);
form.submitOk.onclick = (ev)=>{
    ev.preventDefault()
 if(form.enterAge.value > 18) {
       console.log('You are welcome')
   }
   else{
       console.log('Not welcome')
   }
}
// - Создайте меню, которое раскрывается/сворачивается при кликe
let menu = document.getElementById('menu')
let submenu = document.getElementById('submenu')
console.log(menu,submenu);
menu.onclick=()=>{
    submenu.hidden
    ? submenu.hidden = false
        :submenu.hidden = true
}
// let click = false;
// menu.onclick=(ev) => {
//     if (click){
//         submenu.style.display='block';
//         click = false;
//     }else {
//         submenu.style.display ='none'
//         click = true;
//     }
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments =[ {
    title: 'lorem',
    body: 'lorem ipsum dolo sit ameti'
},{
    title : 'lorem ipsum',
    body:'hello world'
},
    {
         title : 'Hello okten',
    body:'Nice to see you'
    }];
const div = document.createElement('div')
comments.forEach(element=> {
    let div2 = document.createElement('h1')
    const div3 = document.createElement('p')
    const buttonCom = document.createElement('button')

    div2.innerText = element.title
    div3.innerText = element.body
    document.body.appendChild(div);
   div.appendChild(div2);
   div.appendChild(div3)
    div.appendChild(buttonCom)
    buttonCom.onclick=()=>{
       div3.hidden
        ?div3.hidden = false
           :div3.hidden = true
    }

})
console.log(div);

// - Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.createElement('form')
document.body.appendChild(form1)
let form2 = document.createElement('form')
document.body.appendChild(form2)
let input1 = document.createElement('input')
input1.setAttribute('name','myInput1')
form1.appendChild(input1)
let input2 = document.createElement('input')
input2.setAttribute('name','myInput2')
form2.appendChild(input2)
let inButton = document.createElement('input')
inButton.setAttribute('type','submit')
inButton.setAttribute('value','Ok')
document.body.appendChild(inButton)
inButton.onclick=()=>{
    console.log(form1.myInput1.value)
    console.log(form2.myInput2.value)
}
// - Створити функцію, яка генерує таблицю.
//   Перший аргумент визначає кількість строк.
//   Другий параметр визначає кліькіть ячеєк в кожній строці.
//   Третій параметр визначає елемент в який потрібно таблицю додати.

function createTable( lines,column,elements) {
    const table = document.createElement('table');
    for (let i = 0; i < lines; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < column; j++) {
            const td = document.createElement('td');
            td.style.border = 'solid'
            td.innerHTML = `${i}  ${j}`

            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table)
}
createTable(4,4)

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
let images = [
    {id:1,
        address: 'images/Image_1.jpeg'
    },
    {
      id:2,
      address: 'images/iamge_3.jpeg'
    },
    {
        id:3,
        address:'images/image_2.jpeg'
    }
]
const img = document.createElement('img')
const butt1 = document.createElement('button')
const butt2 = document.createElement('button')

butt1.innerText = 'Left';
butt2.innerText='Right';
let index = 0;
img.width = 300;
img.src = images[index].address
document.body.appendChild(img)
document.body.appendChild(butt1)
document.body.appendChild(butt2)
butt1.onclick=()=>{
    index -1 < 0
    ? index = images.length - 1
        : index = index-1

    img.src = images[index].address
}
butt2.onclick=()=>{
    index +1>images.length
    ? index = 0
        : index = index+1

    img.src = images[index].address
}
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let badWords = ['bad','ugly','owful']
let badInput = document.createElement('input')

let btnOkey = document.createElement('button')
btnOkey.innerText = 'Ok';
document.body.appendChild(btnOkey)
document.body.appendChild(badInput);
btnOkey.onclick=(ev)=>{
    ev.preventDefault()
    for (const item of badWords) {
      if( badInput.value.includes(item) === true ){
       alert('Bad boy')
    }

    }
}
// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
function funk(array) {
    const main = document.createElement('div')
    array.forEach(item => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML=JSON.stringify(item)
        main.appendChild(newDiv)
    })
    return main
}

let div = document.createElement('div')
document.body.appendChild(div)
div.appendChild(funk(usersWithAddress))



let check1 =document.createElement('input')
let check2 =document.createElement('input')
let check3 =document.createElement('input')
check1.type = 'checkbox'
check2.type = 'checkbox'
check3.type = 'checkbox'
let label1 =document.createElement('label')
let label2 =document.createElement('label')
let label3 =document.createElement('label')
let newButton = document.createElement('button')
newButton.setAttribute('value','submit')
newButton.innerText='OK'
label1.innerText = 'Not married'
label2.innerText = 'Older 29'
label3.innerText = 'Kyiv'
div.appendChild(check1)
div.appendChild(label1)
div.appendChild(check2)
div.appendChild(label2)
div.appendChild(check3)
div.appendChild(label3)
div.appendChild(newButton)

newButton.onclick=(ev)=>{
    let arr = JSON.parse(JSON.stringify(usersWithAddress))
    if(check1.checked) arr = arr.filter(value=> !value.isMarried);
    if(check2.checked) arr = arr.filter(value=> value.age >= 29);
    if(check3.checked) arr = arr.filter(value=> value.address.city==='Kyiv');

    div.innerHTML = '';
    div.appendChild(funk(arr))
}
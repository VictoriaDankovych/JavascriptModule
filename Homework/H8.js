// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let saveData = document.getElementById('myText')
saveData.oninput = (ev) => {
    localStorage.setItem('saveData', ev.target.value)
}
saveData.value = localStorage.getItem('saveData')
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let formDataSave = document.getElementById('myForm')
//
// for (const tag of formDataSave) {
//     if(tag.type==='radio'){
//         let value = localStorage.getItem(tag.name)
//         if (tag.id === value){
//             tag.checked = true
//         }
//
//     }else if(tag.type === 'checkbox'){
//     let bool = localStorage.getItem(tag.name)
//     tag.checked = bool === 'true'
//     }
//
//     else{
//         tag.value = localStorage.getItem(tag.name)
//     }
// }
// formDataSave.oninput=({target:{type,name,value,checked,id}})=>{
// if (type === 'radio'){
//     localStorage.setItem(name,id)
// }
//     else if(type=== 'checkbox'){
//         localStorage.setItem(name,checked)
// }
//     else{
//         localStorage.setItem(name,value)
// }
//
// }
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let newArea = document.getElementById('newArea')
let saveMe = document.getElementById('save_me')
let back = document.getElementById('back')
let forward = document.getElementById('forward')


saveMe.onclick = (ev) => {
    localStorage.setItem(localStorage.length + 1, newArea.value)
}
back.onclick = () => {
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === newArea.value) {
                index = key;
            }
        }

    }
    if (index === '1') {
        return
    }
    newArea.value = localStorage.getItem(index - 1)
}

forward.onclick = () => {
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === newArea.value) {
                index = key;
            }
        }
    }
    if (index === localStorage.length.toString()) {
        return
    }
    newArea.value = localStorage.getItem(+index +1)
}
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта




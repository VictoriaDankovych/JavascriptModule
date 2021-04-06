// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select



// function Object(tagName, actions, arrayAttr = 'All basic attributes are available'){
//     this.tagName=tagName;
//     this.actions=actions;
//     this.arrayAttr=arrayAttr;
// }
// let a = new Object('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'}]);
// let div = new Object('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}])
// let h1 = new Object('<h1>', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня')
// let span = new Object('<span>', 'Тег <span> предназначен для определения строчных элементов документа')
// let input = new Object('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.я',[{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'},
// {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш'}])
// let form = new Object('<form>', 'Тег <form> устанавливает форму на веб-странице',[{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные'},{titleOfAttr: 'action',actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'}])
// let option = new Object('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',[{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка'},{titleOfAttr: 'label',actionOfAttr: 'Указание метки пункта списка'}])
// let select = new Object('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далеe',[{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},{titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'}])
// console.log(a,div,h1,span,input,form,option,select)

// -  Створити класс  для об'єкту який описує теги

// class NewObject {
//     constructor(tagName, actions, arrayAttr) {
//         this.tagName = tagName;
//         this.actions = actions;
//         this.arrayAttr = arrayAttr;
//     }
// }
// let a = new NewObject('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'}]);
// let div = new NewObject('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
// {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}])
// let h1 = new NewObject('<h1>', 'Tег <h1> представляет собой наиболее важный заголовок первого уровня')
// let span = new NewObject('<span>', 'Тег <span> предназначен для определения строчных элементов документа')
// let input = new NewObject('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.я',[{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'},
// {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш'}])
// let form = new NewObject('<form>', 'Тег <form> устанавливает форму на веб-странице',[{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные'},{titleOfAttr: 'action',actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'}])
// let option = new NewObject('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',[{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка'},{titleOfAttr: 'label',actionOfAttr: 'Указание метки пункта списка'}])
// let select = new NewObject('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далеe',[{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},{titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы'}])
// console.log(a,div,h1,span,input,form,option,select)


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     model: 'Audi',
//     producer: 'USA',
//     year: 2020,
//     maxSpeed: 220,
//     engineVolume: '2L',
//     drive: function (){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// },
//     info: function (){
//     console.log(`Model ${this.model},Producer ${this.producer},Year ${this.year},Maximum speed ${this.maxSpeed},Engine Volume ${this.engineVolume}`)
// },
//     increaseMaxSpeed:  function (newSpeed){
//     this.maxSpeed += newSpeed
// },
//     changeYear:  function (newValue){
//     this.year = newValue
// },
//     addDriver:  function (driver){
//     this.driver=driver
// }}
// car.drive();
// car.info();
// car.increaseMaxSpeed(60);
// car.changeYear();
// car.addDriver();
// console.log(car);

// Створити функцію-конструктор

// function CarInfo(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`Model ${this.model},Producer ${this.producer},Year ${this.year},Maximum speed ${this.maxSpeed},Engine Volume ${this.engineVolume}`)
//     }
//     this.increasedMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let audi = new CarInfo('audi', 'USA', 2020, 220,'2l')
// audi.drive();
// audi.info();
// audi.increasedMaxSpeed(90);
// audi.changeYear();
// audi.addDriver();
// console.log(audi);


// Створити клас
// class CarInfo{
//     constructor(model,producer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info(){
//         console.log(`Model ${this.model},Producer ${this.producer},Year ${this.year},Maximum speed ${this.maxSpeed},Engine Volume ${this.engineVolume}`)
//     }
//     increasedMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed
//     }
//     changeYear(newValue){
//         this.year = newValue
//     }
//     addDriver(driver){
//         this.driver= driver;
//     }
// }
// let audi = new CarInfo('audi', 'USA', 2020, 220,'2l')
// audi.drive();
// audi.info();
// audi.increasedMaxSpeed(120);
// audi.changeYear(2020);
// audi.addDriver([{name:'Vikky',age: 22}])
// console.log(audi);





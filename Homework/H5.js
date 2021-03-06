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


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Cinderella{
//     constructor(name,age,legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }
// class Prince {
//     constructor(name,age,foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
//
// }
// let prince = new Prince('Harold',22,39)
// let cinderella1 = new Cinderella('Vikky',20,37);
// let cinderella2 = new Cinderella('Iva',22,36);
// let cinderella3 = new Cinderella('Kate',21,35);
// let cinderella4 = new Cinderella('Kris',23,35.5);
// let cinderella5 = new Cinderella('Eva',22,37.5);
// let cinderella6 = new Cinderella('Gala',25,38);
// let cinderella7 = new Cinderella('Nata',24,38.5);
// let cinderella8 = new Cinderella('Olya',20,36.5);
// let cinderella9 = new Cinderella('Lesia',22,37.9);
// let cinderella10 = new Cinderella('Julia',21,39);

// let arr = [cinderella1,cinderella2,cinderella3,cinderella4,
// cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10]
// for (const arrayElement of arr) {
//             if(arrayElement.legSize === prince.foundShoe){
//                 console.log(arrayElement);}
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name, age, legSize){
//     this.name = name;
//     this.age = age;
//     this.legSize = legSize;
//
// }
// function Prince( name, age, foundShoe){
//     this.name = name;
//     this.age = age;
//     this.foundShoe = foundShoe;
// }
//
// let prince = new Prince('Harold',22,39)
// let cinderella1 = new Cinderella('Vikky',20,37);
// let cinderella2 = new Cinderella('Iva',22,36);
// let cinderella3 = new Cinderella('Kate',21,35);
// let cinderella4 = new Cinderella('Kris',23,35.5);
// let cinderella5 = new Cinderella('Eva',22,37.5);
// let cinderella6 = new Cinderella('Gala',25,38);
// let cinderella7 = new Cinderella('Nata',24,38.5);
// let cinderella8 = new Cinderella('Olya',20,36.5);
// let cinderella9 = new Cinderella('Lesia',22,37.9);
// let cinderella10 = new Cinderella('Julia',21,39);
// let arr = [cinderella1,cinderella2,cinderella3,cinderella4,
// cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10]
// for (const arrayElement of arr) {
//             if(arrayElement.legSize === prince.foundShoe){
//                 console.log(arrayElement)}}

// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// ===

class Computer{
    constructor(memory,capacity,name) {
        this.memory = memory;
        this.capacity = capacity;
        this.name = name;
    }
     turnIn(){
        console.log(`This computer ${this.name} is turned in`)}
}
let newComp = new Computer(300,30,'Asus')
console.log(newComp);
newComp.turnIn()
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Notebook extends Computer{
    constructor(memory,capacity,name,monitor) {
        super(memory,capacity,name);
        this.monitor = monitor;
        this.batteryRun = capacity/(monitor*memory);
    }

}
let newNote = new Notebook(400,50,'Acer',50)
newNote.turnIn()
console.log(newNote);
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години

class Ultrabook extends Notebook{
    constructor(memory,capacity,name,monitor,weight) {
        super(memory,capacity,name,monitor);
        this.weight = weight;
    }
turnIn(){
        if (this.weight > 2 && this.batteryRun < 4){
console.log(`Your computer ${this.name}is turned in`)
        }else {
            console.log(`Can not turn in because weight ${this.weight} and battery ${this.batteryRun} exceed allowed numbers`)
        }
}
}
let newUltra = new Ultrabook(2,200,'Lenovo',1,5)
newUltra.turnIn();
console.log(newUltra);
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

class basicPC extends Computer{
    constructor(memory,capacity,name,fps) {
        super(memory,capacity,name);
        this.fps = capacity/memory
    }
    gamesStart(gameName){
        console.log(`You are playing ${gameName} with ${this.fps} FSP`)
    }
    upgradeProcessor(persents) {
        if (persents <= 10) {
            this.capacity += (this.capacity*persents)/100
        }
        else{
            console.log('You can not increase capacity. Max value is 10%')
        }
    }
     upgradeMemory(sizeOfIncrease){
       if (sizeOfIncrease<=2){
           this.memory=(this.memory)*sizeOfIncrease
       }
       else {
           console.log('You can not reduce memory')
       }
}
}

let newPC = new basicPC(200, 30,'Vikky')
newPC.gamesStart('Sims');
newPC.upgradeProcessor(11);
newPC.upgradeMemory(3)
console.log(newPC);


// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamersPC extends basicPC{
    constructor(memory,capacity,name) {
        super(memory,capacity,name);
        this.fps=this.fps*2;
    }


   processorGameStart(game){
        if (game===1){
            this.capacity-=(this.capacity)*0.001
        }
   }
gameStartInf(){
        if (this.capacity<500 && this.memory<8)
        {
            console.log('Can not start this game')
        }
}
}
let newGame =  new GamersPC(4,20,'Me',0.5);
newGame.processorGameStart(1);
newGame.gameStartInf();
console.log(newGame);
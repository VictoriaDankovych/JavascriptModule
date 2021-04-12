// 1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого.

// let array = [23,43,1,2,3,27,5,56,65,21,67,7,87,18,23,42,34,435,56,32];

// let maxSort = array.sort((a,b)=>{
//     if  (a<b){
//         return -1
//     }
//
// })
// console.log(maxSort);

//  b) відсортувати його від більшого до меншого.
// let minSort = array.sort((a,b)=>{
//     if  (a>b){
//         return -1
//     }
//
// })
// console.log(minSort);
//  c) Відфілтрувати числа які є кратними 3.
// let krtThree = array.filter((value)=>{
//     return value % 3 === 0
// })
// console.log(krtThree);
// //  d) Відфілтрувати числа які є більшими за 10.
// let moreTen = array.filter((value)=>{
//     return value >= 10
// })
// console.log(moreTen);

//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let array = [23,43,1,2,3,27,5,56,65,21,67,7,87,18,23,42,34,435,56,32];
// array.forEach((value)=>{
//     document.write(value)
//     document.write('<br>')
// })

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.

// array.map(value => console.log(value*3))
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let reduce = array.reduce((acc,currentValue)=>{;
//     return acc + currentValue
//
// })
// console.log(reduce);
//

// 2) Створити масив з 20 стрічок та:
//  a) Відсортувати його в алфавітному порядку
// let str = ['c','e','g','h','i','a','j','f','k','l','b','m','n','o','p','d','q','r','s','t']
// str.sort((a,b)=>{
//     if (a<b){
//         return -1
//     }
// });
// console.log(str);
//  b) Відсортувати в зворотньому порядку
// str.sort((a,b)=>{
//     if (b<a){
//         return -1
//     }
// });
// console.log(str);
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let string = ['Victoria','kris','kate','nan','you','me']
// string.filter((value)=>{
//     if (value.length>=4){
//         console.log(value)
//     }
// })
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// string.forEach((value,index,arr)=>{
//     arr[index]=`Sam says ${value}`
//     console.log(string);
// })

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
//  users.sort((a, b) => a.age - b.age);
// console.log(users);
//  users.sort((a, b) => b.age - a.age);
// console.log(users);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((name1,name2) => name1.name.length -name2.name.length)
// console.log(users)
// users.sort((name1,name2) => name2.name.length -name1.name.length)
// console.log(users)

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)

// const usersId = users.map((user) => {
//     return {id: Math.floor(Math.random()* (2000-10))+10, name: user.name, age: user.age, isMarried: user.isMarried};
// });
// console.log(usersId)
// d) відсортувати його за індентифікатором
// usersId.sort((user1,user2)=>user1.id - user2.id)
// console.log(usersId);
// usersId.sort((user1,user2)=>user2.id - user1.id)
// console.log(usersId);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
// let flat = users.reduce((acc,value)=>{
//     if (value.isMarried===true){
//         value.flat = true;
//         acc.push(value)
//     }
//     return acc
// },[])
// console.log(flat);
// console.log(JSON.stringify(users))

// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let volumeCar = cars.filter((value) => {
//     return value.volume>3
//
// })
// console.log(volumeCar)
// - двигун = 2л
// let engineCar = cars.filter((value) => {
//     return value.volume===2
//
// })
// console.log(engineCar)
// - виробник мерс
// let producerCar = cars.filter((value) => {
//     return value.producer==='mercedes'
//
// })
// console.log(producerCar)
// - двигун більше 3х літрів + виробник мерседес
// let mers = cars.filter((value) => {
//     return value.producer==='mercedes'&& value.volume>=3
//
// })
// console.log(mers)
// - двигун більше 3х літрів + виробник субару
// let subaru = cars.filter((value) => {
//     return value.producer==='subaru'&& value.volume>=3
//
// })
// console.log(subaru)
// - сили більше ніж 300
// let power = cars.filter((value) => {
//     return value.power>=300
//
// })
// console.log(power)
// - сили більше ніж 300 + виробник субару
// let powerSubaru = cars.filter((value) => {
//     return value.power>=300 && value.producer==='subaru'
//
// })
// console.log(powerSubaru)
// - мотор серіі ej
// let engine = cars.filter((value) => {
//     return value.engine.startsWith('ej')
// })
// console.log(engine)
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let powerSubaruEngine = cars.filter((value) => {
//     return value.engine.startsWith('ej') && value.producer==='subaru'&& value.power >300
// })
// console.log(powerSubaruEngine)
// - двигун меньше 3х літрів + виробник мерседес
// let lessVolume = cars.filter((value) => {
//     return value.volume<3 && value.producer==='mercedes'
// })
// console.log(lessVolume)
// - двигун більше 2л + сили більше 250
// let enginePower = cars.filter((value) => {
//     return value.volume>2 && value.power>250
// })
// console.log(enginePower)
// - сили більше 250  + виробник бмв
// let powerProducer = cars.filter((value) => {
//     return value.power>250 && value.producer==='bmw'
// })
// console.log(powerProducer)

// - взять слдующий массив
// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// -- Відсортувати їх по ID
// let idsFromMin = usersWithAddress.sort((a,b)=>a.id - b.id
//
// )
// console.log(idsFromMin);

// -- Відсортувати їх по ID в зворотньому порядку
// let idsFromMax = usersWithAddress.sort((a,b)=>b.id - a.id
//
// )
// console.log(idsFromMax);
// -- Відсортувати по віку
// let ageFromMin = usersWithAddress.sort((a,b)=>a.age - b.age
//
// )
// console.log(ageFromMin);
// -- Відсортувати по віку в зворотньому порядку
// let ageFromMax = usersWithAddress.sort((a,b)=>b.age - a.age
// )
// console.log(ageFromMax);
// -- Відсорутвати по імені
// let sortName = usersWithAddress.sort((a,b)=> {
//         if (a.name > b.name) {
//             return 1
//         }
//         else {
//             return -1
//         }
//     })
//  console.log(sortName);
// -- Відсорутвати по назві вулиці



// -- Відсорутвати по номеру будинку
// let houseNum = usersWithAddress.sort((a,b)=>a.address.number-b.address.number)
// console.log(houseNum);
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let youngerThan = usersWithAddress.filter((value) => value.age<30)
// console.log(youngerThan)
// -- Залишити тільки одружених
// let married = usersWithAddress.filter((value) => value.isMarried===true)
// console.log(married);
// -- Залишити тільки одружених, які молодні за 30
// let marriedAndYoung = usersWithAddress.filter((value) => value.isMarried===true && value.age<30)
// console.log(marriedAndYoung);
// -- Залишити лише тих, в кого парні номери будинків.
// let houseNumbers = usersWithAddress.filter((value) => {
//     if (value.address.number%2===0){
//         return value
//     }
// })
// console.log(houseNumbers);
// -- Порахувати загальний вік всіх людей. (reduce)
//
// let generalAge = usersWithAddress.reduce((acc,value)=>{
//    return acc + value.age
// },0)
// console.log(generalAge);
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let getChild = usersWithAddress.reduce((acc,value)=>{
//     if (value.isMarried && value.age>30){
//         value.child =true;
//         acc.push(value)
//
//     }
//     return acc
// },[])
// console.log(getChild);

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

class auto {
    constructor(model,power,owner,price,year) {
        this.model = model;
        this.power = power;
        this.owner = owner;
        this.price = price;
        this.year = year;

    }
repair(){
       this.power+= this.power * 0.1
}
newDriver(drive){
        this.owner = drive;
}
newPrice(){
        this.price+=this.price* 0.05
}
}
class owner{
    constructor(name,age,experience) {
        this.name=name;
        this.age=age;
        this.experience=experience;
    }

    trainingCourses(){
        this.experience+=1
    }
}
// Створити не менше 7 та не більше 20 машинок.
let toyota = new auto('toyota',200,'Nik',1000,2000)
let bmw = new auto('bmw',300,'Vik',2000,2010)
let subaru = new auto('subaru',250,'Lik',1700,2012)
let opel = new auto('opel',140,'Kik',3800,2013)
let mers = new auto('mers',500,'Mik',15000,2015)
let lambo = new auto('lambo',200,'Tik',8000,2020)
let citroen = new auto('citroen',400,'Sik',4000,2019)
let kia = new auto('kia',800,'Rik',5000,2021)

let nik = new owner('Nik',22,2)
let vik = new owner('Vik',23,5)
let lik = new owner('Lik',35,7)
let kik = new owner('Kik',40,10)
let mik = new owner('Mik',19,1)
let tik = new owner('Tik',20,2)
let sik = new owner('Sik',23,3)
let rik = new owner('Rik',26,6)

bmw.repair();
bmw.newDriver('Katya');
opel.repair();
opel.newDriver('Olya');
lambo.repair();
lambo.newDriver('Mike');
kia.repair();
kia.newDriver('Ostin');

let cars = [toyota,bmw,subaru,opel,mers,lambo,citroen,kia];
console.log(cars);


for (let i = 0; i < cars.length; i=i+2) {
    cars[i].repair();
    cars[i].newPrice()

}


let drivers=[nik,vik,lik,kik,mik,tik,sik,rik]

    drivers.forEach((driver) => {
    if (driver.age > 25 && driver.experience < 5) {
        driver.trainingCourses();
    }
});

console.log(cars);
console.log(drivers);
const price =cars.reduce((price, car) => price += car.price, 0);
console.log(price);



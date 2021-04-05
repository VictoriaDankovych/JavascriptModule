//  1) створити функцію яка приймає масив та виводить його
// let array =[1,34,55,67,98]
// function funk(arr) {
//     console.log(arr)
// }
// funk(array)
// funk(array)
// funk(array)
// function ff(arr) {
//     console.log(arr)
// }
// ff([1,2,3,4,5,5,6,6])
// ff([1,2,3,4,5,5,6,6])
// ff([1,2,3,4,5,5,6,6])
//
//


// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попередню функцію.

// function myFunk(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.random())
//         }
//     console.log(arr);
// }
//     myFunk(10);

// function myFunk(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.random())
//         }
//
//  return arr;
// }
//    let myFunk1 = myFunk(10);
// funk(myFunk1);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function returnMin (a,b,c) {
//     let min;
//     let max;
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= a && c <= b) min = c;
//     console.log('min', min);
//     return min
// }
// let resultMin = returnMin(54,87,98);
// console.log(resultMin);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function returnMax (a,b,c) {
//     let min;
//     let max;
//     if (a >= b && a >= c) max = a;
//     if (b >= a && b >= c) max = b;
//     if (c >= a && c >= b) max = c;
//     console.log('max', max);
//     return max
// }
// let resultMax = returnMax(54,87,98);
// console.log(resultMax);
// 5) створити функцію яка повертає найбільше число з масиву

// function maximum (length =[]) {
//     let max = length[0];
//     for (let i = 0; i < length.length; i++) {
//         if (length[i]> max ){
//             max = length[i]
//         }
//     }
// return max
//     }
// let numbers3 = maximum([65,776,878]);
// console.log(numbers3);
// 6) створити функцію яка повертає найменьше число з масиву
// function minimum (length =[]) {
//     let min = length[0];
//     for (let i = 0; i < length.length; i++) {
//         if (length[i]< min ){
//             min = length[i]
//         }
//     }
// return min
//     }
// let numbers = minimum([65,776,878,45,1,]);
// console.log(numbers);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
// function myFf(arr=[]){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//          sum = sum + arr[i]
//
//     }
//     return sum
// }
// let myFf1res = myFf([23, 34, 45, 54]);
// console.log(myFf1res)
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function myFun(arr=[]){
//     let sum = 0;
//     let res;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//         res = sum / arr.length
//
//     }
//     return res
// }
// let myFunRes = myFun([23, 34, 45, 54]);
// console.log(myFunRes)

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let keys;
function objectFunk(arrayOb){

    for (let i = 0; i < arrayOb.length; i++) {
         keys = Object.keys(arrayOb[i]);
    }
    return keys
}
let myObject = objectFunk([{name: 'Dima', age: 13}] );
console.log(myObject)



// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let values;
function objectFunkt(arrayOb){

    for (let i = 0; i < arrayOb.length; i++) {
         values = Object.values(arrayOb[i]);
    }
    return values
}
let myObject2 = objectFunkt([{name: 'Dima', age: 13}, ] );
console.log(myObject2);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// function fff(arr1,arr2){
//     let res = [];
//     for (let i = 0; i < arr1.length; i++) {
//         res.push(arr1[i]+arr2[i])
//     }
//     return res
// }
// let newF = fff([1,2,3,4],[2,3,4,5]);
// console.log(newF);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function returnMyFunk(){
//     console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//
//         if (item > max) max = item;
//         if (item < min) min = item
//     }
//     console.log(max, 'max');
//     return min
// }
// let minimum = returnMyFunk(121,234,54,56565,76,676,76);
// console.log(minimum, 'min');

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
//
//
function mixFunct(arrayOb) {
    console.log(arrayOb);
    return arrayOb

}

let values;
let keys;
let mix;

function keysValues(keysArr, valuesArr) {
    values = Object.values();
    keys = Object.keys()
    mix = Object.values() || Object.keys()

    return mixFunct([])

}
mixFunct()


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = [9,8,0,4]
// function change (arr,index){
//     let array = [...arr]
//     if(index<array.length-1) {
//         let temp = array[index];
//         array[index] = array[index + 1];
//         array[index + 1] = temp;
//     }
//    return array;
// }
// let change1 = change(arr,1);
// console.log(change1);


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function arrayNull(arr) {
// let zero = [];
// let number = [];
//     for (const numberElement of arr) {
//         if (numberElement === 0) {
//             zero.push(0);
//         }else{
//             number.push(numberElement)
//         }
//     }
//       return number.concat(zero)
// }



// console.log(arrayNull([1,0,6,0,3]));
// console.log(arrayNull([0,1,2,3,4]));
// console.log(arrayNull([0,0,1,0]));
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// n1= n1.trim();
// console.log(n1);
// let n2 = '    Ron       Whisley      '
// console.log(n2);
// let n3 = '    Hermione       Granger      '
// console.log(n3);


// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//
// function norma(name){
//     for (let i = 0; i < name.length; i++) {
//         name = name.replaceAll('  ', '')
//     }
// return name
// }
// let normaNew = norma('    Harry       Potter      ');
// let normaNew1 = norma('    Ron       Whisley      ');
// let normaNew2 = norma('    Hermione       Granger      ');
// console.log(normaNew);
// console.log(normaNew1);
// console.log(normaNew2);




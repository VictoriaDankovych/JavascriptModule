// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr = [23, 55, 6, 0, 1]
// console.log(arr);
// let arr = ['Hello', 'My', 'Name', 'Is', 'Victoria'];
// console.log(arr);
// let arr = ['Hello', 'I am', 22, 'Years', true];
// console.log(arr);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr=[];
// arr [4]= 'Viky';
// arr [3]= 22;
// arr [0] = true;
// arr [1] = 'Like sport'
// console.log(arr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for ( let i= 0; i<10; i++){
//     document.write("<div> Hello </div>")}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//  for ( let i= 0; i<10; i++){
//  document.write("<div> Hello: "+i+" </div>")}
//  for ( let i= 0; i<10; i++){
//     document.write(`<div> Hello: ${i} </div>`)}
// for ( let i= 0; i<10; i++){
//     document.write("<div> Hello</div>", i)}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<20){
//    document.write("<h1> Hello </h1>");
//    i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<20){
//     document.write("<h1>Hello: "+i+" </h1>")
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrNum =[10, 20, 20, 40, 50, 60, 70, 80, 90, 100]
// for (let i = 0; i<arrNum.length; i++){
//     console.log(arrNum[i])
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrStr =['Hello', 'My', 'Name', 'Is', 'Victoria','Hello', 'My', 'Name', 'Is', 'Victoria']
// for (let i = 0; i<arrStr.length; i++){
//     console.log(arrStr[i])};
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrMix =['Hello', 'I am', 22, 'Years', true, 'Hello', 'I am', 22, 'Years', true];
// for (let i = 0; i<arrMix.length; i++){
//     console.log(arrMix[i])};

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['Hello', 'I am', 22, 'Years', true, 'Hello', 'I am', 22, 'Years', true];
// for (let i = 0; i<10; i++){
//     if (typeof arr [i] ==='boolean') {
//         console.log(arr[i])
//     } else {
//     }}

//  let arr = ['Hello', 'I am', 22, 'Years', true, 'Hello', 'I am', 22, 'Years', true];
// for (let i = 0; i<10; i++){
//     if (typeof arr [i] ==='number') {
//         console.log(arr[i])
//     } else {
//     }}
//  let arr = ['Hello', 'I am', 22, 'Years', true, 'Hello', 'I am', 22, 'Years', true];
// for (let i = 0; i<10; i++){
//     if (typeof arr [i] ==='string') {
//         console.log(arr[i])
//     } else {
//     }}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let emptyArr = [];
// emptyArr[0]= 23;
// emptyArr[1]= 'Hello';
// emptyArr[2]= NaN;
// emptyArr[3]= undefined;
// emptyArr[4]= 'Hello world';
// emptyArr[5]=998;
// emptyArr[6]= '87';
// emptyArr[7]= true;
// emptyArr[8]= false;
// emptyArr[9]= 'true';
// for (let i=0; i<emptyArr.length; i++){
//     console.log(emptyArr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i<10; i++){
//     console.log('step', i)
//     document.write("step: "+i+" <br/>")
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i++){
//     console.log('step:', i)
//     document.write("step: "+i+" <br/>")
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<200; i=i+2){
//     console.log('step:', i)
//     document.write("step: "+i+" <br/>")
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i<100; i++){
//    if (i%2 ===0 ){
//        console.log('step:', i);
//        document.write("step: " + i + " <br/>");
//    }}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i<100; i++){
//    if (i%2 !== 0 ){
//        console.log('step:', i);
//        document.write("step: " + i + " <br/>");
//    }}
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let sec = 0;
// let min = 0;
// const count = 59;
// for (let i = 0; i <= count; i++){
//     console.log('min :', min++);
//     for (let i = 0; i <= count; i++){
//         console.log('sec :', sec++);
//     }
//     sec = 0;
//     if (min === 2){
//         break
//     }
// }



// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let hour = 0; hour < 3; hour++) {
    for (let min = 0; min < 60; min++) {
        for (let sec = 0; sec < 60; sec++) {
            console.log(`${hour}:${min}:${sec}`);

            if (hour === 2 && min === 20) {
                min = 60;
                break;
            }
        }
    }
}




// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// for (let i = 0; i < 3; i++) {
//     arr.push(i);
// }
// console.log(arr)
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1,2,3];
// let arrRev = arr.reverse();
// console.log(arrRev);
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1,2,3];
// for (let i = 4; i <= 6; i++) {
//     arr.push(i);}
// console.log(arr)
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1,2,3];
// for (let i = 6; i >= 4; i--) {
//     arr.unshift(i);
// }
// console.log(arr)
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'iq'];
// let first = arr.shift();
// console.log(first);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'iq'];
// let last = arr.pop();
// console.log(last);
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let arr = [1,2,3,4,5];
// console.log(arr.slice(3));
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arr = [1,2,3,4,5];
// console.log(arr.slice(0,2));
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// /   Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let arr = [1,2,3,4,5];
// arr.splice(3,0,'a','b', 'c');
// console.log(arr);
// / - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// let arr = [1,2,3,4,5];
// arr.splice(1,0,'a','b')
// arr.splice(3,0)
// arr.splice(6,0, 'c')
// arr.splice(9, 0, 'e')
// console.log(arr);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1,3,454,54,45,34,887,89,45,66,]
// for (let i = 0; i < arr.length; i++) {
//      if ( arr[i] % 2 === 0) {
//          console.log(arr[i]);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr = [1,3,454,54,45,34,887,89,45,66,];
// let  newArr = [];
// for (let i = 0; i < arr.length; i++) {
//      newArr.push(arr[i]);
// }
// console.log(newArr);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1,3,454,54,45,34,887,89,45,66,];
// let  newArr = [];
// for (let i = 0; i < arr.length; i++) {
//      newArr [i]=(arr[i]);
// }
// console.log(newArr);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
//  let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=0;
// while (i<10){
//     i++
// }
// console.log(arr);

// 2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
// }
// console.log(arr);
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//  let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=0;
// while (i < 10) {
//     i++
//    if(arr[i] % 2 !== 0){
//        console.log(arr[i]);
//    }
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++)
//      if ( [i] % 2 !== 0) {
//          console.log(arr[i]);
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//  let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=0;
// while (i < 10) {
//     i++
//    if(arr[i] % 2 === 0){
//        console.log(arr[i]);
//    }
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++)
//      if ( arr[i] % 2 === 0) {
//          console.log(arr[i]);
//
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]% 3===0 ){
//         arr[i]= 'okten'
//     }
// }
// console.log(arr);
// 8. вивести масив в зворотньому порядку.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 10; i>= 0; i--)
// console.log(arr[i]);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50; i++) {
//     if ([i] % 2 === 0){
//         console.log(i);
//     }
// }

// - заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0; i < 50; i++) {
//     if ([i] % 2 !== 0){
//         console.log(i);
//     }
// }
//
// 1. Створити пустий масив та :
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     if (arr= Math.random())
//         console.log(arr);
//     }

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     if (arr= Math.floor(Math.random()*732-8)+8)
//         console.log(arr);
//     }

//  2. Вивести за допомогою console.log кожен третій елемен
// let arr = [];
// for (let i = 0; i < 20; i++) {
//      arr[i] = Math.floor(Math.random() * 732 - 8) + 8
//         console.log(arr);
//     }
// for (let i = 2; i < arr.length; i+=3) {
//     console.log(arr[i]);

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [];
// for (let i = 0; i < 20; i++) {
//      arr[i] = Math.floor(Math.random() * 732 - 8) + 8
//         console.log(arr);
//     }
// for (let i = 2; i < arr.length; i+=3) {
//     if ( arr[i] %2 === 0){
//         console.log(arr[i]);
//
// }}


//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 732 - 8) + 8
//
// }
// console.log(arr);
//
// let arrNew = [];
// for (let i = 2; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         arrNew.push(arr[i]);
//     }
// }
// console.log(arrNew);
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// let arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr [i+1] % 2 === 0) {
//        arrNew.push(arr[i]);
//     }
// } console.log(arrNew)
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let arr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);
// average = sum/arr.length
// console.log(average);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     str = str+arr[i];
// }
//  console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// let i = 0;
// while (i<arr.length){
//     str= str+ arr[i];
//     i++
// }
// console.log(str)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let str = '';
// for (let string of arr) {
//     str= str+ string;
// }
// console.log(str);


// Розпорядок дня використовуючи колбек

// function getUp(makeBed,cb) {
//     setTimeout(() => {
//         if (makeBed) {
//             console.log('Good girl!')
//             cb(null, 'Move to the breakfast')
//         } else {
//             cb('Make the bed!')
//
//         }
//
//     }, 1000)
// }
// function haveBreakfast(food,water,cb) {
//     setTimeout(()=>{
//         if (food && water){
//             console.log('Hurry up!')
//             cb(null,'Classes are waiting for you' )
//         }
//         else {
//             console.log('You will be hungry and thirsty')
//             cb('Have a breakfast immediately!')
//         }
//     },1500)
//
// }
// function haveClassesAtUniversity(classes,cb) {
//     setTimeout(()=>{
//         if (classes>=2){
//             console.log('You can rest!')
//             cb(null,'Have your time' )
//         }
//         else {
//             console.log('You can be expended')
//             cb('Do not do it again')
//         }
//     },4000)
//
// }
// function haveLunch(products,cb) {
//     setTimeout(()=>{
//         if (products.includes('nuts')){
//             console.log('You will not be fat')
//             cb(null,'Keep it going' )
//         }
//         else {
//             console.log('You can be fat')
//             cb('Do not eat junk food')
//         }
//     },800)
//
// }
// function rest(program,time, cb) {
//     setTimeout(()=>{
//         if (program.includes('Masterchef')&& time<=2){
//             console.log('Enjoy watching')
//             cb(null,'Your prg' )
//         }
//         else {
//             console.log('It is not what you wanted')
//             cb('Keep searching')
//         }
//     },2000)
//
// }
// function makeHomework(homework,cb) {
//     setTimeout(()=>{
//         if (homework){
//             console.log('You make progress')
//             cb(null,'Move in this direction' )
//         }
//         else {
//             console.log('You are looser')
//             cb('You will not succeed')
//         }
//     },5000)
//
// }
// function haveSupper(food,cb) {
//     setTimeout(()=>{
//         if (food.includes('fish')){
//             console.log('Useful supper')
//             cb(null,'Good for you' )
//         }
//         else {
//             console.log('You will put on weight')
//             cb('Do not eat it again')
//         }
//     },1000)
//
// }
// function haveSleep(brushTeeth,spreadBed,cb) {
//     setTimeout(()=>{
//         if (brushTeeth && spreadBed){
//             console.log('Sleep well')
//             cb(null,'Sweat dreams' )
//         }
//         else {
//             console.log('Spread a bed')
//             cb('Brush your teeth')
//         }
//     },2000)
//
// }
//
// getUp(true,(err,data)=>{
//     if (!err){
//         console.log(data)
//         haveBreakfast(true,true,(err,data)=> {
//             if (!err){
//                 console.log(data)
//                 haveClassesAtUniversity(3,(err,data)=>{
//                     if (!err){
//                         console.log(data)
//                         haveLunch(['nuts','eggs','water'],(err,data)=>{
//                             if (!err){
//                                 console.log(data)
//                                 rest('Masterchef',2,(err,data)=>{
//                                     if (!err){
//                                         console.log(data)
//                                         makeHomework(true,(err,data)=>{
//                                             if (!err){
//                                                 console.log(data)
//                                                 haveSupper('fish',(err,data)=>{
//                                                     if (!err){
//                                                         console.log(data)
//                                                         haveSleep(true,true,(err,data)=>{
//                                                             if (!err){
//                                                                 console.log(data)
//                                                             }
//                                                             else {
//                                                                 console.error(err)
//                                                             }
//                                                         })
//                                                     }
//                                                     else {
//                                                         console.error(err)
//                                                     }
//                                                 })
//                                             }
//                                             else {
//                                                 console.error(err)
//                                             }
//                                         })
//                                     }
//                                     else {
//                                         console.error(err)
//                                     }
//                                 })
//                             }
//                             else {
//                                 console.error(err)
//                             }
//                         })
//                     }
//                     else{
//                         console.error(err)
//                     }
//                 })
//             }
//             else {
//                 console.error(err)
//             }
//         })
//     }
//     else {
//         console.error(err)
//     }
// })


// Розпорядок дня з промісами



function getUp(makeBed,cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (makeBed) {
                console.log('Good girl!')
                resolve('Move to the breakfast')
            } else {
                reject('Make the bed!')

            }

        }, 1000)
    })
}
function haveBreakfast(food,water,cb) {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (food && water){
            console.log('Hurry up!')
            resolve('Classes are waiting for you' )
        }
        else {
            console.log('You will be hungry and thirsty')
            reject('Have a breakfast immediately!')
        }
    },1500)
})
}
function haveClassesAtUniversity(classes,cb) {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (classes>=2){
            console.log('You can rest!')
            resolve('Have your time' )
        }
        else {
            console.log('You can be expended')
            reject('Do not do it again')
        }
    },4000)
})
}
function haveLunch(products,cb) {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (products.includes('nuts')){
            console.log('You will not be fat')
            resolve('Keep it going' )
        }
        else {
            console.log('You can be fat')
            reject('Do not eat junk food')
        }
    },800)
 })
}
function rest(program,time, cb) {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (program.includes('Masterchef')&& time<=2){
            console.log('Enjoy watching')
           resolve ('Your prg' )
        }
        else {
            console.log('It is not what you wanted')
            reject('Keep searching')
        }
    },2000)
})
}
function makeHomework(homework,cb) {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (homework){
            console.log('You make progress')
            resolve('Move in this direction' )
        }
        else {
            console.log('You are looser')
            reject('You will not succeed')
        }
    },5000)
 })
}
function haveSupper(food,cb) {
    return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if (food.includes('fish')){
            console.log('Useful supper')
            resolve('Good for you' )
        }
        else {
            console.log('You will put on weight')
            reject('Do not eat it again')
        }
    },1000)
})
}
function haveSleep(brushTeeth,spreadBed,cb) {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (brushTeeth && spreadBed){
            console.log('Sleep well')
            resolve('Sweat dreams' )
        }
        else {
            console.log('Spread a bed')
            reject('Brush your teeth')
        }
    },2000)
})
}

// getUp(true).then(value => {
//     console.log(value);
//     return haveBreakfast(true,true )
// })
//     .then(value => {
//         console.log(value);
//         return haveClassesAtUniversity(2)
//     })
//     .then(value => {
//         console.log(value);
//         return haveLunch(['nuts','eggs','water'])
//     })
//     .then(value => {
//         console.log(value);
//         return rest('Masterchef',2)
//     })
//     .then(value => {
//         console.log(value);
//         return makeHomework(true)
//     })
//     .then(value => {
//         console.log(value);
//         return haveSupper(['fish','water'])
//     })
//     .then(value => {
//         console.log(value);
//         return haveSleep(true,true)
//     })
//     .then(final => {
//         console.log(final);
//     })
//     .catch(reason => {
//         console.error(reason)
//     })

// Розпорядок з async await
async function myDay(){
    try{
    console.log(await getUp(true));
    console.log(await haveBreakfast(true,true));
    console.log(await haveClassesAtUniversity(4));
    console.log(await haveLunch(['nuts','chicken']));
    console.log(await rest('Masterchef',2));
    console.log(await makeHomework(true));
    console.log(await haveSupper(['porridge','fish']));
    console.log(await haveSleep(true,true));
}
catch (e) {
    console.warn(e)

}
}
myDay()
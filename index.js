//  Async/ Await = Async = make a function return a promise 
                //    await = makes an async function wait for a promise 
                //  allows your write asynchronous code in a synchronous manner 
                // Async doesn't have resolve or reject parameter
                // Everything after Await is Placed in an event queue

    
    // function walkDog() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const dogWalked = true
    //             if (dogWalked) {
    //                 resolve('Dog walked')
    //             } else {
    //                 reject('Dog not walked')
    //             }
    //         }, 1500)
    //     })
    // }

    // function cleanKitchen() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const kitchenCleaned = false
    //             if (kitchenCleaned) {
    //                 resolve('Kitchen cleaned')
    //             } else {
    //                 reject('Kitchen not cleaned')
    //             }
    //         }, 1500)
    //     })  
    // }

    // function takeOutTrash() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const trashTakenOut = true
    //             if (trashTakenOut) {
    //                 resolve('Trash taken out')
    //             } else {
    //                 reject('Trash not taken out')
    //             }
    //         }, 1500)
    //     })
    // }


    // async function doChores() {
    //     const walkDogResult = await walkDog()
    //     console.log(walkDogResult)
    //     const cleanKitchenResult = await cleanKitchen()
    //     console.log(cleanKitchenResult)
    //     const takeOutTrashResult = await takeOutTrash()
    //     console.log(takeOutTrashResult)
    // }


    // under try and catch 

//     async function doChores() {
//         try {
//             const walkDogResult = await walkDog()
//             console.log(walkDogResult)
//             const cleanKitchenResult = await cleanKitchen()
//             console.log(cleanKitchenResult)
//             const takeOutTrashResult = await takeOutTrash()
//             console.log(takeOutTrashResult)
//         } catch (error) {
//             console.log(error)
//         }
//     }

// doChores();


// promise 

const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2)

    if (rand === 0) {
        resolve()
    } else {
        reject()
    }
});

myPromise
.then(() => console.log('Good'))
.catch(() => console.log('Something went wrong'))


// fetch 

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then ((response) => response.json())
.then((data) => console.log(data)) 
.catch((error) => console.log(error))
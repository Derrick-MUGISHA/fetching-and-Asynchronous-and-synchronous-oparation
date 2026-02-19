let a = 1
let b = 2

//  asynchronous variables

setTimeout(() => {
    console.log('Timeout code ' + a)
}, 1000)

a = 10 


// 

fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(){
    console.log('asynchronous code 5')
})


//  synchronous variables 




console.log('synchronous code')
console.log(a)
console.log(b)


// setTimeout 

setTimeout(() => {
    console.log('waiting for 2 seconds')
}, 1000)

//  nest setTimeouts

setTimeout(() => {
    console.log('3')
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        }, 1000)
    }, 1000)
}, 1000)



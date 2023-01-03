// function Foo(p1){ //parameter
//     p1();
// }

// Foo(function cb(){
//     console.log("I am callback function");
// }); 


// function asynFirst(cb) {
//     setTimeout(() => {
//         cb();
//     }, 1000)
// }

// function asyncSecond(cb) {
//     setTimeout(() => {
//         cb();
//     }, 2000)
// }

// function asyncThree(cb) {
//     setTimeout(() => {
//         cb();
//     }, 3000)
// }

// function asyncFour(cb) {
//     setTimeout(() => {
//         cb();
//     }, 4000)
// }

// function asyncFive(cb) {
//     setTimeout(() => {
//         cb();
//     }, 5000)
// }

// function asyncSix(cb) {
//     setTimeout(() => {
//         cb();
//     }, 6000)
// }

// function asyncSeven(cb) {
//     setTimeout(() => {
//         cb();
//     }, 7000)
// }

// asynFirst(function() {
//     console.log(1)
//     asyncSecond(function() {
//         console.log(2);
//         asyncThree(function() {
//             console.log(3);
//             asyncFour(function() {
//                 console.log(4);
//                 asyncFive(function() {
//                     console.log(5);
//                     asyncSix(function() {
//                         console.log(6);
//                         asyncSeven(function() {
//                             console.log(7);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

// function testing(value) {
//     const myPromise=new Promise((res,rej)=>{

//         setTimeout(()=>{
//             if(value === 'yes'){
//                 res("Promise resolved")
//             }  else{
//                 rej("Promise rejected")
//             }
//         },1000)
//     });

//     return myPromise;
// }

// testing('yes').then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

// function Myfunction(num) {

//     const anything=new Promise(function(resolve,reject){

//         setTimeout(()=>{
//             if(num%2==0){
//                 resolve("Its even")
//             }else {
//                 reject("its odd")
//             }
//         },1000)
//     })
//     return anything;
// }

// async function GetDataError(){

//     try{
//         let data= await  Myfunction(97);
//         console.log(data);
//     }catch(err){
//         console.log("Error here",err);
//     }
// }
// GetDataError();

(function printAsyncInOrder(limit) {
    let [, ...list] = [...Array(limit + 1).keys()];
    list.reduce(chainedSequence, Promise.resolve());
    function chainedSequence(chain, currentOrder, index) {
        return chain.then(() => {
            let current = currentOrder;
            return new Promise(resolve => setTimeout(() => {
            console.log(`${index+1}`);
            resolve();
            }, 1000 * index));
        });
    }
})(7);
/*
        PROMISE IS AN OBJECT (REMEMBER)
*/

// Holding promise into a variable
const promiseOne = new Promise(function(resolve, reject){
        //Do an async task
        //DB calls, cryptography, network
        setTimeout(() => {
            console.log('Asyn task is complete');
            resolve();              // connect promise with then
        }, 1000);
})

// .then -> it takes a func as an argument
promiseOne.then(function() {
        console.log('Promise consumed');    // this func automatically receives an argument of the response of promise
})


// without holding promise into a variable
new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Asyn task 2 complete');
            resolve();
        }, 1000);
}).then(function(){
        console.log('Async 2 resolved...');
})

// passing data from promise to then
const promiseThree = new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve({userName: 'Shuaib', email: 'shuaib@exmample.com'});    // can pass any type of data 
            }, 1000);
})

promiseThree.then(function(user){
            console.log(user);
            
})

/* Occuring an error in Promise */
const promiseFour = new Promise(function(resolve, reject) {
            setTimeout(() => {
                let error = false;
                if(!error){
                    resolve({username: 'Ahmad', password: '132'})
                } else{
                    reject('ERROR: something went wrong')
                }
            }, 1000);
})

promiseFour.then((user) => {
            console.log(user);
            return user.username;          
}).then((username) => {
        console.log(username);
}).catch(function(error) {
        console.log(error);
}).finally(() => console.log('Promise is either resolve or rejected....'))     /// finally block always executed


// Handling Promise by asyn-await && try-catch
const promiseFive = new Promise((resolve, reject) => {
            setTimeout(() => {
                let error = true;
                if(!error){
                    resolve({username: 'JavaScript', password: '132'})
                } else{
                    reject('ERROR: JS went wrong')
                }
            }, 1000);
})

async function consumedPromiseFive() {
       try{
            const response = await promiseFive;
            console.log(response);
       } catch(error){
            console.log(error);             // handling error through try-catch
       }       
}

consumedPromiseFive();


/* fetch --- using async-await     */
/*
async function getAllUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error: ", error);
            
        }
}

getAllUsers();
*/


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json();                   // convert JSON to JS OBJECT
}).then((data) => {
            console.log(data);
})
.catch((error) => console.log("error: ", error))

/*  
    NOTE ->  fetch giving result sabse pahle 
             then other promise result is coming ? ... WHY....?
             Ans -> bcoz fecth promise is stored in "Micro task Queue / Priority Queue"
*/
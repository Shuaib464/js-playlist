/* for Loop */

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

// "break"  and  "continue"

// for (let index = 0; index < 20; index++) {
    
//     if(index == 10){
//         console.log(`detected 10`);
//         break;
//     }
//     console.log(`value of i is ${index}`);

// }


/* "continue"  */

for (let index = 0; index < 15; index++) {
    
    if(index == 10){
        console.log(`detected 10`);
        continue;
    }
    console.log(`value of i is ${index}`);

}


/* 
    "break" - break the loop
    "continue" - skip one iteration of loop
*/
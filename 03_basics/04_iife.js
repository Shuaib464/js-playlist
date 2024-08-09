// Immediately Invoked Function Expressions (IIFE)

/*  named IIFE     */
(function chai() {
    console.log("DB connected");
})();

// ()()    => first paranthesis for return and second for execution


/*  Unnamed IIFE / simple IIFE   */
( (name) => {
    console.log(`DB connected two ${name}`);  
} )("Shuaib")



/*  
    NOTE -> global scope ke pollution se problem hoti hai kayi baar
            to us global scope ke variables ya jo bhi declaration hain, uske pollution ko hatane ke liye hamne "iife" ka use kiya

*/
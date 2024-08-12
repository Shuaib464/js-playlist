const coding = ['js', 'ruby', 'c++', 'java', 'python'];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// using arrow function

// coding.forEach ( (item) => {
//     console.log(item);
    
// } )

// using function reference
function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe);


/*
    WHAT FOR_EACH brings in each iteration
    it brings element, index and full array in each iteration
*/

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const programming = [
    {
        languageName: 'python',
        languageFileName: 'py',
    },
    {
        languageName: 'javascript',
        languageFileName: 'js',
    },
    {
        languageName: 'ruby',
        languageFileName: 'rb',
    },
    {
        languageName: 'reactJs',
        languageFileName: 'rj',
    }
]

programming.forEach( (obj) => {
    //console.log(obj);               // it takes each object as an element in each iteration
    console.log(obj.languageFileName);
        
} )
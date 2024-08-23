function SetUsername(username) {
    // complex DB calls 
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){
    //SetUsername(username);   // not calling this function
    //SetUsername.call(username)   // so now we explicitly call SetUsername func, but here after executing the func 
                                // all values and "this" of SetUsername func destroyed, So we have to hold the reference of the func
    // so we pass our "this" to hold the reference of function 
    SetUsername.call(this, username);
    
    this.email = email; 
    this.password = password;
}

const user = new createUser('Shuaib', 'shuaib@google.com', '123456');
console.log(user);

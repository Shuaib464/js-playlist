class User {
    
    constructor(username){
        this.username = username;
        // this.password = password;
    }
    // this.password = "15646"           // now we cannot set property, we have to define setter for that property


    get password() {
        return this.password.toUpperCase();
    }
    // getPassword() {
    //     console.log(this.password);
    // }
}

const myUser = new User('ahmad');
console.log(myUser);

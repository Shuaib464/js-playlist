class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ahmad`
    }

    set password(value){
        this._password = value
    }
}

const shuaib = new User("shuaib@78.ai", "abc")
console.log(shuaib.email);
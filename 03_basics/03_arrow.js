
// use of this
const user = {
    username: "shuaib",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.welcomeMessage()

user.username = "Ahmad";
user.welcomeMessage();
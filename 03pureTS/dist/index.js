"use strict";
// class User {
//     email:string
//     private name : string
//    private readonly city : string = "Durg";
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Durg";
    }
    deleteToken() {
        console.log("Token Deleted successfully");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than one");
        }
        this._courseCount = courseNum;
    }
}
const vikas = new User("vikas@gmail.com", "vikas", "2q4");

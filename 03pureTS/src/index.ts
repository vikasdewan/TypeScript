 
class User {
    email:string
    name : string
   readonly city : string = "Durg";

    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }
}

const vikas = new User("vikas@gmail.com" ,"vikas")


export{}
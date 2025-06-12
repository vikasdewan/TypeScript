 
// class User {
//     email:string
//     private name : string
//    private readonly city : string = "Durg";

//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
        
//     }
// }
 
class User {

   protected _courseCount = 1;

   private readonly city : string = "Durg";

    constructor(
        public email:string,
        public name:string,
        private userId : string
    ){        
    }

    private deleteToken(){
        console.log("Token Deleted successfully"); 
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount;
    }

    set  courseCount(courseNum){
       if(courseNum <=1){
        throw new Error("course count should be more than one")
       }
       this._courseCount = courseNum;
    }
}

class SubUser extends User {
        isFamily : boolean = true;
        changeCouserCount(){
            this._courseCount = 4;
        }
}

const vikas = new User("vikas@gmail.com" ,"vikas","2q4")
// vikas.name;  // give error
// vikas.deleteToken();  //give error as deleteToken() is a private method

export{}
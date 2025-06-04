// const User  = {
//     Auth : {
//         name :  "vikas",       
//         email : "vikas@gmail.com",
//         password : "1234",
//     },

//     Education : {
//         degree : "Btech",
//         college : "IIT",
//         year : "2018",
//     },
// }

// function createUser({name: string, isPlaced:boolean}){};

// let newUser = {name:"vikas", isPlaced:true , package:1200000};

// // createUser({name: "vikas", isPlaced : true});
// createUser(newUser);

// function createStudent():{name:string,class:number}{
//     return {name:"vikas" , class:12}
// };







//Alias

// type User = {
//         name : string;
//         email : string;
//         isActive : boolean;
//         age : number;
// }

// function createUser(user : User) : string{
//     return "user created Successfully";
// }

// createUser({name:"",email:"",isActive:true,age:22})





//readonly.

type User = {
   readonly _id: string
    name : string
    email : string
    isActive : boolean
    age : number
    credcardDetails ? : number  // ? is use for optional.
}

let myUser : User = {
    _id : "321342",
    name:"vikas",
    email:"vikas@gmail.com",
    isActive:true,
    age:22
    
}

myUser.name = "shubham";
// myUser._id = "2343";   give error



type cardNum = {
    cardnumder : number
}

type cardExpDate = {
    cardExpireDate : number
    }

type cardCVVNum = {
    cardCvvNumber : number
}

type cardDetails = cardNum & cardExpDate & cardCVVNum  & {
    accBalance : string
}


export{}
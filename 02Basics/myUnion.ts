
let score : number | string = 1

score = "1"; //no error.


type User = {

   readonly user_id : string
    name : string
    email : string
    age : number | string
    streak : number | string
    nickName ? : string
}

type Admin = {
   readonly admin_id : number
    username : string
}


let vikas : User | Admin = {
    user_id : "1",
    name : "vikas",
    email : "vikas@gmail.com",
    age : 22,
    streak :53,

    username : "vikas",
    admin_id : 21
    
}


// function getDbId(id:number | string){
//     //any API calls.
//     console.log(`DB id is : ${id}`);
// }

getDbId(3);
getDbId("3");


function getDbId(id:number | string){
     if(typeof id === "string"){
            id.toLowerCase(); // to use this u have to check the type first.
     }else{
        id + 2;
     }
}




//array

const data1 : number[] = [1,2,3,4,5];
const data2 : string[] = ["4"];
const data3 : (number | string | boolean)[] = [1,2,3,4,5,"4",true]; // now u can use multiple datatypes in an array.

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle";
// seatAllotment = "crew" ; // give error

export{}

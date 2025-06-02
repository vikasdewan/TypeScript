function addTwo(num : number) : number{
    return num + 2;
    
}

function getUpper(val : string){
    return val.toUpperCase();
}
 

function signUp(name : string , email : string , age : number , isPassword: boolean){}

let loginUser = (email : string ,password : string , isPaid : boolean = false)=>{
    //logic...
    return "user Logged In Successfully"
}

addTwo(5);
getUpper("type is string");
signUp("vikas","vikas@email.com",24,true);
loginUser("vikas@gmail.com", "password123" );


function getFood(foodQuantity : number) {
    if(foodQuantity <5){
        return true;
    }
    return "can't deliver food right now";
}


const deliverFood = (foodQuantity : number) : boolean => {

      if(foodQuantity <5){
        return true;
    }
    return false;
}


const heros = ["cap","ironman","spidy","thor","hulk"];
// const heros = [1,2,3];

heros.map((hero) : string =>{
    return `hero is ${hero}`;
})

function consoleError(errMsg : string) : void {
    console.log(errMsg);
}

function handleError(errMsg : string) : never {
    throw new Error(errMsg);
}



export{};
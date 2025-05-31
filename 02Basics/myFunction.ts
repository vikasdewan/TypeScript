function addTwo(num : number){
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

export{};
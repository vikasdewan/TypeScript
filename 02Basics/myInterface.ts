
interface User {
    readonly db_id:string,
    email:string,
    userId : number,
    googleId ?: string
    // startTrail : () => string
    startTrail() : string            // specify more like that it is a method
    getCoupon(couponName:string , value:number , expireDate ?: string) : number
}

interface User {
    githubToken : string
}

interface Admin extends User {    // you can put comma after "User" to add more interfaces in one interface
    accessLevel : "Level1" | "Level2" | "Level3"
}

const vikas : User = {
    githubToken : "github",
    db_id:"234234",
    email:"vikas@gmail.com",
    userId:2343,
    startTrail:()=>{
        return "trail started"
    },

    getCoupon:(name:"vikas10" , off : 10) =>{
        return  10
    }
}


const vikasSeth : Admin = {
    accessLevel : "Level3",
    githubToken : "github",
    db_id:"234234",
    email:"vikas@gmail.com",
    userId:2343,
    startTrail:()=>{
        return "trail started"
    },

    getCoupon:(name:"vikas10" , off : 10) =>{
        return  10
    }
}


vikas.email = "vikas@gmail.com";

export{};
const User  = {
    Auth : {
        name :  "vikas",       
        email : "vikas@gmail.com",
        password : "1234",
    },

    Education : {
        degree : "Btech",
        college : "IIT",
        year : "2018",
    },
}

function createUser({name: string, isPlaced:boolean}){};

let newUser = {name:"vikas", isPlaced:true , package:1200000};

// createUser({name: "vikas", isPlaced : true});
createUser(newUser);

function createStudent():{name:string,class:number}{
    return {name:"vikas" , class:12}
};

export{}
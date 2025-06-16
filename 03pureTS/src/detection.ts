function detectType(val : number | string) {
    if(typeof val === 'string'){
        return val.toLowerCase();
    }
    return val.toFixed();
}


function provideId(id:string | null) : string {
    if(!id){
        return "please provide ID";
    }
    return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
 
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}



interface User {
    name:string,
    email:string
}

interface Admin {
    name : string,
    email : string,
    isAdmin : boolean
}

function AdminOrNot(account : Admin | User){
    if('isAdmin' in account){
        return account.isAdmin;
    }
    return false;
}


new Date()  // Date is also a data type same like array, string ,number etc.

function logValue(x: Date | string) {
  if (x instanceof Date) {  // instanceof is keyword which   
                            //works mostly when something is constructed 
                            // using "new" keyword.
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}



//predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird) : pet is Fish{
  return (pet as Fish).swim !== undefined;
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet
       return "fish food"
    }else{
        pet
        return "bird Food"
    }
}


interface Circle {
   kind : "circle",
   radius : number
}

interface Square {
  kind : "square"
  side : number
}

interface Rectangle{
  kind : "rectangle",
  length : number,
  width : number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape : Shape){
  if(shape.kind === "circle"){
    return Math.PI*shape.radius**2;
  }
   //return shape.side * shape.side;
}

function getArea(shape : Shape){
    switch(shape.kind){
      case "circle": 
          return Math.PI*shape.radius**2;
      case "square" : 
          return shape.side * shape.side;
      case "rectangle" : 
          return shape.length * shape.width;    
      default : 
          const _defaultforshape : never = shape
          return _defaultforshape     
    }
}
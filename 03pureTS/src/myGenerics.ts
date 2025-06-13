const score :Array<number> = [1,2,3,4,5];
const fruits :  Array<string> = ["apple" , "pineapple" , "banana" , "guava" , "grapes"];


function identityOne(val : boolean | number)  : boolean | number {
            return val;
}

function identityTwo(val : any) : any {
    return val;
}

function identityThree<Type>(val : Type) :Type {
    return val;
}

let sethVikas :string = identityThree<string>("sethVikas");

let isVikas : boolean = identityThree<boolean>(true);


function identityFour<T>(val : T) : T {
    return val;
}

interface Bottle {
    brand : string,
    quantity : number
}

let miltonBootle : Bottle  = identityFour<Bottle>({ brand :  "milton" , quantity : 2}) 

function getSearchProducts<T,>(products : T[]) : T { // <T,> this define that this is a generic , and  here comma represent that it is not any JSX component or anything like that.

    //do some database operations
    const myIdx = 3;
    return products[myIdx];
}

let getMoreSearchProducts = <T>(products:T[]): T => {
    //do some database calculation
    const myIdx = 4;
    return products[myIdx];
}



interface Database {
    connection : string,
    username : string,
    password : string
}

function anotherFunction<T,U extends Database>(valOne : T , valTwo : U):object {
      return { valOne , valTwo };
}

anotherFunction(3,{connection:"server",username:"debu",password:"23243"});



interface Quiz {
    name:string,
    type:string
}

interface Course {
    name : string,
    author : string,
    subject : string
}

class Sellable<T>{
    public cart: T[] = [];
    addToCart(product : T){
        this.cart.push(product);
    } 
}
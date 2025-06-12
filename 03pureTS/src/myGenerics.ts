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
// export {};

// export function identity<T>(arg: T): T {
//   return arg;
// }
// const a = <T>(value: T) => value; 

// let a1 = a("1")
// console.log(a1)

// class Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }
// }

// let person =new Person('hello',28);
// const foo = <T extends Person>(person: T): T=>{
//     console.log(person.age);
//     return person;
   
// }

// foo(person)
// let output = identity<string>("myString");
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };



interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

console.log(myIdentity(1), identity("1"));


interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  
    return arg;
}



function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay



function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    result[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}


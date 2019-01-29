"use strict";
exports.__esModule = true;
// let name : string= "jixnin";
// let arr1:number[] = [1,2];
// let arr2: Array<number> = [1, 2];
// let arr3: [string,number] = ["jin", 2];
// enum Color {Red=2,Green,Blue};
// let c:Color = Color.Red;
// console.log(name, arr1, arr2, arr3, c, Color)
// let someValue: any = "this is a string";
// let strLength1: number = (<string>someValue).length;
// let strLength2: number = (someValue as string).length;
// let multype: number | boolean;
// multype = 10;
// const func1 = (str:string):string =>{
//     return "1"
// }
// const func2 = (num1: number, num2: number=10): number => {
//   return num1+num2;
// };
// console.log(func2(1));
// console.log(someValue, strLength1, strLength2);
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    A.prototype.greet = function () {
        console.log("GG");
    };
    return A;
}());
var a = new A("JIN");
a.greet();

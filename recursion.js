/**
 * Created by Yura on 14.03.2017.
 */
"use strict";
let Arr = ["a","b","c",["d","f","g"]];
let Arr2 = [3,5,10,"10a",[10,13],{3:"5"}];

let func = Arr.map(recursion);
let func2 = Arr.map(recurcion2);
let func3 = Arr2.map(recursive3);
console.log(func);
console.log(func2);
console.log(func3);

function recursion(e){
    if(Array.isArray(e)){
        return e.map(recursion)
    }else{
        return e.toUpperCase();
    }

}
function recurcion2(e) {
    if( typeof e === "string"){

       return e.charCodeAt();
    }else{
        return e.map(recurcion2);
    }
}
function recursive3(e) {
    if (e) {
        switch (typeof e) {
            case "number": {
                return e * e;
                break;
            }
            case "string": {
                if (!isNaN((+parseInt(e)))) {
                    return recursive3(+parseInt(e));
                    break;
                }
            }
            case "object": {
                if (Array.isArray(e)) {
                    return e.map(recursive3);
                    break;
                }
            }
            default: {
                return Object.keys(e).map(recursive3);
            }
        }
    }
}
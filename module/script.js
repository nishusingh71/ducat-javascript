import {items,testing} from './items.js';
testing()
function printItems(arr){
    for(const value of arr ){
        console.log(value);
    }
}
printItems(items)
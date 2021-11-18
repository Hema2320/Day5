function getLastElement(array){
    if(array.length>0){
    return array[array.length-1];
    }
    else
    return console.log(undefined);
   }
 console.log(  getLastElement([1,2,3]));
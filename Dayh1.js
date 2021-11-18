let arr = [9,18,27,36,45];

let x=function(arr){
    let last = arr.pop();
    arr.unshift(last);
    return arr;

}
console.log(x(arr));


let arr = [9,18,27,36,45];

(function(arr){
    let last = arr.pop();
    arr.unshift(last);
    return arr;

})
console.log((arr));


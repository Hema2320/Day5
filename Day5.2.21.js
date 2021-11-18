var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = (arr = []) => {
   var res = arr.reduce((acc, val) => {
     let [sum1, sum] = acc;
      if(val > 0){
         sum1+=val;
      }else if(val < 0){
         sum += val;
      };
      return [sum1, sum];
   }, [0, 0]);
   return res;
}
console.log(ar2(arr));
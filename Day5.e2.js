(function(){

    let arr = [ 1344, 12321, 100001, 12222221,7878];
    let result = x => {
       const str = String(x);
       let i = 0;
       let j = str.length - 1;
       while(i < j) {
          if(str[i] === str[j]) {
             i++;
             j--;
          }
          else {
             return false;
          }
       }
       return true;
    };
    let checkpal = arr => {
       return arr.filter(x => result(x));
    };
    console.log(checkpal(arr));
    })
    ();                                                                           
    
(function(){
    var x = [2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19]
        x = x.filter((n) => {
          for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) 
            return false;
          }
          return true;
        })
        console.log(x);
    })();
    
    
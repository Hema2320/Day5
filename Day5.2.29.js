printPrimes(100);
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}

function isPrime(n)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= n; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= n; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}



    

console.log(isPrime(100));
getDistance(100, 100, 400, 300);
function getDistance(x1, y1, x2, y2)
{
 let x= x2-x1;
 let y=y2-y1;
 let a= x*x;
 let b= y*y;
 let c= a+b;
 let d= Math.sqrt(c);
 console.log(d);
}
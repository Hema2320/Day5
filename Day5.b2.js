let a=['war and peace by tolstoy, the great gatsby by F. Scott Fitzgerald,moby dick by Herman Melville.  '];

let x=(function(){
    a= a.toString().toLowerCase().split(' ');
    for (let i = 0; i < a.length; i++) {
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);

  }
  return a.join(' ');
});
console.log(x());
	const res=['war','god'];
	let x =(res)=>{res.toString().toLowerCase().split(' ');
	         for(let i=0;i<res.length;i++){
            res[i]=res[i].charAt(0).toUpperCase()+res[i].slice(1);
         }
           return res.join(' ');
} 
console.log(x(res));


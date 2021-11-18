var obj = {
    mykey: "value"
   };
   function getProperty(obj) {
       if(obj.mykey=="value"){
       return obj.mykey+Object.keys(obj);
       }
       else{
           return console.log(undefined);
       }
   }
   console.log(getProperty(obj));
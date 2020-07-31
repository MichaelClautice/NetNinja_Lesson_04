var mikesTime = 0;

const timer = setInterval( () => {
   mikesTime += 2;
   console.log("•••••••••••••")
   console.log(mikesTime +  ' seconds have passed!!!!!!'  );
   console.log("•••••••••••••") 
   if (mikesTime > 5){
       clearInterval( timer );
   }
}, 2000);


// node can also determine the your directory by using '__dirname';
console.log("••••••++•••••••")
console.log(__dirname);
// node can also determine the your file name by using '__filename';
console.log("••••••++•••••••")
console.log(__filename);
console.log("••••••++•••••••")
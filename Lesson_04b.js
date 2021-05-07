// Michael Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 04 - The Global Object
//-----------
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


// node can also determine the directory by using '__dirname';
console.log("••••••++•••••••")
console.log(__dirname);
// node can also determine the file name by using '__filename';
console.log("••••••++•••••••")
console.log(__filename);
console.log("••••••++•••••••")
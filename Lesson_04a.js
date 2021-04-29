// Michael_Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 04 - The Global Object
//-----------
console.log("•••••••••••••")
console.log('Hello World!');
console.log("•••••••••••••")

// will time out after 4 secs
setTimeout(function(){
    console.log("04 seconds \n have passed!");
    console.log("•••••••••••••")
},4000);

// below will run forever
// exit via cntrl C in the CLI

var time = 0;

setInterval(() => {
    time += 2;
    console.log(time + ' seconds \n have passed');
    
}, 2000);
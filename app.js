// Michael Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 04 - The Global Object
//-----------
// SET TIMEOUT DEMO 
// setTimeout takes 2 params: 1 - a callback function, 2 - the amt of time when the function times out
console.log("\n\n\n••••••••••••••");
setTimeout(function(){
    console.log("DEMO 01 - SET TIMEOUT");
    console.log("••••••••••••••");
    console.log('TWO seconds have passed, Michael');
    console.log("••••••••••••••");
}, 2000);
//•••••••••••••••••••
// SET INTERVAL DEMO
console.log("\n\n\n••••••••••••••");
var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log("DEMO 02 - SET INTERVAL");
    console.log("••••••••••••••");
    console.log(time + ' seconds have passed')
    console.log("••••••••••••••");
    if (time > 7){
        clearInterval(timer);
    }
}, 2000);
//•••••••••••••••••••
// DIRECTORY NAME DEMO
console.log("\n\n\n••••••••••••••");
console.log("DEMO 03 - DIRECTORY NAME");
console.log(__dirname);
// FILE NAME DEMO
console.log("••••••••••••••");
console.log("DEMO 04 - FILE NAME DEMO");
console.log(__filename);
console.log("••••••••••••••");
//•••••••••••••••••••
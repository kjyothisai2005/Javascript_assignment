//question-4
//global- can be declared, initialzed at initial point of code and used anywhere in the code
let globalv;
function printval(){
console.log(globalv);
}
function calculateval(){
    // local- can be declared, initialised and used in some function or block of code
 square=globalv*globalv;
 console.log(square);
}
globalv=25;
printval(globalv);
calculateval();
if (true){
    //block scope- can be declared,initialised and used in a block of code only 
    cube=globalv*globalv*globalv;
    console.log(cube);
}
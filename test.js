function testCallBack(a, funct){
    console.log("a: " + a);
    funct();
}


//call
// reduce fucnt
//map forEach
// filter and find


function Hello(){
    console.log("Hello World");
}

testCallBack(5, Hello);
//8.1 First declare at least four variables and assign them different data types.
var a=4;
var b="fruit";
var c=['fish','horse'];
var d= true;

//8.2 For each variable write a console.log statement that logs the value
console.log("The value of my variable a is: "+a);
console.log("The value of my variable a is: "+b);
console.log("The value of my variable a is: "+c);
console.log("The value of my variable a is: "+d);

//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log("a variable is number");
console.log("b variable is string");
console.log("c variable is object");
console.log("d variable is boolean");

//8.4 Now use typeof to log the actual type of your variables.
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//8.5 Now compare the types of your different variables with one another.
//8.6 Make sure to also show a message when the variables you are comparing are not the same type.

if(a==b){
    console.log('SAME TYPE');
}
else{
    console.log('not the same type');
}
if(c==d){
    console.log('SAME TYPE');
}
else{
    console.log('not the same type');
}

//9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
var t=7;
console.log(t = t%3);

//9.1 Add at least 3 console.log statements in which you show that you understand what % does.
var g=192;
console.log(g=g%17);

var h=1586;
console.log(h=h%29);

var u=1585848836;
console.log(u=u%93);

//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
var differentthings=['horse', 11, 'world', 5];
console.log(differentthings);

//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
//10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
var s=10/0;
var u=6/0;
if(s===u){
    console.log("that's right");
}
else{
    console.log("that's wrong");
}
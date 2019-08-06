 /* STRINGS */
 let myString = "hello,this,is,a,difficult,to,read,sentence";
//Add the string to your file and log it.
console.log(myString);

//Log the length of myString.
console.log(myString.length);

//The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
var newString = myString.replace(/,/g, ' ');
console.log(newString);


/*The string doesn't make any sense. Find a way to reverse this string so that it becomes readable.*/

const str = 'dlroW olleH';

function ReverseString(str) { 
    return str.split('').reverse().join('') 
 } 
 console.log(ReverseString('dlroW olleH')) 

  /* ARRAYS */

  let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//Add a statement that adds your favorite animal say 'turtle' to the existing array.
favoriteAnimals.push=('turtle'); // I think new array will include 4 object
console.log(favoriteAnimals);

//Now add another favorite animal to the array but make sure it is placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(favoriteAnimals);

//Delete 'giraffe' from the array.
favoriteAnimals.splice(3, 1); 
console.log(favoriteAnimals);

 /* OPERATORS */

 // 1. Mathematically, if a == b and b == c, then a == c. Can you explain in your words why this is not true for the above snippet?

var a='0';
var b= 0;
var c=[];


 console.log( a == b ? 'true':'false');
 console.log( b == c ? 'true':'false');
 console.log( a == c ? 'true':'false');

 // a is string and c is array and there value are not equal.

// 2.What do you think will happen with x == y, x === y and z === y and z == x? Try to think of answer first before running it on browser. Also, explain in your words why this happens?

//where x and y also hold an address of the array, so we get false because the values and structure are different from the references they were originally created in the same image. arrays are reference rounds and generated once in memory

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log( x == y ? 'true':'false');
 console.log( x === y ? 'true':'false');
 console.log( z === y ? 'true':'false');
 console.log( z == x ? 'true':'false');

// 3.

const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o1.property = 'object';
console.log(o1);
console.log(o2);
console.log(o3);
// comment:  we change o1 then o3 is not changed.

o2.property='this object';
console.log(o1);
console.log(o2);
console.log(o3);
//comment:we change o2 then o3 is changed

// Does the order that you assign (o3 = o2 or o2 = o3) matter?
// yes. because we cannot create it will say o3 is undefined.

/* QUESTIONS FROM HYF REPOS */

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
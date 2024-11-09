
var button2 = document.getElementById("btn2");
var button2 = document.getElementById("btn3");

// button1.onclick = function(){
//     alert("Hello from on click");
// }

// button2.onmouseover = function(){
//     alert("hello from mouse over")
// }

// button3.onmouseleave = function(){
//     alert("hello from mouse leave")
// }


var button1 = document.getElementById("btn1");

var text = document.getElementById("text_id");
 
button1.onclick = function(){
    text.style.color = "red";
    text.style.backgroundColor = "green";
    text.style.textAlign = "center";
    text.style.fontSize = "20px";
    text.style.padding = "20px";

 }

 var programmingLanguages = ['Javascript', 'PHP','Java'];
 console.log(programmingLanguages.push('.NET'));
 programmingLanguages.pop();
 programmingLanguages.unshift('c#');
 programmingLanguages.shift();
 programmingLanguages.splice(1,0, 'Ruby');


 
 console.log(programmingLanguages[0]);
 console.log(programmingLanguages[1]);
 console.log(programmingLanguages[2]);
console.log(programmingLanguages);

console.log(Math.floor(Math.random()*5));


var students = ['Rusi', 'Eri', 'HEHE', 'osuufguo' , 'aihg',];

var [s1,s2 , ...otherNames] = students;

console.log(students);
console.log(s1);
console.log(s2);
console.log(...otherNames);

var x = 5;
var y = 6;
if(x>y){
    console.log("x is greater y");
}else{
    console.log("this is not true");
}

if(x==5){
    console.log("x--5");
}else{
    console.log("this is false");
}


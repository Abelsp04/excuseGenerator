window.onload=function(){

button=()=>{

let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let who2=Math.floor(Math.random()*who.length);
let what2=Math.floor(Math.random()*what.length);
let when2=Math.floor(Math.random()*when.length);


document.querySelector(".test").innerHTML ='The excuse now is '+ who[who2]+" "+what[what2]+" "+when[when2];

}

};
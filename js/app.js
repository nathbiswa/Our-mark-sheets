


document.querySelector('.container button') .addEventListener('click',
function(){

let name = document.getElementById('name').value;
let marks = document.getElementById('marks').value;

if( marks >= 0 && marks <33){
document.querySelector('.container p').innerHTML = 
'<span style="color:red;"> Hi '+ name +', You got F .Sorry you are Fail</span>';
}else if(marks >= 33 && marks <40 ){
    document.querySelector('.container p').innerHTML = 
    '<span style="color:purple;"> Hi '+ name +', You got D . Apni bises bibechonay pass korechen</span>';
}else if(marks >= 40 && marks <50 ){
    document.querySelector('.container p').innerHTML = 
    '<span style="color:skyblue;"> Hi '+ name +', You got C . Apnake aro valo korte hoe</span>';
}else if(marks >= 50 && marks <60 ){
    document.querySelector('.container p').innerHTML = 
    '<span style="color:yellow;"> Hi '+ name +', You got B . Apnai motamuti valo lorechen</span>';
}else if(marks >= 60 && marks <70 ){
    document.querySelector('.container p').innerHTML = 
    '<span style="color:blue;"> Hi '+ name +', You got A- . Apnai volo korechen misti khaoyan</span>';
}else if(marks >= 70 && marks <80 ){
    document.querySelector('.container p').innerHTML = 
    '<span style="color:green;"> Hi '+ name +', You got A . Apni onk valo korchen mangso polaw khapyan </span>';
}else if(marks >= 80 && marks <=100 ){
    document.querySelector('.container p').innerHTML = 
    '<span style="color:green;"> Hi '+ name +', You got A+ . Apni onk onk valo korchen mangso polaw khaoyan</span>';
}else{ 
    document.querySelector('.container p').innerHTML = 
'<span style="color:red;"> Hi '+ name +', Apni sotti Exam diachen ?</span>';
}






} )

















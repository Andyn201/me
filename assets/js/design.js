// DOM
const editor = document.getElementById('editor');


// Elements
const section = document.getElementById('section');
const text = document.getElementById('text');
const image = document.getElementById('image');
const video = document.getElementById('video');
const input = document.getElementById('input');
const button = document.getElementById('button');


// Section

sectionCount = 0;

section.addEventListener("click", function(){
    

    sectionCount++;


    let new_section = document.createElement("section");  
    new_section.style.background = "blue";
    new_section.style.width = "100%";
    new_section.style.height = "50px";
    editor.appendChild(new_section);              
    
});




// Text
section.addEventListener("click", function(){
    
});



// Image
section.addEventListener("click", function(){
    
});



// Video
section.addEventListener("click", function(){
    
});



// Input
section.addEventListener("click", function(){
    
});




// Button
section.addEventListener("click", function(){
    
});





window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Ogres: "Why did you come?"', 
                   'Momotaro: "I came to subdue you!"'];
    nextbtn.addEventListener("click", function() {
        if(linenum<2){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "../scene7-ab.html";
        }
    });
};
window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Grandma: "Momotaro, bring this with you."', 
                   'Momotaro: "What is this?"', 
                   'Grandma: "This is millet dumplings. You\'ll feel better after eating this."', 
                   'Momotaro: "Thank you!"', 
                   'Grandpa, Grandma: "Be careful!"', 
                   'Momotaro: "I\'m going!"'];
    nextbtn.addEventListener("click", function() {
        if(linenum<6){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "../scene5-a.html";
        }
    });
};
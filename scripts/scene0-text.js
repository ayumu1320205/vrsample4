window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['His name is Momotaro because he was born from a peach.'];
    nextbtn.addEventListener("click", function() {
        if(linenum<1){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "https://ayumu1320205.github.io/vrsample4/scene1.html";
        }
    });
};

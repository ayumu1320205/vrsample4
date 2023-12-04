window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['BAD END...'];
    
    nextbtn.addEventListener("click", function() {
        if(linenum<1){
            text.setAttribute('text', "align: center; value: " + lines[linenum] + ";");
            linenum++;
        }
    });
};
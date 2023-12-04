window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Momotaro: "This is millet dumplings. Here you are."', 
                   'Dog, Monkey, Pheasant: "Thank you!"'];
    nextbtn.addEventListener("click", function() {
        if(linenum<2){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "../scene6-ba.html";
        }
    });
};
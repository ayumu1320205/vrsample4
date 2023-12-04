window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Pheasant: "Momotaro, we want to help you defend the ogres too."', 
                   'Momotaro: "Really? Thank you!"', 
                   'Momotaro developed a strong bond with them through this school life.'];
    nextbtn.addEventListener("click", function() {
        if(linenum<3){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "https://ayumu1320205.github.io/vrsample4/scene4-ba.html";
        }
    });
};
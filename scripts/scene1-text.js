window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Everyone was troubled by the Ogres which plagued the village.'];
    nextbtn.addEventListener("click", function() {
        if(linenum<1){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "https://ayumu1320205.github.io/vrsample4/scene2.html";
        }
    });
};

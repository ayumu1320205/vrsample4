window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Then they offered many treasures to Momotaro.'];
    
    text.setAttribute('text', 'value: Ogres: "We\'re sorry! Please forgive us! We promise that we\'ll never do bad things again and we\'ll return everything we stole.";');
    
    nextbtn.addEventListener("click", function() {
        if(linenum<1){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "https://ayumu1320205.github.io/vrsample4/scene10-aa.html";
        }
    });
};
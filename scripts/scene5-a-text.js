window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    const choises = document.querySelector("#choises");
    const choiseA = document.getElementById("choiseA");
    const choiseB = document.getElementById("choiseB");
    console.log(choises.getAttribute("visible"));
    choises.setAttribute("visible", false);
    console.log(choises.getAttribute("visible"));

    let linenum = 0;
    const lines = ['Momotaro: "This is millet dumplings."', 
                   'Monkey: "If you give us some millet dumplings, we\'ll follow you."', 
                   'Dog, Monkey, Pheasant: "Thank you!"', 
                   'The dog, the monkey and the pheasant became Momotaro\'s companions.', 
                   'Dog, Monkey, Pheasant: "That\'s too bad."', 
                   'They left sadly.'];
    
    let cflag = false;

    nextbtn.addEventListener("click", function() {
        if(linenum<1){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else if(linenum==1){
            cflag = true;
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            choises.setAttribute("visible", true);
        }else if(linenum==3){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum+=3;
        }else if(linenum==5){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum+=2;
        }else if(linenum==6){
            location.href = "../scene6-aa.html";
        }else{
            location.href = "../scene6-ab.html";
        }
    });

    choiseA.addEventListener("click", function() {
        if(cflag){
            if(linenum==1){
                choises.setAttribute("visible", false);
                cflag = false;
                linenum++;
                text.setAttribute('text', "value: " + lines[linenum] + ";");
                linenum++;
            }
        }
    });

    choiseB.addEventListener("click", function() {
        if(cflag){
            if(linenum==1){
                choises.setAttribute("visible", false);
                cflag = false;
                linenum+=3;
                text.setAttribute('text', "value: " + lines[linenum] + ";");
                linenum++;
            }
        }
    });
};

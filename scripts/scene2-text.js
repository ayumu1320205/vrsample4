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
    const lines = ['Grandpa: "Many people are in trouble."', 
                    'Momotaro: "I will defeat the demon."', 
                    'Grandma: "How do you kill Ogres?"', 
                    'Momotaro: "What will I do at school?"'];
    
    let cflag = false;

    nextbtn.addEventListener("click", function() {
        if(linenum<2){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else if(linenum==2){
            cflag = true;
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            choises.setAttribute("visible", true);
        }
    });

    choiseA.addEventListener("click", function() {
        if(cflag){
            if(linenum==2){
                location.href = "../scene4-a.html";
            }else if(linenum==3){
                location.href = "../scene3-ba.html";
            }
        }
    });

    choiseB.addEventListener("click", function() {
        if(cflag){
            if(linenum==2){
                choiseA.setAttribute('text', "value: I'll make friends there!");
                choiseB.setAttribute('text', "value: I will learn ogres!");
                linenum++;
                text.setAttribute('text', "value: " + lines[linenum] + ";");
            }else if(linenum==3){
                location.href = "../scene3-bb.html";
            }
            
        }
    });
};

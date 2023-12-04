window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Grandpa and grandma saw him off and he headed off to exterminate the ogres.', 
                   'Momotaro: "I have a herb for the ogre\'s weakness. I\'m all set!"'];
    nextbtn.addEventListener("click", function() {
        if(linenum<2){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "https://ayumu1320205.github.io/vrsample4/scene6-bb.html";
        }
    });
};
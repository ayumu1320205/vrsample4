window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Ogres: "Why did you come?"', 
                   'Momotaro: "We came to subdue you!"', 
                   'The pheasant pecked at Ogre\'s heads, the monkey scratched their faces, the dog bit them on the leg, and Momo-taro swung his sword at them.'];
    nextbtn.addEventListener("click", function() {
        if(linenum<3){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "https://ayumu1320205.github.io/vrsample4/scene9-aa.html";
        }
    });
};
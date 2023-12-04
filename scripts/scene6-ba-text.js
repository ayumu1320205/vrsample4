window.onload = function(){
    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['Ogres: "Why did you come?"', 
                   'Momotaro: "We came to subdue you!"', 
                   'The pheasant pecked at ogre\'s heads, the monkey scratched their faces, the dog bitthem on the leg, and Momo-taro swung his sword at them.', 
                   'They toyed with the ogres with their wonderful cooperation play.'];
    nextbtn.addEventListener("click", function() {
        if(linenum<4){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            linenum++;
        }else{
            location.href = "../scene9-aa.html";
        }
    });
};
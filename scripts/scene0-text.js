window.onload = function(){
    const scene = document.querySelector('a-scene');

    if (scene.hasLoaded) {
        scene.enterVR();
    } else {
        scene.addEventListener('loaded', function(){
            scene.enterVR();
        });
    }

    const nextbtn = document.getElementById("nextbtn");
    const text = document.getElementById("text");
    let linenum = 0;
    const lines = ['His name is Momotaro because he was born from a peach.'];
    nextbtn.addEventListener("click", function() {
        if(linenum<1){
            text.setAttribute('text', "value: " + lines[linenum] + ";");
            var ss = new SpeechSynthesisUtterance();
            ss.lang = "en-US";
            ss.volume = 1.0;
            ss.rate = 1.0;
            ss.pitch = 1.0;

            ss.text=lines[linenum];
            speechSynthesis.speak(ss);

            linenum++;
        }else{
            location.href = "https://ayumu1320205.github.io/vrsample4/scene1.html";
        }
    });
};

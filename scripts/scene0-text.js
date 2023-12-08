window.onload = function(){
    const nextbtn = document.querySelector("#nextbtn");
    const micbtn = document.querySelector("#micbtn");
    const text = document.querySelector("#text");

    let currentScene = "scene0";

    const scene0 = document.querySelector("#scene0");
    const scene1 = document.querySelector("#scene1");
    const scene2 = document.querySelector("#scene2");
    const scene3_ba = document.querySelector("#scene3-ba");
    const scene3_bb = document.querySelector("#scene3-bb");
    const scene4_a = document.querySelector("#scene4-a");
    const scene4_ba = document.querySelector("#scene4-ba");
    const scene4_bb = document.querySelector("#scene4-bb");
    const scene5_a = document.querySelector("#scene5-a");
    const scene5_ba = document.querySelector("#scene5-ba");
    const scene6_aa = document.querySelector("#scene6-aa");
    const scene6_ab = document.querySelector("#scene6-ab");
    const scene6_ba = document.querySelector("#scene6-ba");
    const scene6_bb = document.querySelector("#scene6-bb");
    const scene7_ab = document.querySelector("#scene7-ab");
    const scene7_bb = document.querySelector("#scene7-bb");
    const scene8_bb = document.querySelector("#scene8-bb");
    const scene9_aa = document.querySelector("#scene9-aa");
    const scene9_bb = document.querySelector("#scene9-bb");
    const scene10_aa = document.querySelector("#scene10-aa");
    const scene10_ab = document.querySelector("#scene10-ab");
    const scene10_bb = document.querySelector("#scene10-bb");
    const choises = document.querySelector("#choises");
    const choiseA = document.querySelector("#choiseA");
    const choiseB = document.querySelector("#choiseB");
    const result = document.querySelector("#result");

    scene1.setAttribute("visible", false);
    scene2.setAttribute("visible", false);
    scene3_ba.setAttribute("visible", false);
    scene3_bb.setAttribute("visible", false);
    scene4_a.setAttribute("visible", false);
    scene4_ba.setAttribute("visible", false);
    scene4_bb.setAttribute("visible", false);
    scene5_a.setAttribute("visible", false);
    scene5_ba.setAttribute("visible", false);
    scene6_aa.setAttribute("visible", false);
    scene6_ab.setAttribute("visible", false);
    scene6_ba.setAttribute("visible", false);
    scene6_bb.setAttribute("visible", false);
    scene7_ab.setAttribute("visible", false);
    scene7_bb.setAttribute("visible", false);
    scene8_bb.setAttribute("visible", false);
    scene9_aa.setAttribute("visible", false);
    scene9_bb.setAttribute("visible", false);
    scene10_aa.setAttribute("visible", false);
    scene10_ab.setAttribute("visible", false);
    scene10_bb.setAttribute("visible", false);
    choises.setAttribute("visible", false);
    result.setAttribute("visible", false);
    micbtn.setAttribute("visible", false);
    
    let linenum = 0;
    const text_scene0 = 'Once upon a time, there lived an old couple and a healthy boy in a small village.';
    const lines_scene0 = ['His name is Momotaro because he was born from a peach.'];
    const text_scene1 = 'At that time, in the village...';
    const lines_scene1 = ['Everyone was troubled by the ogres which plagued the village.'];
    const text_scene2 = 'Grandma: "Recently ogres have been stealing money and food from the village."';
    const lines_scene2 = ['Grandpa: "Many people are in trouble."', 
                          'Momotaro: "I will defeat the ogres."', 
                          'Grandma: "How do you kill ogres?"', 
                          'Momotaro: "What will I do at school?"'];
    const text_scene3_ba = 'Momotaro made friends with a dog, a monkey and a pheasant at school.';
    const lines_scene3_ba = ['Pheasant: "Momotaro, we want to help you defend the ogres too."', 
                            'Momotaro: "Really? Thank you!"', 
                            'Momotaro developed a strong bond with them through this school life.'];
    const text_scene3_bb = 'Momotaro learned about the ecology and weaknesses of ogres at school.';
    const lines_scene3_bb = ['Momotaro: "I get it! Ogres don\'t like the smell of this herb! Use this to exterminate them."'];
    const text_scene4_a = 'Momotaro trained hard and became the strongest boy in that village.';
    const lines_scene4_a = ['Grandma: "Momotaro, bring this with you."', 
                            'Momotaro: "What is this?"', 
                            'Grandma: "This is millet dumplings. You\'ll feel better after eating this."', 
                            'Momotaro: "Thank you!"', 
                            'Grandpa, Grandma: "Be careful!"', 
                            'Momotaro: "I\'m going!"'];
    const text_scene4_ba = 'Momotaro got some millet dumplings from grandpa and grandma and he headed off to defeat the ogres.';
    const text_scene4_bb = 'Momotaro studied hard and became the smartest boy in the village.';
    const lines_scene4_bb = ['Grandpa and grandma saw him off and he headed off to exterminate the ogres.', 
                             'Momotaro: "I have a herb for the ogre\'s weakness. I\'m all set!"'];
    const text_scene5_a = 'Dog: "Hey, What do you have? It smells delicious."';
    const lines_scene5_a = ['Momotaro: "This is millet dumplings."', 
                            'Monkey: "If you give us some millet dumplings, we\'ll follow you."', 
                            'Dog, Monkey, Pheasant: "Thank you!"', 
                            'The dog, the monkey and the pheasant became Momotaro\'s companions.', 
                            'Dog, Monkey, Pheasant: "That\'s too bad."', 
                            'They left sadly.'];
    const text_scene5_ba = 'Dog: "Hey, What do you have? It smells delicious."';
    const lines_scene5_ba = ['Momotaro: "This is millet dumplings. Here you are."', 
                             'Dog, Monkey, Pheasant: "Thank you!"'];
    const text_scene6_aa = 'When they arrived at Ogre Island, ogres appeared.';
    const lines_scene6_aa = ['Ogres: "Why did you come?"', 
                             'Momotaro: "We came to subdue you!"', 
                             'The pheasant pecked at ogre\'s heads, the monkey scratched their faces, the dog bit them on the leg, and Momotaro swung his sword at them.'];
    const text_scene6_ab = 'When Momotaro arrived at Ogre Island, ogres appeared.';
    const lines_scene6_ab = ['Ogres: "Why did you come?"', 
                             'Momotaro: "I came to subdue you!"'];
    const text_scene6_ba = 'When they arrived at Ogre Island, ogres appeared.';
    const lines_scene6_ba = ['Ogres: "Why did you come?"', 
                             'Momotaro: "We came to subdue you!"', 
                             'The pheasant pecked at ogre\'s heads, the monkey scratched their faces, the dog bitthem on the leg, and Momotaro swung his sword at them.', 
                             'They toyed with the ogres with their wonderful cooperation play.'];
    const text_scene6_bb = 'When Momotaro arrived at Ogre Island, ogres appeared.';
    const lines_scene6_bb = ['Ogres: "Why did you come?"', 
                             'Momotaro: "I came to subdue you!"'];
    const text_scene7_ab = 'He attacked the ogres, but was overwhelmed by the sheer number of ogres.';
    const lines_scene7_ab = ['Momotaro: "I need to get out of here!"'];
    const text_scene7_bb = 'He attacked the ogres, but was overwhelmed by the sheer number of ogres.';
    const text_scene8_bb = 'So he threw herbs at the ogres.';
    const lines_scene8_bb = ['Ogres: "Yikes! What is that smell!"'];
    const text_scene9_aa = 'Ogres: "We\'re sorry! Please forgive us! We promise that we\'ll never do bad things again and we\'ll return everything we stole."';
    const lines_scene9_aa = ['Then they offered many treasures to Momotaro.'];
    const text_scene9_bb = 'Ogres: "We\'re sorry! Please forgive us! We promise that we\'ll never do bad things again and we\'ll return everything we stole."';
    const lines_scene9_bb = ['Then they offered many treasures to Momotaro.'];
    const text_scene10_aa = 'Momotaro and his followers filled treasure and returned home, where they lived happily ever after.';
    const lines_scene10_aa = ['THE END'];
    const text_scene10_ab = 'Momotaro regretted that he had given the animals millet dumplings at that time.';
    const lines_scene10_ab = ['BAD END...'];
    const text_scene10_bb = 'Momotaro filled treasure and returned home, where they lived happily ever after.';
    const lines_scene10_bb = ['THE END'];
    
    let cflag = false;

    var ss = new SpeechSynthesisUtterance();
    ss.lang = "en-US";
    ss.volume = 1.0;
    ss.rate = 1.0;
    ss.pitch = 1.0;

    ss.text = text_scene0;
    speechSynthesis.speak(ss);

    let rec = new webkitSpeechRecognition();
    rec.continuous = true;
    rec.interimResults = false;
    rec.lang = 'en-US';
    
    let stopped = true;


    nextbtn.addEventListener("click", function() {
        switch(currentScene){
            case "scene0":
                if(linenum<lines_scene0.length){
                    text.setAttribute('text', "value: " + lines_scene0[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene0[linenum];
                    speechSynthesis.speak(ss);
                    
                    linenum++;
                }else{
                    scene0.setAttribute("visible", false);
                    scene1.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene1 + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene1;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene1";
                }
                break;
            case "scene1":
                if(linenum<lines_scene1.length){
                    text.setAttribute('text', "value: " + lines_scene1[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene1[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene1.setAttribute("visible", false);
                    scene2.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene2 + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene2;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene2";
                }
                break;
            case "scene2":
                if(linenum<2){
                    text.setAttribute('text', "value: " + lines_scene2[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene2[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else if(linenum==2 && cflag==false){
                    cflag = true;
                    text.setAttribute('text', "value: " + lines_scene2[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene2[linenum];
                    speechSynthesis.speak(ss);
                    choises.setAttribute("visible", true);
                    micbtn.setAttribute("visible", true);
                    nextbtn.setAttribute("visible", false);
                }
                break;
            case "scene3_ba":
                if(linenum<lines_scene3_ba.length){
                    text.setAttribute('text', "value: " + lines_scene3_ba[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene3_ba[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene3_ba.setAttribute("visible", false);
                    scene4_ba.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene4_ba + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene4_ba;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene4_ba";
                }
                break;
            case "scene3_bb":
                if(linenum<lines_scene3_bb.length){
                    text.setAttribute('text', "value: " + lines_scene3_bb[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene3_bb[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene3_bb.setAttribute("visible", false);
                    scene4_bb.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene4_bb + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene4_bb;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene4_bb";
                }
                break;
            case "scene4_a":
                if(linenum<lines_scene4_a.length){
                    text.setAttribute('text', "value: " + lines_scene4_a[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene4_a[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene4_a.setAttribute("visible", false);
                    scene5_a.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene5_a + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene5_a;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene5_a";
                }
                break;
            case "scene4_ba":
                scene4_ba.setAttribute("visible", false);
                scene5_ba.setAttribute("visible", true);
                
                text.setAttribute('text', "value: " + text_scene5_ba + ";");
                var ss = new SpeechSynthesisUtterance();
                ss.lang = "en-US";
                ss.volume = 1.0;
                ss.rate = 1.0;
                ss.pitch = 1.0;

                ss.text=text_scene5_ba;
                speechSynthesis.speak(ss);

                linenum=0;
                currentScene="scene5_ba";
                break;
            case "scene4_bb":
                if(linenum<lines_scene4_bb.length){
                    text.setAttribute('text', "value: " + lines_scene4_bb[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene4_bb[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene4_bb.setAttribute("visible", false);
                    scene6_bb.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene6_bb + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene6_bb;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene6_bb";
                }
                break;
            case "scene5_a":
                if(linenum<1){
                    text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene5_a[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else if(linenum==1 && cflag==false){
                    cflag = true;
                    text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene5_a[linenum];
                    speechSynthesis.speak(ss);

                    choises.setAttribute("visible", true);
                    micbtn.setAttribute("visible", true);
                    nextbtn.setAttribute("visible", false);

                }else if(linenum==3){
                    text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene5_a[linenum];
                    speechSynthesis.speak(ss);

                    linenum+=3;
                }else if(linenum==5){
                    text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene5_a[linenum];
                    speechSynthesis.speak(ss);

                    linenum+=2;
                }else if(linenum==6){
                    scene5_a.setAttribute("visible", false);
                    scene6_aa.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene6_aa + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene6_aa;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene6_aa";
                }else if(linenum==7){
                    scene5_a.setAttribute("visible", false);
                    scene6_ab.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene6_ab + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene6_ab;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene6_ab";
                }
                break;
            case "scene5_ba":
                if(linenum<lines_scene5_ba.length){
                    text.setAttribute('text', "value: " + lines_scene5_ba[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene5_ba[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene5_ba.setAttribute("visible", false);
                    scene6_ba.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene6_ba + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene6_ba;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene6_ba";
                }
                break;
            case "scene6_aa":
                if(linenum<lines_scene6_aa.length){
                    text.setAttribute('text', "value: " + lines_scene6_aa[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene6_aa[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene6_aa.setAttribute("visible", false);
                    scene9_aa.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene9_aa + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene9_aa;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene9_aa";
                }
                break;
            case "scene6_ab":
                if(linenum<lines_scene6_ab.length){
                    text.setAttribute('text', "value: " + lines_scene6_ab[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene6_ab[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene6_ab.setAttribute("visible", false);
                    scene7_ab.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene7_ab + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene7_ab;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene7_ab";
                }
                break;
            case "scene6_ba":
                if(linenum<lines_scene6_ba.length){
                    text.setAttribute('text', "value: " + lines_scene6_ba[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene6_ba[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene6_ba.setAttribute("visible", false);
                    scene9_aa.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene9_aa + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene9_aa;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene9_aa";
                }
                break;
            case "scene6_bb":
                if(linenum<lines_scene6_bb.length){
                    text.setAttribute('text', "value: " + lines_scene6_bb[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene6_bb[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene6_bb.setAttribute("visible", false);
                    scene7_bb.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene7_bb + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene7_bb;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene7_bb";
                }
                break;
            case "scene7_ab":
                if(linenum<lines_scene7_ab.length){
                    text.setAttribute('text', "value: " + lines_scene7_ab[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene7_ab[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene7_ab.setAttribute("visible", false);
                    scene10_ab.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene10_ab + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene10_ab;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene10_ab";
                }
                break;
            case "scene7_bb":
                scene7_bb.setAttribute("visible", false);
                scene8_bb.setAttribute("visible", true);
                
                text.setAttribute('text', "value: " + text_scene8_bb + ";");
                var ss = new SpeechSynthesisUtterance();
                ss.lang = "en-US";
                ss.volume = 1.0;
                ss.rate = 1.0;
                ss.pitch = 1.0;

                ss.text=text_scene8_bb;
                speechSynthesis.speak(ss);

                linenum=0;
                currentScene="scene8_bb";
                break;
            case "scene8_bb":
                if(linenum<lines_scene8_bb.length){
                    text.setAttribute('text', "value: " + lines_scene8_bb[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene8_bb[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene8_bb.setAttribute("visible", false);
                    scene9_bb.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene9_bb + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene9_bb;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene9_bb";
                }
                break;
            case "scene9_aa":
                if(linenum<lines_scene9_aa.length){
                    text.setAttribute('text', "value: " + lines_scene9_aa[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene9_aa[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene9_aa.setAttribute("visible", false);
                    scene10_aa.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene10_aa + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene10_aa;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene10_aa";
                }
                break;
            case "scene9_bb":
                if(linenum<lines_scene9_bb.length){
                    text.setAttribute('text', "value: " + lines_scene9_bb[linenum] + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=lines_scene9_bb[linenum];
                    speechSynthesis.speak(ss);

                    linenum++;
                }else{
                    scene9_bb.setAttribute("visible", false);
                    scene10_bb.setAttribute("visible", true);
                    
                    text.setAttribute('text', "value: " + text_scene10_bb + ";");
                    var ss = new SpeechSynthesisUtterance();
                    ss.lang = "en-US";
                    ss.volume = 1.0;
                    ss.rate = 1.0;
                    ss.pitch = 1.0;

                    ss.text=text_scene10_bb;
                    speechSynthesis.speak(ss);

                    linenum=0;
                    currentScene="scene10_bb";
                }
                break;
            
            case "scene10_aa":
                if(linenum<lines_scene10_aa.length){
                    text.setAttribute('text', "align: center; value: " + lines_scene10_aa[linenum] + ";");
                    linenum++;
                }
                break;
            case "scene10_ab":
                if(linenum<lines_scene10_ab.length){
                    text.setAttribute('text', "align: center; value: " + lines_scene10_ab[linenum] + ";");
                    linenum++;
                }
                break;
            case "scene10_bb":
                if(linenum<lines_scene10_bb.length){
                    text.setAttribute('text', "align: center; value: " + lines_scene10_bb[linenum] + ";");
                    linenum++;
                }
                break;
        }
    });

    choiseA.addEventListener("click", function() {
        if(cflag){
            switch(currentScene){
                case "scene2":
                    if(linenum==2){
                        scene2.setAttribute("visible", false);
                        scene4_a.setAttribute("visible", true);
                        choises.setAttribute("visible", false);
                        choiseA.setAttribute('text', "value: OK! Join me!");
                        choiseB.setAttribute('text', "value: I'm sorry, I can't give you that.");
                        result.setAttribute("visible", false);
                        result.setAttribute('text', "value: recognizing...");
                        micbtn.setAttribute("visible", false);
                        nextbtn.setAttribute("visible", true);
                        
                        text.setAttribute('text', "value: " + text_scene4_a + ";");
                        var ss = new SpeechSynthesisUtterance();
                        ss.lang = "en-US";
                        ss.volume = 1.0;
                        ss.rate = 1.0;
                        ss.pitch = 1.0;

                        ss.text=text_scene4_a;
                        speechSynthesis.speak(ss);

                        linenum=0;
                        currentScene="scene4_a";
                        cflag=false;
                    }else if(linenum==3){
                        scene2.setAttribute("visible", false);
                        scene3_ba.setAttribute("visible", true);
                        choises.setAttribute("visible", false);
                        result.setAttribute("visible", false);
                        result.setAttribute('text', "value: recognizing...");
                        micbtn.setAttribute("visible", false);
                        nextbtn.setAttribute("visible", true);
                        
                        text.setAttribute('text', "value: " + text_scene3_ba + ";");
                        var ss = new SpeechSynthesisUtterance();
                        ss.lang = "en-US";
                        ss.volume = 1.0;
                        ss.rate = 1.0;
                        ss.pitch = 1.0;

                        ss.text=text_scene3_ba;
                        speechSynthesis.speak(ss);

                        linenum=0;
                        currentScene="scene3_ba";
                        cflag=false;
                    }
                    break;
                case "scene5_a":
                    if(linenum==1){
                        choises.setAttribute("visible", false);
                        result.setAttribute("visible", false);
                        result.setAttribute('text', "value: recognizing...");
                        micbtn.setAttribute("visible", false);
                        nextbtn.setAttribute("visible", true);

                        cflag = false;
                        linenum++;
                        text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                        var ss = new SpeechSynthesisUtterance();
                        ss.lang = "en-US";
                        ss.volume = 1.0;
                        ss.rate = 1.0;
                        ss.pitch = 1.0;

                        ss.text=lines_scene5_a[linenum];
                        speechSynthesis.speak(ss);

                        linenum++;
                    }
                    break;
            }
        }
    });

    choiseB.addEventListener("click", function() {
        if(cflag){
            switch(currentScene){
                case "scene2":
                    if(linenum==2){
                        choiseA.setAttribute('text', "value: I'll make friends there!");
                        choiseB.setAttribute('text', "value: I will learn hard!");
                        result.setAttribute("visible", false);
                        result.setAttribute('text', "value: recognizing...");
                        
                        linenum++;
                        text.setAttribute('text', "value: " + lines_scene2[linenum] + ";");
                        var ss = new SpeechSynthesisUtterance();
                        ss.lang = "en-US";
                        ss.volume = 1.0;
                        ss.rate = 1.0;
                        ss.pitch = 1.0;

                        ss.text=lines_scene2[linenum];
                        speechSynthesis.speak(ss);

                    }else if(linenum==3){
                        scene2.setAttribute("visible", false);
                        scene3_bb.setAttribute("visible", true);
                        choises.setAttribute("visible", false);
                        result.setAttribute("visible", false);
                        result.setAttribute('text', "value: recognizing...");
                        micbtn.setAttribute("visible", false);
                        nextbtn.setAttribute("visible", true);
                        
                        text.setAttribute('text', "value: " + text_scene3_bb + ";");
                        var ss = new SpeechSynthesisUtterance();
                        ss.lang = "en-US";
                        ss.volume = 1.0;
                        ss.rate = 1.0;
                        ss.pitch = 1.0;

                        ss.text=text_scene3_bb;
                        speechSynthesis.speak(ss);

                        linenum=0;
                        currentScene="scene3_bb";
                        cflag=false;
                    }
                    break;
                case "scene5_a":
                    if(linenum==1){
                        choises.setAttribute("visible", false);
                        result.setAttribute("visible", false);
                        result.setAttribute('text', "value: recognizing...");
                        micbtn.setAttribute("visible", false);
                        nextbtn.setAttribute("visible", true);

                        cflag = false;
                        linenum+=3;
                        text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                        var ss = new SpeechSynthesisUtterance();
                        ss.lang = "en-US";
                        ss.volume = 1.0;
                        ss.rate = 1.0;
                        ss.pitch = 1.0;

                        ss.text=lines_scene5_a[linenum];
                        speechSynthesis.speak(ss);

                        linenum++;
                    }
                    break;
            }
        }
    });

    micbtn.addEventListener("click", function() {
        if(cflag){
            switch(currentScene){
                case "scene2":
                    if(linenum==2 || linenum==3){
                        if (stopped == true) {
                            result.setAttribute("visible", true);
                            rec.start();
                        } else {
                            rec.stop();
                        }
                    }
                    break;
                case "scene5_a":
                    if(linenum==1){
                        if (stopped == true) {
                            result.setAttribute("visible", true);
                            rec.start();
                        } else {
                            rec.stop();
                        }
                    }
                    break;
            }
        }
    });

    rec.onstart = function () { 
        console.log('on start');
        micbtn.setAttribute('text', "value: micOFF;");
    };
    
    rec.onend = function () { 
        console.log('on end');
        micbtn.setAttribute('text', "value: micON;");
    };
    

    rec.onresult = function (e) {
        rec.stop();
        for (let i = e.resultIndex; i < e.results.length; i++) {
            if(e.results[i].isFinal){
                console.log(e);
                let resulttext = e.results[i][0].transcript;
                console.log(resulttext);

                if(cflag){
                    switch(currentScene){
                        case "scene2":
                            if(linenum==2){
                                let regexpA =  /train.*get stronger/;
                                let regexpB = /going.*school/;
                                if(regexpA.test(resulttext)){
                                    scene2.setAttribute("visible", false);
                                    scene4_a.setAttribute("visible", true);
                                    choises.setAttribute("visible", false);
                                    choiseA.setAttribute('text', "value: OK! Join me!");
                                    choiseB.setAttribute('text', "value: I'm sorry, I can't give you that.");
                                    result.setAttribute("visible", false);
                                    result.setAttribute('text', "value: recognizing...");
                                    micbtn.setAttribute("visible", false);
                                    nextbtn.setAttribute("visible", true);
                                    
                                    text.setAttribute('text', "value: " + text_scene4_a + ";");
                                    var ss = new SpeechSynthesisUtterance();
                                    ss.lang = "en-US";
                                    ss.volume = 1.0;
                                    ss.rate = 1.0;
                                    ss.pitch = 1.0;

                                    ss.text=text_scene4_a;
                                    speechSynthesis.speak(ss);

                                    linenum=0;
                                    currentScene="scene4_a";
                                    cflag=false;

                                }else if(regexpB.test(resulttext)){
                                    choiseA.setAttribute('text', "value: I'll make friends there!");
                                    choiseB.setAttribute('text', "value: I will learn hard!");
                                    result.setAttribute("visible", false);
                                    result.setAttribute('text', "value: recognizing...");

                                    linenum++;
                                    text.setAttribute('text', "value: " + lines_scene2[linenum] + ";");
                                    var ss = new SpeechSynthesisUtterance();
                                    ss.lang = "en-US";
                                    ss.volume = 1.0;
                                    ss.rate = 1.0;
                                    ss.pitch = 1.0;

                                    ss.text=lines_scene2[linenum];
                                    speechSynthesis.speak(ss);

                                }else{
                                    result.setAttribute('text', "value: Could you say that again?;");
                                }
                            }else if(linenum==3){
                                let regexpA_A =  /make friends/;
                                let regexpA_B = /learn hard/;
                                if(regexpA_A.test(resulttext)){
                                    scene2.setAttribute("visible", false);
                                    scene3_ba.setAttribute("visible", true);
                                    choises.setAttribute("visible", false);
                                    result.setAttribute("visible", false);
                                    result.setAttribute('text', "value: recognizing...");
                                    micbtn.setAttribute("visible", false);
                                    nextbtn.setAttribute("visible", true);
                                    
                                    text.setAttribute('text', "value: " + text_scene3_ba + ";");
                                    var ss = new SpeechSynthesisUtterance();
                                    ss.lang = "en-US";
                                    ss.volume = 1.0;
                                    ss.rate = 1.0;
                                    ss.pitch = 1.0;

                                    ss.text=text_scene3_ba;
                                    speechSynthesis.speak(ss);

                                    linenum=0;
                                    currentScene="scene3_ba";
                                    cflag=false;

                                }else if(regexpA_B.test(resulttext)){
                                    scene2.setAttribute("visible", false);
                                    scene3_bb.setAttribute("visible", true);
                                    choises.setAttribute("visible", false);
                                    result.setAttribute("visible", false);
                                    result.setAttribute('text', "value: recognizing...");
                                    micbtn.setAttribute("visible", false);
                                    nextbtn.setAttribute("visible", true);
                                    
                                    text.setAttribute('text', "value: " + text_scene3_bb + ";");
                                    var ss = new SpeechSynthesisUtterance();
                                    ss.lang = "en-US";
                                    ss.volume = 1.0;
                                    ss.rate = 1.0;
                                    ss.pitch = 1.0;

                                    ss.text=text_scene3_bb;
                                    speechSynthesis.speak(ss);

                                    linenum=0;
                                    currentScene="scene3_bb";
                                    cflag=false;

                                }else{
                                    result.setAttribute('text', "value: Could you say that again?;");
                                }
                            }
                            break;
                        case "scene5_a":
                            if(linenum==1){
                                let regexp5a_A =  /OK.*oin me/;
                                let regexp5a_B = /sorry.*can't give you/;
                                if(regexp5a_A.test(resulttext)){
                                    choises.setAttribute("visible", false);
                                    result.setAttribute("visible", false);
                                    result.setAttribute('text', "value: recognizing...");
                                    micbtn.setAttribute("visible", false);
                                    nextbtn.setAttribute("visible", true);

                                    cflag = false;
                                    linenum++;
                                    text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                                    var ss = new SpeechSynthesisUtterance();
                                    ss.lang = "en-US";
                                    ss.volume = 1.0;
                                    ss.rate = 1.0;
                                    ss.pitch = 1.0;

                                    ss.text=lines_scene5_a[linenum];
                                    speechSynthesis.speak(ss);

                                    linenum++;

                                }else if(regexp5a_B.test(resulttext)){
                                    choises.setAttribute("visible", false);
                                    result.setAttribute("visible", false);
                                    result.setAttribute('text', "value: recognizing...");
                                    micbtn.setAttribute("visible", false);
                                    nextbtn.setAttribute("visible", true);

                                    cflag = false;
                                    linenum+=3;
                                    text.setAttribute('text', "value: " + lines_scene5_a[linenum] + ";");
                                    var ss = new SpeechSynthesisUtterance();
                                    ss.lang = "en-US";
                                    ss.volume = 1.0;
                                    ss.rate = 1.0;
                                    ss.pitch = 1.0;

                                    ss.text=lines_scene5_a[linenum];
                                    speechSynthesis.speak(ss);

                                    linenum++;

                                }else{
                                    result.setAttribute('text', "value: Could you say that again?;");
                                }
                            }
                            break;
                    }
                }
            }
        }
    }
    

};

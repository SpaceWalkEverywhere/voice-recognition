var speechrec = window.webkitSpeechRecognition;
var rec = new speechrec();

function start(){
    document.getElementById("textbox").innerHTML="";
    rec.start();
}
rec.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content == "take my selfie"){
        speak();
    }
}
function speak(){
    var API=window.speechSynthesis;

    document.getElementById("textbox").value.replace("take","taking");
    var speakdata=document.getElementById("textbox").value;
    speakdata.toLowerCase();
    console.log("before "+speakdata);
    var speakdata1=speakdata.replace("take","taking");
    console.log("after "+speakdata1);
    var utter=new SpeechSynthesisUtterance(speakdata1);
    API.speak(utter);
    Webcam.attach(camera);
    var n=1;
    for (var i=0;i<=5;i++){
        setTimeout(function(){
            n++;
        utterance=new SpeechSynthesisUtterance(n);
        API.speak(utterance);
        },1000);
    }
    setTimeout(function(){
        snapshot();
        save();
    },5000);
    
}
camera=document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    })
}
function save(){
    link=document.getElementById("link");
    isrc=document.getElementById("selfie").src;
    link.href=isrc;
    link.click();

}
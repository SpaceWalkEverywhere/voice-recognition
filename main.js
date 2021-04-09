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
    speak();
}
function speak(){
    var API=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value;
    var utter=new SpeechSynthesisUtterance(speakdata);
    API.speak(utter);
    Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
})

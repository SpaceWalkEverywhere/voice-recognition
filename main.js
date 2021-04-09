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
    document.getElementById("textbox").value.replace("take","taking");
    var speakdata=document.getElementById("textbox").value;
    speakdata.toLowerCase();
    console.log("before "+speakdata)
    speakdata.replace("take","taking");
    console.log("after "+speakdata);
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

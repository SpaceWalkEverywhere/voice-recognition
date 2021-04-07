var speechrec = window.webkitSpeechRecognition;
var rec = new speechrec();
function start(){
    document.getElementById("textbox").innerHTML="";
    rec.start();
}
rec.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transscript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
}

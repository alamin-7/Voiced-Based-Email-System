var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();
//var recognition2 = new speechRecognition();

var firstname = $('#firstname');
var lastname = $('#lastname');

var instruction = $('#instruction');

var content1 = '';
var content2 = '';
var i = 1;
recognition.continuous = true;
//recognition2.continuous = true;

recognition.onstart = function(){
    instruction.text("Voice Recognition is on");
}

recognition.onspeechend = function(){
    instruction.text("NO activity");
}

recognition.onerror = function(){
    instruction.text("Try again");
}

recognition.onresult = function(event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content1+=transcript;

    firstname.val(content1);
}
/*recognition2.onresult = function(event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content2+=transcript;

    lastname.val(content2);
}*/

/*$("#start-btn").click(function (event){
    if(content1.length){
        content1+='';
    }
    if(content2.length){
        content2+='';
    }
    recognition2.start();
    recognition1.start();
    recognition2.start();
})*/
function startSpeech(){
    
   /* if(content1.length){
        content1+='';
    }
     if(content2.length){
        content2+='';
    }*/
    //recognition.start();
    //  alert("hello");
      //////////////////////////////////////////
}
function textSpeak1(){
    responsiveVoice.speak('Enter your firstname');
}

function autotab(current,to){
    if (current.getAttribute && 
        current.value.length==current.getAttribute("maxlength")) {
        to.focus() 
    
        if(i == 1){
            responsiveVoice.speak('Enter your lastname');
            i++;
        }
        else if(i == 2)
        {
            responsiveVoice.speak('Enter your username');
            i++;
        }
        else if(i == 3)
        {
            responsiveVoice.speak('Enter your password');
            i++;
        }
        else
        {
            responsiveVoice.speak('confirm password');
        }
    }
        //i++;
}


/*
var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

//var textbox = $('#textbox');
var firstname = $('#firstname');
//var lastname = $('#lastname');
//var username = $('#username');
//var password = $('#password');
//var confirm_password = $('#confirm_password');

var instruction = $('#instruction');

var content = '';

recognition.continuous = true;

recognition.onstart = function(){
    instruction.text("Voice Recognition is on");
}

recognition.onspeechend = function(){
    instruction.text("NO activity");
}

recognition.onerror = function(){
    instruction.text("Try again");
}

recognition.onresult = function(event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content+=transcript;

    firstname.val(content);
} 

$("#start-btn").click(function (event){
    if(content.length){
        content+='';
    }

    recognition.start();
}) 

/*function record1() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event)
    {
        document.getElementById('firstname').value = event.results[0][0].transcript;
    }
    recognition.start();
}

function record2() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event)
    {
        document.getElementById('lastname').value = event.results[0][0].transcript;
    }
    recognition.start();
}
function record3() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event)
    {
        document.getElementById('username').value = event.results[0][0].transcript;
    }
    recognition.start();
}
function record4() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event)
    {
        document.getElementById('password').value = event.results[0][0].transcript;
    }
    recognition.start();
}
function record5() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event)
    {
        document.getElementById('password_confirm').value = event.results[0][0].transcript;
    }
    recognition.start();
}

function textSpeak1(){
    responsiveVoice.speak('Enter your firstname');
}
function textSpeak2(){
    responsiveVoice.speak('Enter your lastname');
}
function textSpeak3(){
    responsiveVoice.speak('Enter your username');
}
function textSpeak4(){
    responsiveVoice.speak('Enter your password');
}
function textSpeak5(){
    responsiveVoice.speak('Confirm your password');
}*/

                            ///////////////////
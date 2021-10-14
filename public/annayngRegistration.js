//var f = 0;
//welcome();
annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      //var message = function(result) {$("#message").text(result); }
      var commands = {
     'name *tag': function(variable) {
     // var voicelist = responciveVoice.getVoice();
      let firstname = document.getElementById("firstname");
      firstname.value = variable;
      /*let msg = document.getElementById("firstname").value;
      let speech = new SpeechSynthesisUtterance();
      //speech.lang = "en-US";  
      speech.text = msg;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
                
      window.speechSynthesis.speak(speech);*/
      //responsiveVoice.speak(document.getElementById("firstname").textcontent);
      //responsiveVoice.speak('First name');
      fname()

      },

     'lastname *tag': function(variable) {
      let lastname = document.getElementById("lastname");
      lastname.value = variable; 
      lname();
      },

      'username *tag': function(variable) {
      let username = document.getElementById("username");
      username.value = variable.toLowerCase().concat("@gmail.com"); 
      uname();
      },

     'password *tag': function(variable) {
      let password = document.getElementById("password");
      password.value = variable; 
      },

     'confirm *tag': function(variable) {
      let password_confirm = document.getElementById("password_confirm");
      password_confirm.value = variable; 
      },

      'submit *tag': function() {
         //let registration = document.getElementById("registration");
         let submit = document.getElementById("submit");
        // alert("hello");
         //submit.trigger();
         //registration.remove();
         $('#submit').trigger('click');
      },

      'test *tag': function()
      {
        let test = document.getElementById("test");
        alert("Hello");
        $('#test').trigger('click');


        /*$(".link-button").click(function () {
        window.location.href = $(this).data('href');
        });*/
        /*alert("Hello");
        $(".waitingTime .button").click(function () {
        window.location.href = "<?php echo URL::to('/dashboard'); ?>";
        });
        alert("H");*/
      },

      'from *tag': function(variable) {
      	//alert("Hello");
      let sender = document.getElementById("sender");
      sender.value = variable.toLowerCase().concat("@gmail.com"); 
      Sender();
      },

      'to *tag': function(variable) {
      //	alert("h");
      let reciver = document.getElementById("reciver");
      reciver.value = variable.toLowerCase().concat("@gmail.com");; 
      To();
      },

      'subject *tag': function(v) {
      let subject = document.getElementById("subject");
      subject.value = v; 
      Subject();
      },
      'message *tag': function(v) {
      let message = document.getElementById("message");
      message.value = v; 
    
   	//*********************************************//
    //alert("h");
   /* var recognition = new webkitSpeechRecognition(); //get new instance
    recognition.start(); //start it
    recognition.onend = function() { //a function to restart it when it stops
	  recognition.start();
    }
    recognition.onresult = function(event) { 
    var whatWasHeard = event.results[0][0].transcript; //get what was heard    
    //document.body.innerHTML = whatWasHeard; //original version. Update below
  	document.getElementById("message").innerHTML = whatWasHeard; //updated version
    }*/

       //alert("Hello");

    // annyang.addCallback('result',function(whatWasHeard) { document.getElementById("message").value = whatWasHeard[0]; });
     //message();
    // recognition.start();
     msg();

     /*var speechRecognition = window.webkitSpeechRecognition;
     var recognition = new speechRecognition();
     var content = '';
     var message = $('#message');
     recognition.continuous = true;

     recognition.onresult = function(event){
	var current = event.resultIndex;

	var transcript = even.results[current][0].transcript;

	content+=transcript;

	message.val(content);
    }

    if (Content.length) {
     Content += ' ';
    }
   // alert("Hello");
   // let message = document.getElementById("message");
   // message.value = variable;
  //  msg(); 
*/
    /* let m = document.getElementById("m");
        // alert("hello");
         //submit.trigger();
         //registration.remove();
         $('#m').trigger('click');
        // alert("H");
        // message();

        	//alert("Hello");
var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var message = $('#message');

//var instruction = $('#instruction');

var content = '';

recognition.continuous = true;

recognition.onstart = function(){
	m.text("Voice Recognition is on");
}

recognition.onspeechend = function(){
	m.text("NO activity");
}

recognition.onresult = function(event){
	var current = event.resultIndex;

	var transcript = event.results[current][0].transcript;

	content+=transcript;

	message.val(content);
} 

$("#m").click(function (event){
	if(content.length){
		content+='';
	}

	recognition.start();
})*/
  },

      'send *tag': function() {
         //let registration = document.getElementById("registration");
         let send = document.getElementById("send");
         //alert("hello");
         //submit.trigger();
         //registration.remove();
         $('#send').trigger('click');
      },

       'write *tag': function()
      {
        let compose = document.getElementById("compose");
        //compose.value = variable;

        alert("Hello");
        $('#compose').trigger('click');
      },
       'g *tag': function(variable)
      {
        let inbox = document.getElementById("inbox");
        //compose.value = variable;

        alert("Hello");
        $('#inbox').trigger('click');
        message();
      }
  };

  annyang.addCommands(commands);
  annyang.start();
  annyang.start({ autoRestart: true, continuous: false });
}

function fname()
{
	  let msg = document.getElementById("firstname").value;
	 // responsiveVoice.speak('First name');
	  responsiveVoice.speak(msg);
}
function lname()
{
	  let msg = document.getElementById("lastname").value;
	 // responsiveVoice.speak('First name');
	  responsiveVoice.speak(msg);
}

function uname()
{
	  let msg = document.getElementById("username").value;
	 // responsiveVoice.speak('First name');
	  responsiveVoice.speak(msg);
}

function Sender()
{
	  let msg = document.getElementById("sender").value;
	 // responsiveVoice.speak('First name');
	  responsiveVoice.speak(msg);
}
function To()
{
	  let msg = document.getElementById("reciver").value;
	 // responsiveVoice.speak('First name');
	  responsiveVoice.speak(msg);
}
function Subject()
{
	  let msg = document.getElementById("subject").value;
	 // responsiveVoice.speak('First name');
	  responsiveVoice.speak(msg);
}

function message()
{
	alert("Hello");
var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var message = $('#message');

//var instruction = $('#instruction');

var content = '';

recognition.continuous = true;


recognition.onresult = function(event){
	var current = event.resultIndex;

	var transcript = event.results[current][0].transcript;

	content+=transcript;

	message.val(content);
} 

$("#m").click(function (event){
	if(content.length){
		content+='';
	}

	recognition.start();
})
}
function msg()
{
	 let msg = document.getElementById("message").value;
	 // responsiveVoice.speak('First name');
	  responsiveVoice.speak(msg);
}
function welcome()
{
  responsiveVoice.speak('if you do not have account then say resgister. if have have then say login' );
}


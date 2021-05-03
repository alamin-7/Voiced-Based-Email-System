

annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      var commands = {
     'name *tag': function(variable) {
     // var voicelist = responciveVoice.getVoice();
      let firstname = document.getElementById("first-name");
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

      'google *tag': function()
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
      let reciver = document.getElementById("sender");
      sender.value = variable.toLowerCase().concat("@gmail.com"); 
      Sender();
      },

      'to *tag': function(variable) {
      let reciver = document.getElementById("reciver");
      reciver.value = variable.toLowerCase().concat("@gmail.com");; 
      To();
      },

      'subject *tag': function(variable) {
      let subject = document.getElementById("subject");
      subject.value = variable; 
      Subject();
      },
      'message *tag': function(variable) {

      	//*********************************************//
        alert("Hello");
    // recognition.start();

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
    }*/

     let message = document.getElementById("message");
     message.value = variable; 
    },

      'send *tag': function() {
         //let registration = document.getElementById("registration");
         let send = document.getElementById("send");
         //alert("hello");
         //submit.trigger();
         //registration.remove();
         $('#send').trigger('click');
      },

       'hello *tag': function(variable)
      {
        let compose = document.getElementById("compose");
        //compose.value = variable;

        alert("Hello");
        $('#compose').trigger('click');
      }
  };

  annyang.addCommands(commands);
  annyang.start();
  //annyang.start({ autoRestart: true, continuous: false });
}

function fname()
{
	  let msg = document.getElementById("first-name").value;
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

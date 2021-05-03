

annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      var commands = {
      'username *tag': function(variable) {
      let username = document.getElementById("username");
      username.value = variable.toLowerCase().concat("@gmail.com");
      uname(); 
      },

     'password *tag': function(variable) {
      let password = document.getElementById("password");
      password.value = variable; 
      },

     'submit *tag': function() {
     //let registration = document.getElementById("registration");
      let login = document.getElementById("login");
      alert("hello")
      $('#login').trigger('click');
      }
   
  };

  annyang.addCommands(commands);
  annyang.start();
  //annyang.start({ autoRestart: true, continuous: false });
}

function uname()
{
    let msg = document.getElementById("username").value;
   // responsiveVoice.speak('First name');
    responsiveVoice.speak(msg);
}
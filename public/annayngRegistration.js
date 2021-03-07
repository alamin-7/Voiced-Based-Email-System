// test

annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      var commands = {
     'firstname *tag': function(variable) {
      let firstname = document.getElementById("firstname");
      firstname.value = variable; 
      },

     'lastname *tag': function(variable) {
      let lastname = document.getElementById("lastname");
      lastname.value = variable; 
      },

      'username *tag': function(variable) {
      let username = document.getElementById("username");
      username.value = variable; 
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
         let registration = document.getElementById("registration");
         registration.remove();
      }
  };

  annyang.addCommands(commands);
  annyang.start();
  //annyang.start({ autoRestart: true, continuous: false });
}


annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      var commands = {
     'name *tag': function(variable) {
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

      'register *tag': function() {
         //let registration = document.getElementById("registration");
         let submit = document.getElementById("submit");
         alert("hello");
         //submit.trigger();
         //registration.remove();
         $('#submit').trigger('click');
      },

      'last *tag': function()
      {
        let test = document.getElementById("test");
         alert("Hello");
        $('#test').trigger('click');
      },

      'to *tag': function(variable) {
      let reciver = document.getElementById("reciver");
      reciver.value = variable; 
      },
      'subject *tag': function(variable) {
      let subject = document.getElementById("subject");
      subject.value = variable; 
      },
      'message *tag': function(variable) {
        //alert("Hello");
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
      }
  };

  annyang.addCommands(commands);
  annyang.start();
  //annyang.start({ autoRestart: true, continuous: false });
}


annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      var commands = {

      'create *tag': function()
      {
        let create = document.getElementById("create");
        alert("Hello");
        $('#create').trigger('create');


        /*$(".link-button").click(function () {
        window.location.href = $(this).data('href');
        });*/
        /*alert("Hello");
        $(".waitingTime .button").click(function () {
        window.location.href = "<?php echo URL::to('/dashboard'); ?>";
        });
        alert("H");*/
      },
       'login *tag': function()
      {
        let login = document.getElementById("login");
        alert("Hello");
        $('#login').trigger('click');


        /*$(".link-button").click(function () {
        window.location.href = $(this).data('href');
        });*/
        /*alert("Hello");
        $(".waitingTime .button").click(function () {
        window.location.href = "<?php echo URL::to('/dashboard'); ?>";
        });
        alert("H");*/
      },
       'user *tag': function()
      {
        let user = document.getElementById("user");
        alert("Hello");
        $('#user').trigger('click');


        /*$(".link-button").click(function () {
        window.location.href = $(this).data('href');
        });*/
        /*alert("Hello");
        $(".waitingTime .button").click(function () {
        window.location.href = "<?php echo URL::to('/dashboard'); ?>";
        });
        alert("H");*/
      }
  };

  annyang.addCommands(commands);
  annyang.start();
  //annyang.start({ autoRestart: true, continuous: false });
}
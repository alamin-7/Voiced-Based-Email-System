annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      var commands = {
     'read *tag': function() {
      alert("Hello");
      responsiveVoice.speak('First name');

    // var voicelist = responciveVoice.getVoice();

     var oTable = document.getElementById("mytable");

//gets rows of table
     var rowLength = oTable.rows.length;

//loops through rows    
     for (var i = 0; i < rowLength; i++){

   //gets cells of current row
     var oCells = oTable.rows.item(i).cells;

   //gets amount of cells of current row
     var cellLength = oCells.length;

   //loops through each cell in current row
   for(var j = 0; j < cellLength; j++){
      /* get your cell info here */
       var cellVal = oCells.item(j).innerHTML; 
       responsiveVoice.speak(cellVal);
   }
  }
}

   
  };

  annyang.addCommands(commands);
  annyang.start();
  //annyang.start({ autoRestart: true, continuous: false });
}

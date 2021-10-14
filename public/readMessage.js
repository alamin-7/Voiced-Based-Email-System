annyang.setLanguage('en-US');
if (annyang) {
   // alert("Hello");
      var str1;
      var commands = {
     'read *tag': function() {
      alert("Hello");
      //var s.value = v;
      //responsiveVoice.speak('First name');

    // var voicelist = responciveVoice.getVoice();
      read();

    /* var oTable = document.getElementById("mytable");

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
       /*var cellVal = oCells.item(j).innerHTML; 
       if(cellVal == "coding"){
      // responsiveVoice.speak(cellVal);
         var str = oCells.item(j+1).innerHTML;
     }
   }
  }
  responsiveVoice.speak(str);*/
},

'search *tag': function(variable) {
      alert("Hello");
      let search= document.getElementById("search");
      search.value = variable; 
      str1 = search.value;
     // responsiveVoice.speak(str1);
      name(str1);
      }
  };
  annyang.addCommands(commands);
  annyang.start();
  //annyang.start({ autoRestart: true, continuous: false });
}
var s;

 function name(str2)
  {
    responsiveVoice.speak(str2);
    s = str2;
  }

function read()
{
  //var s;
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
       if(cellVal == s){
      // responsiveVoice.speak(cellVal);
         var str = oCells.item(j+1).innerHTML;
     }
   }
  }
  responsiveVoice.speak(str);
}

/*function name(str)
{
  responsiveVoice.speak(str);
}*/

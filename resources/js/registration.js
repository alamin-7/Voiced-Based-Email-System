var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

//var textbox = $('#textbox');
var firstname = $('#firstname');
var lastname = $('#lastname');
var username = $('#username');
var password = $('#password');
var confirm_password = $('#confirm_password');

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

	var transcript = even.results[current][0].transcript;

	content+=transcript;

	firstname.val(content);
} 

$("#start-btn").click(function (event){
	if(content.length){
		content+='';
	}

	recognition.start();
})
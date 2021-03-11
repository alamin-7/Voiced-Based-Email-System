<!DOCTYPE>
<html>
<head>
<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="{{ URL::asset('registration.js') }}"></script>
<script src="{{ URL::asset('annayngRegistration.js') }}"></script>
<script type="text/javascript" src="http://code.responsivevoice.org/responsivevoice.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/1.1.0/annyang.min.js"></script>
</head>
<style>
.container {
    width:100%;
    position: absolute;
    height:580px;
    background:#A9A9A9;
    }

/* 
* Header which contain your menu and date 
*/
.header {
    width:100%;
    }

/* 
* The main content of your site 
*/
.maincontent {
    width:80%;
    max-width:1000px;
    background-color: #fff;
    float:right;
    left:50%;
    height:100%;
    margin-left:-500px;
    position: absolute;
    }

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #A9A9A9;
    }

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px 18px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #000;
}

</style>

<body>
<div class="container">
<div class="header">
<ul>
  <li><a href="wip.html">Inbox Page</a></li>
  <li><a href="wip.html">Test1</a></li>
  <li><a href="wip.html">Test2</a></li>
  <li><a href="wip.html">Test3</a></li>
</ul>
</div>

<div class="container">
<div  class="maincontent">
    <h4>To:</h4>
    <input type="text" name="reciver" id="reciver"><br>
    <h4>Subject:</h4>
    <input type="text" name="subject" id="subject"><br><br>
    <textarea id="message" name="w3review" rows="10" cols="120"></textarea>
</div>
</div>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
<script src="registration.js"></script>
<script src="annayngRegistration.js"></script>
</html>

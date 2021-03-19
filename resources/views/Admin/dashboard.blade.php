<!DOCTYPE>
<html>
<head>
<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="{{ URL::asset('registration.js') }}"></script>
<script src="{{ URL::asset('annayngRegistration.js') }}"></script>
<script type="text/javascript" src="http://code.responsivevoice.org/responsivevoice.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/1.1.0/annyang.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
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
    height:10%;
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
<div class="header">
<ul>
  <li><a href="{{URL::to('/writemessage')}}">Compose</a></li>
  <li><a href="wip.html">All Catagories</a></li>
  <li><a href="wip.html">Social</a></li>
  <li><a href="wip.html">Important</a></li>
</ul>
</div>
<div class="container">
  <h4><a href="{{URL::to('/writemessage')}}">Inbox</a></h4>
  <h4><a href="{{URL::to('/writemessage')}}">Important</a></h4>
  <h4><a href="{{URL::to('/writemessage')}}">Draft</a></h4>
  <h4><a href="{{URL::to('/writemessage')}}">Sent</a></h4>
  <h4><a href="{{URL::to('/writemessage')}}">Spam</a></h4>
  <h4><a href="{{URL::to('/writemessage')}}">Trash</a></h4>

</div>
<div  class="maincontent">
<table border = "1">
<tr>
<td colspan="10" align="center">Subject</td>
<td colspan="16" align="center">Message</td>
</tr>
@foreach ($users as $user)
<tr>
<td colspan="10">{{ $user->subject }}</td>
<td colspan="16">{{ $user->message }}</td>
</tr>
@endforeach
</table>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
<script src="registration.js"></script>
<script src="annayngRegistration.js"></script>
</html>

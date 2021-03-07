<!DOCTYPE>
<html>
<head>
  <title>registration</title>
  <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet
" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="{{ URL::asset('registration.js') }}"></script>
<script src="{{ URL::asset('annayngRegistration.js') }}"></script>
<script type="text/javascript" src="http://code.responsivevoice.org/responsivevoice.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/1.1.0/annyang.min.js"></script>
</head>
<body>
<div class="container">
<div>
<form id="registration" class="form-horizontal" action=" {{url('/register')}}" method="POST">
    {{ csrf_field() }}
    <div id="legend">
      <legend class="">Register</legend>
      @if(count($errors) > 0)
      @foreach($errors->all() as $error)
      <div class="col-md-8 alert alert-danger">{{$error}}</div>
      @endforeach
      @endif

      @if(session('response'))
      <div class="col-md-8 alert alert-success">
        {{session('response')}}
      </div>
      @endif
    </div>
    <div id="fstname"class="control-group">
      <!-- Username -->
      <label class="control-label"  for="firstname">First Name</label>
      <div class="controls">
        <input type="text" id="firstname" name="firstname" placeholder="" class="input-xlarge" maxlength="5">
    </div>
    </div>
     <div class="control-group">
      <!-- Username -->
      <label class="control-label"  for="lastname">Last Name</label>
      <div class="controls">
        <input type="text" id="lastname" name="lastname" onkeyup="autotab(this,document.registration.username)" placeholder="" class="input-xlarge" maxlength="5">
      </div>
    </div>

    <div class="control-group">
      <!-- Username -->
      <label class="control-label"  for="username">User Name</label>
      <div class="controls">
        <input type="text" id="username" name="username" onkeyup="autotab(this,document.registration.password)"  placeholder=""  class="input-xlarge" maxlength="10">
      </div>
    </div>

 
    <div class="control-group">
      <!-- Password-->
      <label class="control-label" for="password">Password</label>
      <div class="controls">
        <input type="password" id="password" name="password" onkeyup="autotab(this,document.registration.password_confirm)" placeholder="" class="input-xlarge" maxlength="5">
      </div>
    </div>
 
    <div class="control-group">
      <!-- Password -->
      <label class="control-label"  for="password_confirm">Password (Confirm)</label>
      <div class="controls">
        <input type="password" id="password_confirm" name="password_confirm" placeholder=""class="input-xlarge" maxlength="5">
        <p class="help-block">Please confirm password</p>
      </div>
    </div>
 
    <div class="control-group">
      <!-- Button -->
      <div class="controls">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </div>
</form>
</div>
  <div class="form-group">
      <button id="start-btn" class="btn btn-success btn-block" onclick="startSpeech()">
          Start
      </button>
      <p id="instruction">Press the start button</p>
  </div>
</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
<script src="registration.js"></script>
<script src="annayngRegistration.js"></script>
</html>

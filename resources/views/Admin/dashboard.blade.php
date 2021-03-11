<!DOCTYPE html> 
<html> 
  
<head> 
    <title> 
       inbox 
  </title> 
    <link rel="stylesheet" href= 
"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> 
<script src="{{ URL::asset('annayngRegistration.js') }}"></script>
<script type="text/javascript" src="http://code.responsivevoice.org/responsivevoice.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/1.1.0/annyang.min.js"></script>
  
    <style> 
        /* Modify the background color */ 
          
        .navbar-custom { 
            background-color: #5cb85c; 
        } 
        /* Modify brand and text color */ 
          
        .navbar-custom .navbar-brand, 
        .navbar-custom .navbar-text { 
            color: white; 
        } 
    </style> 
</head> 
  
<body> 
    <!-- Navbar text is dark and background is light -->
    <nav class="navbar navbar-custom"> 
      <a class="navbar-brand" href="#"> 
         Voice Mail
      </a>
      <a class="navbar-brand" href="#"> 
         Inbox
      </a>      
      <a class="navbar-brand" href="{{URL::to('/writemessage')}}"> 
         Compose
      </a>
      <a class="navbar-brand" href="#"> 
         Sent
      </a>

    </nav> 
   
</body> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
<script src="registration.js"></script>
<script src="annayngRegistration.js"></script>
  
</html> 
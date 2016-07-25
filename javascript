<!DOCTYPE html>
<html lang="en">
  <head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 
  <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
</head>
<style>
  .main{
    background-color: lavender;
    font-family: Lora;
  }
  .right{ display: inline-block;
    margin-left: 80%; 
  }
  .left {background-color: #143758;
    color:white;    
    padding: 3px;
    border-radius: 5px;
  }
  .try{ margin-right: 85%;    
  }
  body {
    counter-reset: line;
  }
  p{
    background-color: #663399;
    color: #FFDD00;   
    padding: 3px;
    border-radius: 5px;
  }
  p::before{
    counter-increment: line;
    content: "Line " counter(line) ": ";
  }
  .navbg{
    background-color: #006400;
  }
</style>
<nav class="navbar navbar-position-fixed-right">
  <nav class="navbg">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebsiteName</a>
    </div>
    <div id="myNavbar">
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="active"><a href="#">Shop!</a></li>
      <li class="active"><a href="#">Wishlist</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </nav>
</nav>
<body class="main">

<div class="right">
  <div class="left">
        <script>
        for (i=1; i<=10; i++) {
          document.write("How many times?     " + i + "<br>")       
        }
        </script>
        </div>
      </div>
      <hr></hr>
        <div class="try">
  <p>This is</p>
  <p>how to count</p>
  <p>with only</p>
  <p>CSS</p>
</div>
<hr></hr>
<div class="right">
  <div class="left">
<script>
for (i=5; i<=10; i++){
  document.write("This extra line " + i + " brought to you by js" + "<br>")}
</script>
</div>
</div>
<hr></hr>
<div class="try">
  <div class="left">
  <script>
  for (i=10; i>=1; i--){
    document.write("Counting down... " + i + "<br>")
  }
  </script>
</div>
</div>
<hr></hr>
<div class="right">
  <p>Back to counting with CSS</p>
  <p>I wonder if there's a way to combine CSS counter with JS</p>
  <p>JS takes less work to accomplish the counter</p>
  <p>Only div's affect JS?</p>
</div>
  </body>
</html>
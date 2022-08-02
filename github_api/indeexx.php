<?php
$id = "";
  $img = "";
  $username = "";
  $name = "";
  $user_url = "";
  $repo = "";
  $location = "";
  $followers = "";
  $following = ""; 
if (isset($_POST['userid']) && $_POST['userid'])
{
  $userid = $_POST['userid'];
  $url = "https://api.github.com/users/".$userid;
  
  $user = curl_init();
  curl_setopt($user, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
  curl_setopt($user, CURLOPT_URL, $url);
  curl_setopt($user,CURLOPT_RETURNTRANSFER,true);
  $response = curl_exec($user);
  $result = json_decode($response);
  error_reporting(E_ALL ^ E_NOTICE);  

  if(!$result->message)
  {
      $id = $result->id;
      $img = $result->avatar_url;
      $username = $result->login;
      $name = $result->name;
      $user_url = $result->html_url;
      $repo = "https://github.com/$result->login?tab=repositories";
      $location = $result->location;
      $followers = $result->followers;
      $following = $result->following;
  }
  else
    echo "Not Found";
    
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Github API</title>
  <style>
    #table
    {
      display: block;
    }
  </style>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="mt-3"> 
      <form  action="" method="post" class="mb-5 p-2" id="">
        <input style="width: 250px !important;" name="userid" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter user id" autocomplete="on">
        <button class="btn btn-success mt-2" onclick="show_results()" type="submit">submit</button>

      </form>
      
    </div>
    
    <table id="table" class="table mt-5"> 
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Profile</th>
          <th scope="col">Username</th>
          <th scope="col">Name</th>
          <th scope="col">Account URL</th>
          <th scope="col">Repository URL</th>
          <th scope="col">locations</th>
          <th scope="col">follwers</th>
          <th scope="col">following</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <?php 
          echo "<td>$id</td>";
          echo "<td><img src='$img' width='90px'></td>";
          echo "<td>$username</td>";
          echo "<td>$name</td>";
          echo "<td><a href=$user_url>user url</a></td>";
          echo "<td><a href=$repo>repo url</a></td>";
          echo "<td>$location</td>";
          echo "<td>$followers</td>";
          echo "<td>$following</td>";
          ?>
        </tr>
      </tbody>
    </table>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  <script>
    function show_results()
    {
        
      var table = document.getElementById("table");
      table.style.display = "block";
    }
  </script>
</body>

</html>
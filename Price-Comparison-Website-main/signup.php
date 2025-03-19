<?php 
session_start();

	include("conn.php");
	include("func.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$password = $_POST['pass'];

		if(!empty($email) && !empty($password))
		{

			//save to database
			$query = "insert into user (fname,lname,email,phone,pass) values ('$fname','$lname','$email','$phone','$password')";

			mysqli_query($con, $query);

			header("Location: login.php");
			die;
		}else
		{
			echo "Please enter some valid information!";
		}
	}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>signup form</title>
    <link rel="stylesheet" href="signup.css">
    <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
</head>

<body>
    <div class="signup">
        <form method="POST" onsubmit="return validateForm()">
            <label>Sign up</label>
            <input type="text" placeholder="First name" id="fname" name="fname">
            <input type="text" placeholder="Last name" id="lname" name="lname">
            <input type="email" placeholder="Email" id="email" name="email">
            <input placeholder="Phone no." maxlength="10" id="ph" name="phone">
            <input type="password" placeholder="Password" id="psw" name="pass">
            <input type="password" placeholder="Confirm Password" id="cpsw" name="cpass">
			<div class="btns">
				<a href="login.php">Click to Login</a>
				<input id="btn" type="submit" value="Signup">
			</div>
        </form>
    </div>
    <script src="signup.js"></script>
</body>

</html>
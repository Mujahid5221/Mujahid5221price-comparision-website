 <?php 

session_start();

	include("conn.php");
	include("func.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$email = $_POST['email'];
		$password = $_POST['password'];

		if(!empty($email) && !empty($password))
		{

			//read from database
			$query = "select * from user where email = '$email' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($user_data['pass'] === $password)
					{

						$_SESSION['email'] = $user_data['email'];
						header("Location: main.html");
						die;
					}
				}
			}
			
			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}
	}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login form</title>
    <link rel="stylesheet" href="login.css">
</head>

<body>
    <div class="login">
        <form method="post" onsubmit="return validateForm()">
            <label>Login</label>
            <input type="email" placeholder="Email" id="email" name="email">
            <input type="password" placeholder="Password" id="psw" name="password">
			<div class="btns">
				<a href="signup.php">Click to signup</a>
				<input id="btn" type="submit" value="Login">
			</div>
        </form>
    </div>
    <script src="login.js"></script>
</body>

</html>
<?php include ("header.php");
?>

<body>
	<div id="content">
		<h1>Location de Logement</h1>
		<br>
		<form class="form-horizontal" role="form" method="post" action="login.php">
		  <div class="form-group">
		    <label for="username" class="col-sm-5 control-label">Utilisateur: </label>
		    <div class="col-sm-7">
		      <input name="username" class="form-control" type="text" id="userName">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="password" class="col-sm-5 control-label">Mot de passe: </label>
		    <div class="col-sm-7">
		      <input name="password" class="form-control" type="password" id="password">
		    </div>
		  </div>
		  <div class="form-group">
		  	<!-- todo -->
		    <div class="col-sm-offset-5 col-sm-7">
		    	<a href="todo">Créer un participant</a><br><br>
		      <button type="submit" class="btn btn-default">Soumettre</button>
		    </div>
		  </div>
		</form>

	</div>
</body>
<?php include("footer.php"); ?>

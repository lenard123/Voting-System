<template>
<div>

	<nav class="nav navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="">Voting System</a>
			</div>
		
			<div class="collapse navbar-collapse" id="myNavbar">
				<ul class="nav navbar-nav">
					<router-link :to="{name: 'Admin Home'}" tag="li" exact>
						<a href="#"><span class="fa fa-home"></span></a>
					</router-link>
					<router-link :to="{name: 'Manage Position'}" tag="li">
						<a href="#">Manage Position</a>
					</router-link>
				</ul>
			</div>
		</div>
	</nav>

	<router-view></router-view>
</div>
</template>

<script>
export default {
	created: function () {
		if (!this.util.isLogin())
			return this.$router.push({name: 'Admin Login'});
	}
}
</script>

<style>
.navbar-default {
	box-shadow: 0 1px 10px rgba(0,0,0,.5);
	background-color: 	#ffffff;
}

body {
	background-color: white;
	color: #000000;
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    margin-top: 70px;	
}
</style>
<template>
<div>	
	<div v-if="!loading">
		<nav class="navbar navbar-default navbar-fixed-top" id="nav">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>	
					<a class="navbar-brand" :href="data.baseURL" >Voting System</a>
				</div>
				<div class="collapse navbar-collapse" id="myNavbar">

					<ul class="nav navbar-nav">

						<router-link :to="{name: 'Admin Home'}" tag="li" exact><a href="#">Home</a></router-link>
						
						<router-link :to="{name: 'Manage Position'}" tag="li">
							<a href="#">Manage Position</a>
						</router-link>
						
						<router-link :to="{name: 'Manage Partylist'}" tag="li">
							<a href="#">Manage Partylist</a>
						</router-link>

						<router-link :to="{name: 'Manage Voter'}" tag="li">
							<a href="#">Manage Voter</a>
						</router-link>

						<router-link :to="{name: 'Manage Nominee'}" tag="li">
							<a href="#">Manage Nominee</a>
						</router-link>

					</ul>
					<ul class="nav navbar-right navbar-nav">
						<li class="dropdown">
							<a 
								href="#" 
								class="dropdown-toggle" 
								data-toggle="dropdown" 
								role="button" aria-haspopup="true" 
								aria-expanded="false">
								<span class="fa fa-user"></span> {{ data.user.name }} <span class="caret"></span>
							</a>
							<ul class="dropdown-menu">

								<router-link :to="{name:'Update Account'}" tag="li" exact>
									<a href="#">Update Account</a>
								</router-link>

								<router-link :to="{name: 'Manage Account'}" tag="li" v-if="data.user.id==1">
									<a href="#">Manage Account</a>
								</router-link>

								<li @click="logout()"><a>Logout</a></li>
							</ul>
						</li>
					</ul>
				</div> 
			</div>
		</nav>

		<router-view></router-view>
	</div>
	<div v-if="loading" class="container">
		<div class="jumbotron">
			<h1>Loading <i class="fa fa-refresh fa-spin"></i></h1>
		</div>
	</div>
</div>
</template>

<script>
export default{

	data: () =>({
		loading: true
	}),

	created: function () {
		this.util.setTitle('Voting System - Administrator');
		var vm = this;
		if (this.util.isLogin()) {
			this.util.setAuthorization();
			axios.get(config.API+'admin/information')
				 .then(response=>{
				 	console.log(response);
				 	vm.data.user = response.data.user;
				 	vm.data.election = response.data.election;
				 	vm.data.partylists = response.data.partylist;
				 	vm.data.positions = response.data.position;
				 	vm.loading = false;
				 })
				 .catch(error=>{
				 	$.notifyClose();
				 	if (this.util.showResult(error) == 401) { 
				 		vm.logout();
				 	}
				 })
		} else {
			this.$router.push({name:'Admin Login'});
		}
	},

	methods: {
		logout: function () {
			localStorage.clear();
			this.$router.push({name: 'Admin Login'});
		}
	}
}
</script>

<style>
body{
	padding: 70px 5px;
}	
</style>
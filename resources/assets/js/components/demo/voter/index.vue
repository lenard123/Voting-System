<template>
<div>
	<div v-if="!loading">
		<nav class="navbar navbar-default navbar-fixed-top" id="nav">
			<div class="container">
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

						<router-link :to="{name: 'Voter Home'}" tag="li" exact>
							<a href="#">Home</a>
						</router-link>

						<router-link :to="{name: 'Vote'}" v-if="data.election.status==2 && !hasVoted()" tag="li" exact>
							<a href="#">Vote</a>
						</router-link>	

						<router-link :to="{name: 'Result'}" v-if="data.election.status==2 && hasVoted()" tag="li">
							<a href="#">Results</a>
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
								<li @click="logout()"><a>Logout</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<router-view></router-view>
	</div>
	<div v-else class="container">
		<div class="jumbotron">
			<h1>Loading <i class="fa fa-refresh fa-spin"></i></h1>
		</div>
	</div>
</div>
</template>

<script>
export default{
	data: () => ({
		loading: true
	}),

	created: function(){
		this.refreshInfo();
	},

	methods: {
		logout: function () {
			localStorage.clear();
			this.$router.push({name: 'Voter Login'});
		},

		hasVoted: function () {
			return this.data.result.length > 0;
		},

		refreshInfo: function () {
			var vm = this;
			this.util.setAuthorization();
			axios.get(config.API+'election/information')
				.then(response=>{
					console.log(response);
					vm.loading = false;
					vm.data.election = response.data.election;
					vm.data.nominees = response.data.nominee;
					vm.data.partylists = response.data.partylist;
					vm.data.positions = response.data.position;
					vm.data.user = response.data.voter;
					vm.data.result = response.data.result;
				})
				.catch(error=>{
					vm.loading = false;
					if  (vm.util.showResult(error, 'error') == 401) {
						vm.$router.push({name: 'Voter Login'});
					}
				});
		}
	}
}
</script>

<style>
body{
	padding: 70px 5px;
}	
</style>


<template>
<div class="col-md-5 col-md-offset-3">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4>Admin Login</h4>
		</div>

		<div class="panel-body">
			<form @submit.prevent="login" id="login_form">

				<div class="form-group">
					<label for="email">E-mail</label>
					<input type="email" name="email" class="form-control" required/>
				</div>

				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" name="password" class="form-control" id="password" required/>
				</div>

				<label>
					<input 
						type="checkbox" 
						id="visibility"  
						onclick=" $(this)[0].checked ? 
									$('#password').attr('type','text'):
									$('#password').attr('type','password')"/> Show Password
				</label>

				<div class="form-group">
					<input 
						type="submit" 
						class="btn btn-primary form-control" 
						:class="{'disabled': loading.isLoading}" 
						:value="loading.value"/>
				</div>

			</form>
		</div>

	</div>
</div>
</template>

<script>
export default{

	data: function () {
		return {
			loading: {
				value: 'Login',
				isLoading: false
			}
		}
	},

	created: function () {
		if (this.util.isLogin())
			return this.$router.push('Admin Home')
		this.util.setTitle('Admin Login');
	},

	methods: {
		login: function () {
			if (this.loading.isLoading) return;

			let vm = this;

			this.startLoading();

			axios.post('api/v1/admin/login', $('#login_form').serialize())
				 .then(response => {
				 	vm.stopLoading();
				 	if (this.util.showResult(response, 'success')) {
				 		localStorage['Access Token'] = `Bearer ${response.data.token}`;
				 		localStorage['User'] = JSON.stringify(response.data.user);
						window.axios.defaults.headers.common['Authorization'] = localStorage['Access Token'];
				 		vm.$router.push({name: 'Admin Home'});
				 	}
				 })
				 .catch(error => {
				 	vm.stopLoading();
				 	this.util.showResult(error, 'error');
				 })

		},

		startLoading: function () {
			this.util.notify('Logging in', 'loading');
			this.loading = {
				value: 'Loading...',
				isLoading: true
			}
		},

		stopLoading: function () {
			$.notifyClose();
			this.loading = {
				value: 'Login',
				isLoading: false
			}
		}
	},

}
</script>

<style>
body {
	padding: 50px 5px;
}
</style>
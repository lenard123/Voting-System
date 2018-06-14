<template>
<div class="panel panel-default">
	<div class="panel-body">
		<form id="add_form" @submit.prevent="add()">

			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" name="name" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" name="email" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" name="password" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="confirm_password">Confirm Password</label>
				<input type="password" name="confirm_password" class="form-control" required/>
			</div>

			<div class="form-group">
				<input type="submit" value="Submit" class="btn btn-info"/>
				<router-link :to="{name: 'Manage Account'}" class="btn btn-default">Back</router-link>
			</div>

		</form>
	</div>
</div>
</template>

<script>
export default{
	data: () => ({
		loading: false
	}),

	methods:{
		add: function () {
			if (this.loading || !this.isPasswordMatch()) return;
			var vm = this;
			this.loading = true;
			this.util.notify('Adding Admin', 'loading');
			axios.post(config.API+'admin', $('#add_form').serialize())
				.then(response=>{
					vm.loading = false;
					$.notifyClose();
					if (vm.util.showResult(response, 'success')) {
						vm.$router.push({name: 'Manage Account'});
					}
				})
				.catch(error=>{
					vm.loading = false;
					$.notifyClose();
					vm.util.showResult(error, 'error')	
				})
		},

		isPasswordMatch: function () {
			var isMatch = $('[name=password]').val() == $('[name=confirm_password]').val();
			if (!isMatch) this.util.notify('Password not match', 'error');
			return isMatch;
		}
	}	
}
</script>
<template>
<div class="panel panel-default">
	<div class="panel-body">
		<h4>Update Account</h4>
		<form @submit.prevent="edit()" id="edit_form">
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" name="name" class="form-control" :value="data.user.name" required/>
			</div>

			<div class="form-group">
				<label for="email">E-mail</label>
				<input type="email" name="email" class="form-control" :value="data.user.email" required/>
			</div>

			<div class="form-group">
				<input type="submit" value="Submit" class="btn btn-info"/>
				<router-link :to="{name: 'Update Password'}" class="btn btn-default">Change Password</router-link>
			</div>
		</form>
	</div>
</div>
</template>

<script>
export default{
	data: function () {
		return {
			loading: false
		}
	},

	methods:{
		refreshUser: function () {
			var vm = this;
			axios.get(config.API+'admin/'+this.data.user.id)
				.then(response=>{
					vm.data.user = response.data;
				})
		},

		edit: function () {
			if (this.loading) return;
			this.loading = true;
			var vm = this;
			this.util.notify('Updating account', 'loading');
			axios.put(config.API+'admin/'+this.data.user.id, $('#edit_form').serialize())
				.then(response=>{
					$.notifyClose();
					vm.loading = false;
					if (vm.util.showResult(response, 'success')) {
						vm.refreshUser();
						vm.$router.push({name:'Admin Home'});
					}
				})
				.catch(error=>{
					$.notifyClose();
					vm.loading = false;
					vm.util.showResult(error, 'error')
				})
		}
	}
}
</script>

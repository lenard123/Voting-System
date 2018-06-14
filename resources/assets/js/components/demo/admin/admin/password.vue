<template>
<div class="panel panel-default">
	<div class="panel-body">
		<h4>Update Password</h4>
		<form @submit.prevent="edit()" id="edit_form">
			<div class="form-group">
				<label for="old_password">Old Password</label>
				<input type="password" name="old_password" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="password">New Password</label>
				<input type="password" name="password" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="confirm_password">Confirm Password</label>
				<input type="password" name="confirm_password" class="form-control" required/>
			</div>

			<div class="form-group">
				<input type="submit" value="Submit" class="btn btn-info"/>
				<router-link :to="{name: 'Update Account'}" class="btn btn-default">Back</router-link>
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

	methods: {
		edit: function () {
			if (this.loading || !this.checkPassword()) return;
			var vm = this;
			vm.loading = true;
			vm.util.notify('Updating Password', 'loading');
			axios.put(config.API+'admin/password/'+this.data.user.id, $('#edit_form').serialize())
				.then(response=>{
					$.notifyClose();
					vm.loading = false;			
					vm.util.showResult(response, 'success');		
					vm.$router.push({name:'Admin Home'});
				})
				.catch(error=>{
					$.notifyClose();
					vm.loading = false;
					vm.util.showResult(error, 'error');
				})
		},

		checkPassword: function () {
			var isMatch = $("[name=password]").val() == $("[name=confirm_password]").val();
			if (!isMatch) {
				this.util.notify('Password not match', 'error');
			}
			return isMatch;
		}
	}
}
</script>
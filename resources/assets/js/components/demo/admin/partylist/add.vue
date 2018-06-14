<template>
<div class="panel panel-default">
	<div class="panel-body">
		<h4>Add Partylist</h4>
		<form @submit.prevent="add()" id="add-form">
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" name="name" class="form-control" required>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-success">Submit</button>
				<router-link :to="{name: 'Manage Partylist'}" class="btn btn-default">Back</router-link>
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
		add: function () {
			if (this.loading) return;
			this.loading = true;
			var vm = this;
			this.util.notify('Adding Partylist', 'loading')
			axios.post(config.API+'partylist', $('#add-form').serialize())
				.then(response=>{
					$.notifyClose();
					vm.loading = false;
					if (vm.util.showResult(response, 'success')) {
						vm.$router.push({name:'Manage Partylist', query: {refresh:true}});
					}
				})
				.catch(error=>{
					$.notifyClose();
					vm.loading = false;
					vm.util.showResult(error);
				})
		}
	}
}
</script>
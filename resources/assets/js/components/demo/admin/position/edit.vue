<template>
<div class="panel panel-default">
	<div class="panel-body">
		<h4>Edit Position</h4>
		<form @submit.prevent="edit()" id="edit-form">
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" name="name" class="form-control" :value="data.position.name" required/>
			</div>
			<div class="form-group">
				<input type="submit" value="Submit" class="btn btn-success"/>
				<router-link :to="{name: 'Manage Position'}" class="btn btn-default">Back</router-link>
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

	created: function () {
		if (!this.data.position.id) {
			this.$router.push({name:'Manage Position'});
		}
	},

	methods: {
		edit: function () {
			if (this.loading) return;
			this.loading = true;
			var vm = this;
			this.util.notify('Updating position', 'loading');
			axios.put(config.API+'position/'+this.data.position.id, $('#edit-form').serialize())
				.then(response=>{
					vm.loading = false;
					$.notifyClose();
					if (vm.util.showResult(response, 'success')) {
						vm.$router.push({name:'Manage Position', query:{refresh:true}});
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
<template>
<div class="panel panel-default">
	<div class="panel-body">
		<h4>Edit Voter</h4>
		<form @submit.prevent="edit()" id="edit-form">
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" name="name" class="form-control" :value="data.voter.name" required/>
			</div>

			<div class="form-group">
				<label for="student_id">Student ID</label>
				<input type="text" name="student_id" class="form-control" :value="data.voter.student_id" required/>
			</div>

			<div class="form-group">
				<label for="course">Course</label>
				<input type="text" name="course" class="form-control" :value="data.voter.course" required/>
			</div>

			<div class="form-group">
				<input type="submit" value="Submit" class="btn btn-success"/>
				<router-link :to="{name: 'Manage Voter'}" class="btn btn-default">Back</router-link>
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
		if (!this.data.voter.id) {
			this.$router.push({name:'Manage Voter'});
		}
	},

	methods: {
		edit: function () {
			if (this.loading) return;
			this.loading = true;
			var vm = this;
			this.util.notify('Updating voter', 'loading');
			axios.put(config.API+'voter/'+this.data.voter.id, $('#edit-form').serialize())
				.then(response=>{
					vm.loading = false;
					$.notifyClose();
					if (vm.util.showResult(response, 'success')) {
						vm.$router.push({name:'Manage Voter'});
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
<template>
<div class="panel panel-default">
	<div class="panel-body">
		<form 
			class="row" 
			method="POST" 
			id="add_form"
			:action="data.API+'nominee'" 
			enctype="mutlipart/formdata"
			@submit.prevent="add()">
			<div class="col-md-4">
				<uploader file-name="image" />
			</div>	

			<div class="col-md-8">

				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" name="name" class="form-control" required/>
				</div>

				<div class="form-group">
					<label for="student_id">Student ID</label>
					<input type="text" name="student_id" class="form-control" required/>
				</div>

				<div class="form-group">
					<label for="course">Course</label>
					<input type="text" name="course" class="form-control" required/>
				</div>

				<div class="form-group">
					<label for="motto">Motto</label>
					<input type="text" name="motto" class="form-control" placeholder="(Optional)" />
				</div>

				<div class="form-group">
					<label for="description">Description</label>
					<textarea name="description" class="form-control" placeholder="(Optional)"></textarea>
				</div>

				<div class="form-group">
					<label for="position_id">Position</label>
					<select class="form-control" v-model="position_id" name="position_id" required>
						<option value="0" disabled>--- Select Position ---</option>
						<option v-for="position in data.positions" :value="position.id">{{ position.name }}</option>
					</select>
				</div>

				<div class="form-group">
					<label for="partylist_id">Partylist</label>
					<select class="form-control" name="partylist_id">
						<option value="">--- Select Partylist (Optional) ---</option>
						<option v-for="partylist in data.partylists" :value="partylist.id">{{ partylist.name}}</option>
					</select>
				</div>

				<div class="form-group pull-right">
					<input type="submit" value="Submit" class="btn btn-info">
					<router-link 
						:to="{name:'Manage Nominee', query:{position_id:position_id}}" 
						class="btn btn-default">
						Submit
					</router-link>
				</div>
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
			var vm = this;
			this.loading = true;
			this.util.notify('Adding Nominee', 'progress', 0);
			$('#add_form').ajaxSubmit({
				success: function (response) {
					$.notifyClose();
					vm.loading = false;
					if (vm.util.showResult(response, 'success', 'ajax')) 
						vm.$router.push({name: 'Manage Nominee'});
				},
				error: function (error) {
					$.notifyClose();
					vm.loading = false;
					vm.util.showResult(error, 'error', 'ajax');
				},
				uploadProgress: function (a, b, c, progress) {
					vm.util.notify('Adding Nominee', 'progress', progress);
				}
			})
		}
	},

	computed: {
		position_id: {
			get: function () {
				return this.$route.query.position_id;
			},

			set: function (id) {
				this.$router.replace({query: {position_id: id}});
			}
		}
	}
}
</script>
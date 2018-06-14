<template>
<div class="panel panel-default">
	<div class="panel-body">
		<form 
			method="POST"
			class="row"
			id="edit_form"
			:action="data.API+'nominee/'+id"
			enctype="multipart/form-data"
			@submit.prevent="edit()">
			<input type="hidden" name="_method" value="PUT"/>

			<div class="col-md-4">
				<uploader file-name="image" :image-src="data.storageURL+nominee.image"/>
			</div>

			<div class="col-md-8">
				
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" name="name" class="form-control" :value="nominee.name" required/>
				</div>

				<div class="form-group">
					<label for="student_id">Student ID</label>
					<input type="text" name="student_id" class="form-control" :value="nominee.student_id" required/>
				</div>

				<div class="form-group">
					<label for="course">Course</label>
					<input type="text" name="course" class="form-control" :value="nominee.course" required/>
				</div>

				<div class="form-group">
					<label for="motto">Motto</label>
					<input type="text" name="motto" class="form-control" :value="nominee.motto" placeholder="(Optional)" />
				</div>

				<div class="form-group">
					<label for="description">Description</label>
					<textarea name="description" class="form-control" placeholder="(Optional)">{{ nominee.description}}</textarea>
				</div>

				<div class="form-group">
					<label for="position_id">Position</label>
					<select class="form-control" name="position_id" :value="nominee.position_id" required>
						<option value="0" disabled>--- Select Position ---</option>
						<option v-for="position in data.positions" :value="position.id">{{ position.name }}</option>
					</select>
				</div>

				<div class="form-group">
					<label for="partylist_id">Partylist</label>
					<select class="form-control" name="partylist_id" :value="nominee.partylist_id">
						<option value="">--- Select Partylist (Optional) ---</option>
						<option v-for="partylist in data.partylists" :value="partylist.id">{{ partylist.name}}</option>
					</select>
				</div>

				<div class="form-group pull-right">
					<input type="submit" value="Submit" class="btn btn-info">
					<router-link 
						:to="{name:'Manage Nominee'}" 
						class="btn btn-default">
						Back
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

	created: function () {
		if (!this.nominee.id)
			this.$router.push({name:'Manage Nominee'});
	},

	methods: {
		edit: function () {
			if (this.loading) return;
			var vm = this;
			this.loading = true;
			this.util.notify('Updating nominee', 'progress', 0);
			$('#edit_form').ajaxSubmit({
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
					vm.util.notify('Updating Nominee', 'progress', progress);
				}
			})
		}
	},

	computed: {
		id: function () {
			return this.$route.params.id;
		},

		nominee: function () {
			for (var i in this.data.nominees)
				if(this.data.nominees[i].id == this.id)
					return this.data.nominees[i];
			return {}
		}
	}
}
</script>
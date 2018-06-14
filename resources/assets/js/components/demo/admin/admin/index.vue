<template>
<div class="panel panel-default">
	<div class="panel-body table-responsive">
		
		<div class="form-group">
			<router-link :to="{name: 'Add Account'}" class="btn btn-success">
				<i class="fa fa-plus"></i> Add Account</router-link>
			<button class="btn btn-default" @click="refreshAdmin()">
				<i class="fa fa-refresh"></i> Refresh</button>
		</div>

		<table class="table table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="admin in data.admins">
					<td>{{ admin.id }}</td>
					<td>{{ admin.name }}</td>
					<td>{{ admin.email }}</td>
					<td>
						<button class="btn btn-danger" @click="id=admin.id;util.showModal('#delete-admin-modal')">
							<i class="fa fa-trash"></i> Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<modal id="delete-admin-modal">
		<modal-header>Delete Admin</modal-header>
		<modal-body>
			<h3>Are you sure to delete this admin?</h3>
		</modal-body>
		<modal-footer>
			<button @click="deleteAdmin()" class="btn btn-danger">Delete</button>
			<button @click="util.hideModal('#delete-admin-modal')" class="btn btn-default">Cancel</button>
		</modal-footer>
	</modal>
</div>
</template>

<script>
export default{

	data: ()  => ({
		id:0
	}),

	created: function () {
		this.refreshAdmin();
	},

	methods: {
		deleteAdmin: function () {
			this.util.hideModal('#delete-admin-modal');
			this.util.notify('Deleting admin', 'loading');
			var vm = this;
			axios.delete(config.API+'admin/'+this.id)
				.then(response=>{
					$.notifyClose();
					if (vm.util.showResult(response, 'success'))
						vm.refreshAdmin();
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error, 'error');
				})
		},

		refreshAdmin: function () {
			this.util.notify('Refreshing admin', 'loading');
			var vm = this;
			axios.get(config.API+'admin')
				.then(response=>{
					$.notifyClose();
					if (response.data.status == 'failed')
						vm.util.showResult(response, 'success');
					else
						vm.data.admins = response.data;
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error, 'error');
				})
		}
	}
}
</script>
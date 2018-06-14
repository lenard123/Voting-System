<template>
<div>
 
<div class="panel panel-default">
	<div class="panel-body">

		<div class="form-group">
			<router-link class="btn btn-success" :to="{name:'Add Position'}">
				<i class="fa fa-plus"></i> Add Position
			</router-link>
			<button class="btn btn-default" @click="refreshPosition()">
				<i class="fa fa-refresh"></i> Refresh Position
			</button>
		</div>

		<div class="table-responsive">
			<table class="table table-hover" id="position_table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(position,i) in data.positions">
						<td>{{ position.id }}</td>
						<td>{{ position.name }}</td>
						<td>
							<button class="btn btn-info" @click="edit(i)">
								<i class="fa fa-edit"></i> Edit
							</button>
							<button 
								class="btn btn-danger" 
								@click="util.showModal('#delete-position-modal');id=position.id">
								<i class="fa fa-trash"></i> Delete
							</button>
						</td>
					</tr>
					<tr v-if="data.positions.length < 1">
						<td colspan="3">No Positions</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<modal id="delete-position-modal">
	<modal-header>Delete Position</modal-header>
	<modal-body>
		<h2>Are you sure to delete Position?</h2>
	</modal-body>
	<modal-footer>
		<button class="btn btn-danger" @click="deletePosition()">Delete</button>
		<button class="btn btn-default" @click="util.hideModal('#delete-position-modal')">Cancel</button>
	</modal-footer>
</modal>

</div>
</template>

<script>
export default{
	data: function () {
		return {
			id: 0
		}
	},

	created: function () {
		if (this.$route.query.refresh) {
			this.refreshPosition();
			this.$router.replace({name: 'Manage Position'})
		}
	},

	methods: {
		refreshPosition: function () {
			var vm = this;
			this.util.notify('Refreshing Position', 'loading');
			axios.get(config.API+'position')
				.then(response=>{
					console.log(response)
					$.notifyClose();
					vm.data.positions = response.data;
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error);
				})
		},

		initDatatable: function () {
			var vm = this;
			$('#position_table').DataTable({
				destroy: true,
				searching: false,
				info: false,
				autoWidth: false,
				dom: 'Bfrtip'
			});
		},

		edit: function (i) {
			var vm = this;
			this.data.position = this.data.positions[i];
			this.$router.push({name: 'Edit Position', params:{id:vm.data.position.id}})
		},

		deletePosition: function () {
			var vm = this;
			this.util.notify('Deleting position', 'loading');
			this.util.hideModal('#delete-position-modal');
			axios.delete(config.API+'position/'+this.id)
				 .then(response=>{
				 	$.notifyClose();
				 	if (vm.util.showResult(response, 'success')) vm.refreshPosition();
				 })
				 .catch(error=>{
				 	$.notifyClose();
				 	vm.util.showResult(error);
				 })
		}
	}
}
</script>
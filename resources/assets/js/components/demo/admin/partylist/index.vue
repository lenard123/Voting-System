<template>
<div>
 
<div class="panel panel-default">
	<div class="panel-body">

		<div class="form-group">
			<router-link class="btn btn-success" :to="{name:'Add Partylist'}">
				<i class="fa fa-plus"></i> Add Partylist
			</router-link>
			<button class="btn btn-default" @click="refreshPartylist()">
				<i class="fa fa-refresh"></i> Refresh Partylist
			</button>
		</div>

		<div class="table-responsive">
			<table class="table table-hover" id="partylist_table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(partylist,i) in data.partylists">
						<td>{{ partylist.id }}</td>
						<td>{{ partylist.name }}</td>
						<td>
							<button class="btn btn-info" @click="edit(i)">
								<i class="fa fa-edit"></i> Edit
							</button>
							<button 
								class="btn btn-danger" 
								@click="util.showModal('#delete-partylist-modal');id=partylist.id">
								<i class="fa fa-trash"></i> Delete
							</button>
						</td>
					</tr>
					<tr v-if="data.partylists.length < 1">
						<td colspan="3">No Partylist</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>

<modal id="delete-partylist-modal">
	<modal-header>Delete Partylist</modal-header>
	<modal-body>
		<h2>Are you sure to delete Partylist?</h2>
	</modal-body>
	<modal-footer>
		<button class="btn btn-danger" @click="deletePartylist()">Delete</button>
		<button class="btn btn-default" @click="util.hideModal('#delete-partylist-modal')">Cancel</button>
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
			this.refreshPartylist();
			this.$router.replace({name: 'Manage Partylist'});
		}
	},

	methods: {
		refreshPartylist: function () {
			var vm = this;
			this.util.notify('Refreshing Partylist', 'loading');
			axios.get(config.API+'partylist')
				.then(response=>{
					console.log(response)
					$.notifyClose();
					vm.data.partylists = response.data;
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error);
				})
		},

		edit: function (i) {
			var vm = this;
			this.data.partylist = this.data.partylists[i];
			this.$router.push({name: 'Edit Partylist', params:{id:vm.data.partylist.id}})
		},

		deletePartylist: function () {
			var vm = this;
			this.util.notify('Deleting partylist', 'loading');
			this.util.hideModal('#delete-partylist-modal');
			axios.delete(config.API+'partylist/'+this.id)
				 .then(response=>{
				 	$.notifyClose();
				 	if (vm.util.showResult(response, 'success')) vm.refreshPartylist();
				 })
				 .catch(error=>{
				 	$.notifyClose();
				 	vm.util.showResult(error);
				 })
		}
	}
}
</script>
<template>
<div>
 
<div class="panel panel-default">
	<div class="panel-body">

		<div class="form-group">
			<router-link class="btn btn-success" :to="{name:'Add Voter'}">
				<i class="fa fa-plus"></i> Add Voter
			</router-link>
			<button class="btn btn-default" @click="refreshVoter()">
				<i class="fa fa-refresh"></i> Refresh Voter
			</button>
		</div>
		<div class="table-responsive">
			<table class="table table-hover" id="position_table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Student ID</th>
						<th>Course</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(voter,i) in data.voters.data">
						<td>{{ voter.name }}</td>
						<td>{{ voter.student_id }}</td>
						<td>{{ voter.course }}</td>
						<td>
							<button class="btn btn-info" @click="edit(i)">
								<i class="fa fa-edit"></i> Edit
							</button>
							<button 
								class="btn btn-danger" 
								@click="util.showModal('#delete-voter-modal');id=voter.id">
								<i class="fa fa-trash"></i> Delete
							</button>
						</td>
					</tr>
					<tr v-if="data.voters.data && data.voters.data.length < 1">
						<td colspan="3">No Voters</td>
					</tr>
				</tbody>
			</table>
		</div>

		<ul class="pagination" v-if="pages.length > 1">
			<router-link 
				tag="li"
				v-for="page in pages" 
				:key="page['pages']"
				:to="{query:{page:page['page']}}"
				:class="{'active':current_page==page['page']}"
				exact>
				<a href="#">{{ page['page'] }}</a>
			</router-link>
		</ul>		

	</div>
</div>

<modal id="delete-voter-modal">
	<modal-header>Delete Voter</modal-header>
	<modal-body>
		<h2>Are you sure to delete voter?</h2>
	</modal-body>
	<modal-footer>
		<button class="btn btn-danger" @click="deleteVoter()">Delete</button>
		<button class="btn btn-default" @click="util.hideModal('#delete-voter-modal')">Cancel</button>
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
		this.refreshVoter();
	},

	methods: {
		search: function () {

		},

		refreshVoter: function () {
			var vm = this;
			this.util.notify('Refreshing Voter', 'loading');
			axios.get(config.API+'voter?page='+this.current_page)
				.then(response=>{
					console.log(response)
					$.notifyClose();
					vm.data.voters = response.data;
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error);
				})
		},

		edit: function (i) {
			var vm = this;
			this.data.voter = this.data.voters.data[i];
			this.$router.push({name: 'Edit Voter', params:{id:vm.data.voter.id}})
		},

		deleteVoter: function () {
			var vm = this;
			this.util.notify('Deleting voter', 'loading');
			this.util.hideModal('#delete-voter-modal');
			axios.delete(config.API+'voter/'+this.id)
				 .then(response=>{
				 	$.notifyClose();
				 	if (vm.util.showResult(response, 'success')) vm.refreshVoter();
				 })
				 .catch(error=>{
				 	$.notifyClose();
				 	vm.util.showResult(error);
				 })
		}
	},

	watch: {
		'$route.query.page': function () {
			$.notifyClose();
			this.refreshVoter();
		}
	},

	computed: {
		pages: function () {
			var pages = [];
			if (this.data.voters.last_page)
			for (var i = 1; i <= this.data.voters.last_page;i++) {
				let x = {};
				x['page'] = i;
				pages.push(x);
			}
			return pages;
		},

		current_page: function () {
			return this.$route.query.page ? this.$route.query.page : 1; 
		}
	}
}
</script>
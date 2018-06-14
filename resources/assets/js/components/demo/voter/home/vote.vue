<template>
<div class="row col-md-10 col-md-offset-1">
	<div class="col-md-4">
		<h4>Vote Information</h4><hr/>
		<ul class="list-group">
			<li class="list-group-item" v-for="position in data.positions">
				<b>{{ position.name }} : </b>{{ getName(position.id) }}
			</li>
			<li class="list-group-item">
				<center>
					<button class="btn btn-success" @click="util.showModal('#vote-modal')">Submit Vote</button>
					<button class="btn btn-default" @click="reset()">Reset</button>
				</center>
			</li>
		</ul>
	</div>
	<div class="col-md-8">
		<h4>Select Candidates</h4><hr/>
		<div class="panel panel-info" v-for="position in data.positions">
			<div class="panel-heading">{{ position.name }}</div>
			<div class="panel-body table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Partylist</th>
							<th>Course</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="nominee in data.nominees" v-if="nominee.position_id==position.id" @click="vote(position.id,nominee.id)">
							<td><input type="radio" :name="position.id" :id="nominee.id"/></td>
							<td>{{ nominee.name }}</td>
							<td>{{ getPartylist(nominee.partylist_id) }}</td>
							<td>{{ nominee.course }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<modal id="vote-modal">
		<modal-header>Vote</modal-header>
		<modal-body>
			<h3>Note: You can only vote once, so vote wisely.</h3>
		</modal-body>
		<modal-footer>
			<button class="btn btn-success" @click="submit()">Submit Vote</button>
			<button class="btn btn-default" data-dismiss="modal">Cancel</button>
		</modal-footer>
	</modal>

</div>
</template>

<script>
export default{
	created: function () {
		if (this.data.result.length > 0 || this.data.election.status != 2) 
			this.$router.push({name: 'Voter Home'})
		for (var i in this.data.positions) {
			this.selected.push({
				position_id: this.data.positions[i]['id'], 
				nominee_id: null, 
			});
		}
	},

	data: function () {
		return {
			selected: [],
			name: {}
		}
	},

	methods: {

		submit: function () {
			this.util.hideModal('#vote-modal');
			if (this.hasNullVote()) return;
			var vm = this;
			this.util.notify('Submitting your vote, please wait...', 'loading');
			let data = {};
			data['vote'] = this.selected;
			axios.post(config.API+'election/vote', data)
				.then(response=>{
					$.notifyClose();
					if (vm.util.showResult(response, 'success')){
						vm.data.result = response.data.result;
						vm.$router.push({name: 'Voter Home'});
					}

				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error, 'error');
				})

		},

		hasNullVote: function () {
			let selected = this.selected;
			for (var i in selected) 
				if (selected[i]['nominee_id'] == null){
					this.util.notify('You must vote on all position', 'error');
					return true;
				}
			return false;
		},

		reset: function () {
			let selected = this.selected;
			for (var i in selected){
				$('#'+selected[i]['nominee_id']).selected(false);
				selected[i]['nominee_id'] = null;
			}
		},

		vote: function (position_id, nominee_id) {
			$('#'+nominee_id).selected();
			for (var i in this.selected)
				if (this.selected[i]['position_id'] == position_id) {
					this.selected[i]['nominee_id'] = nominee_id;
				}
		},

		getName: function (id) {
			let positions = this.data.positions;
			let selected = this.selected;
			for (var i in selected) 
				if (selected[i]['position_id'] == id) 
					return this.getNominee(selected[i]['nominee_id']);
			return '';
		},

		getNominee: function (id) {
			let nominees = this.data.nominees;
			for (var i in nominees)
				if (nominees[i]['id'] == id) return nominees[i]['name'];
		},

		getPartylist: function (id) {
			let partylists = this.data.partylists;
			for (var i in partylists)
				if (partylists[i]['id']==id) return partylists[i]['name'];
			return 'No Partylist';
		}
	}
}
</script>
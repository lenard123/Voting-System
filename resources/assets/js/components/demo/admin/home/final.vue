<template>
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div v-for="position in positions">
				<h5>{{ position.name }}</h5>
				<div class="table-responsive">
					<table class="table table-striped table-condensed">
						<thead>
							<tr>
								<th width="10%">Student ID</th>
								<th width="30%">Name</th>
								<th width="20%">Partylist</th>
								<th width="20%">Course</th>
								<th width="20%">Votes</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="result in results" v-if="result.position_id==position.id">
								<td>{{ getNominee(result.nominee_id)['student_id'] }}</td>
								<td>{{ getNominee(result.nominee_id)['name'] }}</td>
								<td>{{ getPartylist(getNominee(result.nominee_id)['partylist_id']) }}</td>
								<td>{{ getNominee(result.nominee_id)['course'] }}</td>
								<td>{{ result.votes}}</td>
							</tr>
							<tr v-for="no_vote in no_votes" v-if="no_vote.position_id==position.id">
								<td>{{ no_vote.student_id }}</td>
								<td>{{ no_vote.name }}</td>
								<td>{{ getPartylist(no_vote.partylist_id) }}</td>
								<td>{{ no_vote.course }}</td>
								<td>0</td>
							</tr>
						</tbody>
					</table>
				</div>
				<hr/>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default{
	data: function() {
		return {
			nominees: [],
			results: [],
			partylists: [],
			positions: []
		}
	},

	methods: {
		getNominee: function (id) {
			let nominees = this.nominees;
			for (var i in nominees)
				if (id == nominees[i]['id'])
					return nominees[i];
			return {};
		},

		getPartylist: function (id) {
			let partylists = this.partylists;
			for (var i in partylists)
				if (id == partylists[i]['id'])
					return partylists[i]['name'];
			return 'No Partylist';
		}
	},

	created: function () {
		this.util.notify('Loading please wait...', 'loading');
		var vm = this;
		axios.get(config.API+'election/result/'+this.election_id)
			.then(response=>{
				$.notifyClose();
				vm.nominees = response.data.nominee;
				vm.results = response.data.result;
				vm.partylists = response.data.partylist;
				vm.positions = response.data.position;
			})
			.catch(error=>{
				$.notifyClose();
				vm.util.showResult(error, 'error');
			})
	},

	computed: {
		election_id: function () {
			return this.$route.params.election_id;
		},

		no_votes: function () {
			let nominees = this.nominees;
			let results = this.results;
			let no_votes = [];
			for (var i in nominees) {
				var hasvote = false;
				for (var y in results) {
					if (results[y]['nominee_id'] == nominees[i]['id'])
						hasvote = true;
				}
				if (!hasvote)
					no_votes.push(nominees[i]);
			}
			return no_votes;
		}

	}
}
</script>
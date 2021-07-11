<template>
<div class="panel panel-default">
	<div class="panel-body">
		<h4> Recent Elections</h4>
		<div class="form-group">
			<button class="btn btn-success" v-if="data.election.status == 1" @click="util.showModal('#start-election-modal')">Start Election</button>
			
			<router-link :to="{name: 'Current Result'}" class="btn btn-info" v-if="data.election.status == 2">
				View Results
			</router-link>
			
			<button class="btn btn-danger" v-if="data.election.status == 2" @click="util.showModal('#stop-election-modal')">End Election</button>	

			<label v-if="data.election.status == 2">Election has Started {{ start_date }}</label>

		</div>

		<div class="table-responsive">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Election Name</th>
						<th>Election Start</th>
						<th>Election End</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="election in data.elections">
						<td>{{ election.id }}</td>
						<td>{{ election.name }}</td>
						<td>{{ election.start}}</td>
						<td>{{ election.end}}</td>
						<td>
							<router-link :to="{name: 'Election Result', params:{election_id:election.id}}" class="btn btn-info">View Result</router-link></td>
					</tr>
					<tr v-if="data.elections.length < 1">
						<td colspan="5">No elections yet</td>
					</tr>
				</tbody>
			</table>
		</div>

		<form @submit.prevent="start" id="start_form">
		<modal id="start-election-modal">
			<modal-header>Start Election</modal-header>
			<modal-body>
				<div class="form-group">
					<label for="name">Election Name</label>
					<input type="text" name="name" class="form-control" placeholder="(Optional)"/>
				</div>
				<div class="form-group">
					<label for="password">Confirm Password</label>
					<input type="password" name="password" class="form-control" required/>
				</div>
			</modal-body>
			<modal-footer>
				<input type="submit" class="btn btn-info" value="Start"/>
				<input type="button" data-dismiss="modal" class="btn btn-default" value="Cancel"/>
			</modal-footer>
		</modal>
		</form>

		<form @submit.prevent="stop" id="stop_form">
		<modal id="stop-election-modal">
			<modal-header>Stop Election</modal-header>
			<modal-body>

				<div class="form-group">
					<label for="name">Election Name</label>
					<input type="text" name="name" :value="data.election.name" class="form-control" placeholder="(Optional)"/>
				</div>

				<div class="form-group">
					<label for="password">Confirm Password</label>
					<input type="password" name="password" class="form-control" required/>
				</div>
			</modal-body>
			<modal-footer>
				<input type="submit" class="btn btn-danger" value="Stop Election"/>
				<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
			</modal-footer>
		</modal>
		</form>

	</div>
</div>
</template>

<script>
export default{
	data: ()=>({
		start_date: null
	}),
	created: function () {
		this.refreshElection();
		var vm = this;
		setInterval(()=>{
			vm.start_date = moment(vm.data.election.start).fromNow();
		},1000);
	},

	methods: {

		stop: function () {
			var vm = this;
			this.util.hideModal('#stop-election-modal');
			this.util.notify('Stopping Election', 'loading');
			axios.post(config.API+'election/stop', $('#stop_form').serialize())
				.then(response=>{
					$.notifyClose();
					if (vm.util.showResult(response,'success')) {
						vm.refreshElection();
						vm.data.election =response.data.election;
						vm.data.positions = [];
						vm.data.partylists = [];
						vm.data.voters = [];
						vm.data.nominees = [];
						vm.data.results = [];
					}
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error, 'error');
				})
		},

		start: function () {
			var vm = this;
			this.util.hideModal('#start-election-modal');
			this.util.notify('Loading please wait', 'loading');
			axios.post(config.API+'election/start', $('#start_form').serialize())
				.then(response=>{
					$.notifyClose();
					if(vm.util.showResult(response, 'success')){
						vm.refreshElection();
						vm.data.election = response.data.election;
					}
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error, 'error');
				})
		},

		refreshElection: function(){		
			this.util.notify('Refreshing Election', 'loading');
			var vm = this;
			axios.get(config.API+'election')
				.then(response=>{
					$.notifyClose();
					vm.data.elections = response.data;
				})
				.catch(error=>{
					$.notifyClose();
					vm.util.showResult(error, 'error');
				})
		}
	}
}
</script>
<template>
<div class="row col-md-10 col-md-offset-1">
	<div class="col-md-4">
		<h4>Voter's Information</h4><hr/>
		<ul class="list-group">
			<li class="list-group-item"><b>Student ID : </b>{{ data.user.student_id }}</li>
			<li class="list-group-item"><b>Name : </b>{{ data.user.name }}</li>
			<li class="list-group-item"><b>Course : </b>{{ data.user.course }}</li>
			<li class="list-group-item" v-if="data.election.status==1">
				<center>Election hasn't started yet</center>
			</li>
			<li class="list-group-item" v-if="data.election.status==2">
				<center>
					<router-link v-if="!hasVoted()" :to="{name: 'Vote'}" class="btn btn-info">
						Vote Now
					</router-link>
					<router-link v-else :to="{name: 'Result'}" class="btn btn-info">
						View Result
					</router-link>
				</center>
			</li>
		</ul>
		<div v-if="hasVoted()">
			<hr/>
			<h4>Your votes information</h4><hr/>
			<ul class="list-group">
				<li class="list-group-item" v-for="result in data.result">
					<b>{{ getPosition(result.position_id) }} : </b>{{ getNominee(result.nominee_id) }}
				</li>
			</ul>
		</div>
	</div>

	<div class="col-md-8">
		<h4>Candidates Information</h4><hr/>
		<small>Click Picture to see details</small>
		<div class="panel panel-primary" v-for="position in data.positions">
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
						<tr v-for="(nominee,i) in data.nominees" v-if="nominee.position_id==position.id">
							<td><img 
									@click="view(i)"
									:src="data.storageURL+nominee.image" 
									class="thumbnail" 
									style="height: 60px;width: 60px;" />
							</td>
							<td>{{ nominee.name }}</td>
							<td>{{ getPartylist(nominee.partylist_id) }}</td>
							<td>{{ nominee.course }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<modal id="nominee-information-modal" aClass="primary">
			<modal-header>{{ header }}</modal-header>
			<modal-body>
				<div class="row">
					<div class="col-md-3">
						<img :src="data.storageURL+x.image" style="height: 150px; width: 150px" class="thumbnail"/>
					</div>
					<div class="col-md-9" style="margin-left: 5px;">
						<h3><strong><em>"{{ x.motto }}"</em></strong></h3>
						<b> Name : </b>{{ x.name }}<br/>
						<b> Course : </b>{{ x.course }}<br/>
						<b> Partylist : </b>{{ getPartylist(x.partylist_id) }}<br/><hr/>
						{{ x.description }}
					</div>
				</div>
			</modal-body>
			<modal-footer>
				<button data-dismiss="modal" class="btn btn-default">Close</button>
			</modal-footer>
		</modal>

	</div>
</div>
</template>

<script>
export default{
	created: function () {
		//console.log(this)
	},

	data: function () {
		return {
			x: {}
		}
	},

	methods: {
		hasVoted: function () {
			return this.data.result.length > 0;
		},

		getPartylist: function(id) {
			let partylists = this.data.partylists;
			for (var i in partylists)
				if (partylists[i]['id'] == id) return partylists[i]['name'];
			return 'No Partylist';
		},

		getPosition: function (id) {
			let positions = this.data.positions;
			for (var i in positions)
				if (positions[i].id == id) return positions[i].name;
			return '';
		},

		getNominee: function (id) {
			let nominees = this.data.nominees;
			for (var i in nominees) 
				if (nominees[i]['id']==id) return nominees[i].name;
			return '';
		},

		view: function (index) {
			this.x = this.data.nominees[index];
			this.util.showModal('#nominee-information-modal');
		}
	},

	computed: {
		header: function () {
			return this.x.name+' for '+this.getPosition(this.x.position_id);
		}
	}
}
</script>

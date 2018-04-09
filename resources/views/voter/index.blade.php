@extends('voter.layout.app')

@section('title','Voting System - Home')

@section('home') class="active" @endsection

@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h4>Voter's Information</h4><hr/>
			<ul class="list-group">
				<li class="list-group-item"><b>Student ID : </b>{{ $voter->STUDENTID }}</li>
				<li class="list-group-item"><b>Name : </b>{{ $voter->NAME }}</li>
				<li class="list-group-item"><b>Course : </b>{{ $voter->COURSE }}</li>
				<li class="list-group-item">
					@if (App\Http\Controllers\ElectionController::isStarted())
						@if (App\Http\Controllers\ResultController::isVoted(session('VID')))
							<input type="button" class="btn btn-primary" value="View Realtime Result" onclick="location.href='{{ $base_url }}voter/result'"/>
						@else
							<input type="button" class="btn btn-primary" value="Vote Now" onclick="location.href='{{ $base_url }}voter/vote'"/>
						@endif
					@else
						<center><span>Election hasn't started yet</span></center>
					@endif
				</li>
			</ul>
		</div>
		<div class="col-md-8">
			<h4>Candidate's Information</h4><hr/>
			<div class="panel-group">
				<div class="panel panel-info" v-for="position in positions" style="margin-bottom: 20px">
					<div class="panel-heading">@{{ position.POSITION }}</div>
					<div class="panel-body table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th>Partylist</th>
									<th>Name</th>
									<th>Course</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="nominee in nominees" v-if="nominee.POSITION==position.POSITION">
									<td>@{{ nominee.PARTYLIST == null  ? 'No partylist' : nominee.PARTYLIST }}</td>
									<td>@{{ nominee.NAME }}</td>
									<td>@{{ nominee.COURSE }}</td>
								</tr>
								<tr>
									<td colspan="5" v-if="nomineeCount(position.POSITION)<1">There is no nominee in this position</td>
								</tr>
						</table>
					</div>
				</div>				
			</div>
		</div>
	</div>
</div>
@endsection

@section('script')
<script>
	var baseurl = '{{ $base_url }}';
	var app = new Vue({
		el:'#app',
		data:{
			positions:[],
			nominees:[]
		},

		created(){
			this.getAllPosition();
			this.getAllNominee();
		},

		methods:{
			getAllPosition: function(){
				var vm = this;
				var url = baseurl+'api/position';
				axios.get(url).then(function(response){
					vm.positions = vm.positions.concat(response.data);
				})				
			},

			getAllNominee: function(){
				var vm = this;
				var url = baseurl+'api/nominee';
				axios.get(url).then(function(response){
					vm.nominees = response.data;
				})
			},

			nomineeCount: function(position){
				var i = 0
				for(var x=0; x< this.nominees.length; x++){
					if(this.nominees[x].POSITION == position) i++;
				}
				return i;
			}

		}
	})
</script>
@endsection
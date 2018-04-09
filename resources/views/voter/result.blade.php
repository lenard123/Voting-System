@extends('voter.layout.app')

@section('result') class='active' @endsection

@section('title', 'Voting System - Realtime Viewing of Results')

@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h4>Your Votes Information</h4><hr/>
			
			<ul class="list-group">
			@foreach($results as $result)
				<li class="list-group-item"><b>{{ $result->POSITION }} : </b>{{ $result->NAME }}</li>
			@endforeach
			</ul>
			
			<h4>Election Information</h4><hr/>
			
			<ul class="list-group">	
				<li class="list-group-item"><b>Election day : </b>@{{ new String(electioninfo['electionday']).split(" ")[0] }}</li>
				<li class="list-group-item"><b>Number of Position : </b>@{{ electioninfo['position'] }}</li>
				<li class="list-group-item"><b>Number of Voters : </b>@{{ electioninfo['voter'] }}</li>
				<li class="list-group-item"><b>Number of Voters who already voted : </b>@{{ electioninfo['voted'] }}</li>
				<li class="list-group-item"><b>Number of Voters who still not voting : </b>@{{ electioninfo['voting'] }}</li>
			</ul>			
		</div>
		<div class="col-md-8">
			<h4>Realtime Viewing of Result</h4><hr/>
			<div class="panel panel-info" style="margin-bottom: 20px" v-for="result in results">
				<div class="panel-heading">@{{  result['POSITION']}}</div>
				<div class="panel-body">
					<div v-for="voteresult in voteresults" v-if="result['POSITION']==voteresult['POSITION']">
						<label>@{{ voteresult['NAME'] }}</label>
						<div class="progress">
							<div class="progress-bar progress-bar-striped active" role="progressbar" v-bind:aria-valuenow="getPercentage(voteresult['VOTES'])" aria-valuemin="0" aria-valuemax="100" v-bind:style="'width:'+getPercentage(voteresult['VOTES'])+'%'" v-bind:class="randomColor(getPercentage(voteresult['VOTES']))">@{{ voteresult['VOTES']+' votes - '+ getPercentage(voteresult['VOTES']) }}%
							</div>
						</div>
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
		el: '#app',
		data:{
			electioninfo:{!! json_encode($electioninfo) !!},
			voteresults:{!! json_encode($voteresult) !!},
			results:{!! json_encode($results) !!}
		},

		methods:{
			getPercentage: function(a){
				var c = Math.floor((a/this.electioninfo['voter'])*100);
				return c;
			},

			randomColor: function(x){
				var result = '';
				if(x<30) result = 'progress-bar-danger';
				else if(x<50) result = 'progress-bar-warning';
				else if(x<80) result = 'progress-bar-info';
				else result = 'progress-bar-success';
				return result;
			},

			getVoterResults: function(){
				var url = baseurl+'api/voteresult';
				var vm = this;
				axios.get(url).then(function(response){
					vm.voteresult = response.data;
				})
			},

			getElectionInfo: function(){
				var url = baseurl+'api/electioninfo';
				var vm = this;
				axios.get(url).then(function(response){
					vm.electioninfo = response.data;
					vm.getVoterResults();
				})
			}
		}
	})
	setInterval(function(){
		app.getElectionInfo();
	},10000) //Auto refresh every 10 seconds
</script>
@endsection
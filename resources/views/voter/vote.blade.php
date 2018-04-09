@extends('voter.layout.app')

@section('title', 'Voting System - Vote Now')

@section('vote') class="active" @endsection

@section('app')
<div class="container">
	<div class="row">
		<form v-on:submit.prevent="">
		<div class="col-md-4">
			<h4>Vote Information</h4><hr/>
			<div v-show="loading.isLoading">
				<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
					<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
					<strong>@{{ loading.message }}</strong>
				</div>
			</div>
			<ul class="list-group">
				@foreach ($positions as $position)
				<li class="list-group-item"><b>{{ $position->POSITION }} : </b>{{selected["<?= $position->POSITION ?>"]}}</li>
				@endforeach
				<li class="list-group-item">
					<input type="button" class="btn btn-primary" value="Submit Vote" data-toggle="modal" data-target="#submitVoteModal"/>
					<input type="reset" class="btn btn-default" value="Reset" v-on:click="reset"/>
				</li>
			</ul>
		</div>
		<div class="col-md-8">
			<h4>Select Candidates</h4><hr/>
			@foreach ($positions as $position)
			<div class="panel panel-info" style="margin-bottom: 20px">
				<div class="panel-heading">{{ $position->POSITION }}</div>
				<div class="panel-body table-responsive">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th></th>
								<th>Partylist</th>
								<th>Name</th>
								<th>Course</th>
							</tr>
						</thead>
						<tbody>
							@foreach ($nominees as $nominee)
							@if ($nominee->POSITION == $position->POSITION)
							<tr v-on:click="select('{{ $position->ID }}','{{ $position->POSITION }}','{{ $nominee->ID }}','{{ $nominee->NAME }}')">
								<td><input type="radio" name="{{ $nominee->POSITION }}" id="{{ $nominee->ID }}"/></td>
								<td>{{ $nominee->PARTYLIST==null? 'No partylist': $nominee->PARTYLIST}}</td>
								<td>{{ $nominee->NAME }}</td>
								<td>{{ $nominee->COURSE }}</td>
							</tr>
							@endif
							@endforeach
						</tbody>
					</table>
				</div>
			</div>
			@endforeach
		</div>
	</form>
	</div>
</div>









<div class="modal fade" id="submitVoteModal" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Vote Wisely</h4>			
			</div>

			<div class="modal-body">
				<p>Submit vote?</p>
				<p>Note: You can only vote once, so vote wisely :)</p>
				<p>@{{ submitVoteMessage }}</p>
			</div>
	
			<div class="modal-footer">
				<button type="button" class="btn btn-info" v-on:click="vote()">Submit Vote</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>			
			</div>
		</div>

	</div>
</div>
@endsection 

@section('script')
<script>
	var baseurl = '{{ $base_url }}'
	var app = new Vue({
		el: '#app',
		data:{
			submitVoteMessage:'',
			candidate:{!! json_encode($nominees) !!},
			selected:{
				@foreach($positions as $position)
					"{{ $position->POSITION }}":""
					@if(!$loop->last),@endif
				@endforeach
			},
			ids:[
				@foreach($positions as $position)
					["{{ $position->ID }}",""]
					@if(!$loop->last),@endif
				@endforeach
			],

			loading:{
				isLoading: false,
				message: 'Loading...',
				alert_type: 'alert-info'
			}
		},
		methods:{
			vote: function(){
				var vm = this;
				this.ids.forEach(function(item, index){
					if(item[1] == ''){
						vm.showMessage('You should vote on all position', 'alert-warning');
						$('#submitVoteModal').modal('hide');
						return;
					} 
				})
				var params = 'data='+JSON.stringify(vm.ids);
				var url = baseurl+'api/submitvote';
				this.submitVoteMessage = "Loading...";
				axios.post(url, params).then(function(response){
					vm.submitVoteMessage = "";
					$('#submitVoteModal').modal('hide');
					switch (response.data.status) {
						case 'success':
							vm.showMessage(response.data.message, 'alert-success');
							break;
						case 'failed':
							vm.showMessage(response.data.message, 'alert-danger');
							break;
						default:
							console.log(response);
							vm.showMessage('An error occured', 'alert-danger');
							break;
					}			
				}).catch(function(error){
					$('#submitVoteModal').modal('hide');
					console.log(error);
					vm.showMessage('An error occured', 'alert-danger');	
				})
			},
			startLoading: function(){
				this.loading = {
					isLoading: true,
					message: 'Loading...',
					alert_type: 'alert-info'
				}
			},

			stopLoading: function(){
				this.loading = {
					isLoading: false,
					message:'',
					alert_type:''
				}
			},

			showMessage: function(message, alert_type){
				this.loading = {
					isLoading: true,
					message: message,
					alert_type: alert_type
				}
			},

			select: function(positionID, position, nomineeID, nomineeName){
				this.selected[position]= nomineeName;
				this.setId(positionID, nomineeID);
				$('#'+nomineeID).prop('checked', 'checked');
			},

			reset: function(){
				this.selected = {
					@foreach($positions as $position)
						"{{ $position->POSITION }}":""
						@if(!$loop->last),@endif
					@endforeach
				}
				this.ids = [
					@foreach($positions as $position)
						["{{ $position->ID }}",""]
						@if(!$loop->last),@endif
					@endforeach
				]
			},

			setId: function(positionID, nomineeID){
				var id = this.ids;
				var vm = this;
				id.forEach(function(item, index){
					if(item[0] == positionID) vm.ids[index][1] = nomineeID;
				})
			},

			getSelected: function(position){
				if(this.selected[position] == undefined){
					this.selected[position] = "";
					return "";
				}else{
					return this.selected[position];
				}
			}
		}
	})
</script>
@endsection
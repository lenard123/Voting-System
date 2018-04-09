@extends('admin.layout.app')

@section('title','Voting System - Manage Voters')

@section('managevoter') class="active" @endsection

@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h4>Add Voter</h4><hr/>
			<form v-on:submit.prevent="submit">
				<div v-show="loading.isLoading">
					<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
						<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
						<strong>@{{ loading.message }}</strong>
					</div>
				</div>
				<div class="form-group" v-bind:class="{'has-error': errors.has('studentid')}">
					<label for="studentid">Student ID</label>
					<input type="text" name="studentid" class="form-control" v-validate="'required'" v-model="item.studentid"/>
					<span v-show="errors.has('studentid')" class="text-danger">@{{ errors.first('studentid') }}</span>
				</div>				
				<div class="form-group" v-bind:class="{'has-error': errors.has('name')}">
					<label for="name">Name</label>
					<input type="text" name="name" class="form-control" v-validate="'required'" v-model="item.name"/>
					<span v-show="errors.has('name')" class="text-danger">@{{ errors.first('name') }}</span>
				</div>
				<div class="form-group" v-bind:class="{'has-error': errors.has('course')}">
					<label for="course">Course</label>
					<input type="text" name="course" class="form-control" v-validate="'required'" v-model="item.course"/>
					<span v-show="errors.has('course')" class="text-danger">@{{ errors.first('course') }}</span>
				</div>				
				<input type="submit" value="Submit" class="btn btn-info" v-if="item.action=='insert'" />
				<input type="submit" value="Update" class="btn btn-info" v-if="item.action=='update'" />
				<input type="button" value="Cancel" class="btn btn-default" v-if="item.action=='update'" v-on:click="insert()"/>
				<input type="reset" value="Reset" class="btn btn-default" />
			</form>
		</div>
		<div class="col-md-8">
			<h4>List of Voters</h4><hr/>
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Student ID</th>
							<th>Name</th>
							<th>Course</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="voter in voters">
							<td>@{{ voter.STUDENTID }}</td>
							<td>@{{ voter.NAME }}</td>
							<td>@{{ voter.COURSE }}</td>
							<td>
								<input type="button" class="btn btn-info" value="Edit" v-on:click="edit(voter.NAME, voter.STUDENTID, voter.COURSE, voter.ID)" />
								<input type="button" class="btn btn-danger" value="Delete" v-on:click="deleteItem(voter.ID, voter.NAME)" data-toggle="modal" data-target="#deleteVoterModal"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>	
		</div>
	</div>
</div>









<div class="modal fade" id="deleteVoterModal" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Delete Voter</h4>			
			</div>

			<div class="modal-body">
				<p>Are you sure to delete @{{ selectedName }}?</p>
				<p>@{{ deleteVoterMessage }}</p>
			</div>
	
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" v-on:click="deleteItem(item.id, selectedName)">Delete</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">No</button>			
			</div>
		</div>

	</div>
</div>	
@endsection

@section('script')
<script>
	var baseurl = '{{ $base_url }}';
	Vue.use(VeeValidate);
	var app = new Vue({
		el: '#app',
		data:{
			item:{
				action:'insert',
				name:'',
				course:'',
				studentid:'',
				id:''
			},
			loading:{
				isLoading: false,
				message: 'Loading...',
				alert_type: 'alert-info'
			},
			voters:[],
			selectedName:'',
			deleteVoterMessage:''
		},

		created(){
			this.getAllVoters();
		},

		methods:{
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

			getAllVoters: function(){
				var vm = this;
				var url = baseurl+'api/voter';
				axios.get(url).then(function(response){
					vm.voters = response.data;
				})
			},

			submit: function(){
				var vm=this;
				this.$validator.validateAll().then(function(isValid){
					if(!isValid) return;
					vm.startLoading();
					var params = 'name='+escape(vm.item.name)+'&studentid='+escape(vm.item.studentid)+'&course='+escape(vm.item.course);
					if(vm.item.action=='insert'){
						var url = baseurl+'api/voter';
						var req = axios.post(url, params);
					}else if(vm.item.action=='update'){
						var url = baseurl+'api/voter/'+vm.item.id;
						var req = axios.put(url, params);
					}

					req.then(function(response){
						vm.stopLoading();
						if(response.data.status == 'success'){
							vm.showMessage(response.data.message, 'alert-success');
							vm.getAllVoters();
						}else if(response.data.status == 'failed'){
							vm.showMessage(response.data.message, 'alert-danger');
						}else{
							console.log(response);
							vm.showMessage('An error occured', 'alert-danger');
						}
					}).catch(function(error){
						console.log(error);
						vm.showMessage('An error occured', 'alert-danger');
					})
				})
			},

			edit: function(name, studentid, course, id){
				this.item = {
					action: 'update',
					name: name,
					course: course,
					studentid: studentid,
					id: id
				}
			},

			insert: function(){
				this.item = {
					action: 'insert',
					name:'',
					course:'',
					studentid:'',
					id:''
				}
			},

			deleteItem: function(id, name){
				if(this.item.action != 'delete'){
					this.item.action = 'delete';
					this.item.id = id;
					this.selectedName = name;
				}else{
					var vm = this;
					this.deleteVoterMessage = "Loading...";
					var url = baseurl+'api/voter/'+id;
					axios.delete(url).then(function(response){
						vm.deleteVoterMessage = '';
						$('#deleteVoterModal').modal('hide');
						if(response.data.status == 'success'){
							vm.showMessage(response.data.message, 'alert-success');
							vm.getAllVoters();
						}else{
							vm.showMessage(response.data.message, 'alert-danger');
						}
					}).catch(function(error){
						vm.deleteVoterMessage = '';
						$('#deleteVoterModal').modal('hide');
						console.log(error);
						vm.showMessage('An error occured', 'alert-danger');
					})
				}
			}
		}		
	})
	$("#deleteVoterModal").on('hide.bs.modal', function () {
        app.$data.item.action = 'insert';
	});	
</script>
@endsection
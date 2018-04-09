@extends('admin.layout.app')

@section('title','Voting System - Manage Nominees')

@section('managenominee') class="active" @endsection







@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h4>Add Nominees</h4><hr/>
			<form v-on:submit.prevent="submit">
				<div v-show="loading.isLoading">
					<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
						<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
						<strong>@{{ loading.message }}</strong>
					</div>
				</div>
				<div class="form-group-sm" v-bind:class="{'has-error':field.position}">
					<label for="position">Position</label>
					<select name="position" class="form-control" v-model="item.position">
						<option v-bind:value="position.ID" v-for="position in positions">@{{ position.POSITION }}</option> 
					</select>
					<span class="text-danger" v-show="field.position">@{{ message }}</span>	
				</div>
				<div class="form-group-sm">
					<label for="partylist">Partylist</label>
					<select name="partylist" class="form-control" v-model="item.partylist">
						<option v-bind:value="partylist.ID" v-for="partylist in partylists">@{{ partylist.NAME }}</option>
					</select>
				</div>
				<div class="form-group-sm" v-bind:class="{'has-error':field.name}">
					<label for="name">Name</label>
					<input type="text" name="name" class="form-control" v-model="item.name"/>
					<span class="text-danger" v-show="field.name">@{{ message }}</span>
				</div>
				<div class="form-group-sm" v-bind:class="{'has-error':field.course}">
					<label for="course">Course</label>
					<input type="text" name="course" class="form-control" v-model="item.course"/>
					<span class="text-danger" v-show="field.course">@{{ message }}</span>
				</div>
				<div class="form-group" v-bind:class="{'has-error':field.studentid}">
					<label for="studentid">Student ID</label>
					<input type="text" name="studentid" class="form-control" v-model="item.studentid"/>
					<span class="text-danger" v-show="field.studentid">@{{ message }}</span>
				</div>
				<input type="submit" value="Submit" class="btn btn-info" v-if="item.action=='insert'" />
				<input type="submit" value="Update" class="btn btn-info" v-if="item.action=='update'" />
				<input type="button" value="Cancel" class="btn btn-default" v-if="item.action=='update'" v-on:click="insert()"/>
				<input type="reset" value="Reset" class="btn btn-default" />				
			</form>
		</div>
		<div class="col-md-8">
			<h4>Nominees List</h4><hr/>
			<div class="panel-group">
				<div class="panel panel-info" v-for="position in positions" v-if="position.ID!=0" style="margin-bottom: 20px">
					<div class="panel-heading">@{{ position.POSITION }}</div>
					<div class="panel-body table-responsive">
						<table class="table table-striped">
							<thead>
								<tr>
									<th>Partylist</th>
									<th>Name</th>
									<th>Course</th>
									<th>StudentID</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="nominee in nominees" v-if="nominee.POSITION==position.POSITION">
									<td>@{{ nominee.PARTYLIST == null  ? 'No partylist' : nominee.PARTYLIST }}</td>
									<td>@{{ nominee.NAME }}</td>
									<td>@{{ nominee.COURSE }}</td>
									<td>@{{ nominee.STUDENTID }}</td>
									<td>
										<input type="button" class="btn btn-danger" value="Delete" v-on:click="deleteItem(nominee
										.ID, nominee.NAME)" data-toggle="modal" data-target="#deleteNomineeModal"/>
										<input type="button" class="btn btn-default" value="Edit" v-on:click="edit(nominee.POSITIONID, nominee.PARTYLISTID, nominee.NAME, nominee.COURSE, nominee.STUDENTID, nominee.ID)"/>
									</td>
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









<div class="modal fade" id="deleteNomineeModal" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Delete Nominee</h4>			
			</div>

			<div class="modal-body">
				<p>Are you sure to delete @{{ selectedName }}?</p>
				<p>@{{ deleteNomineeMessage }}</p>
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
<script type="text/javascript">
	var baseurl = '{{ $base_url }}';
	var app = new Vue({
		el: '#app',
		data:{
			positions:[{"ID":0, "POSITION":"--- SELECT POSITION ---"}],
			partylists:[{"ID":0, "NAME":"--- SELECT PARTYLIST (Optional) ---"}],
			nominees:[],
			selectedName:'',
			deleteNomineeMessage:'',
			loading:{
				isLoading: false,
				message: 'Loading...',
				alert_type: 'alert-info'
			},
			item:{
				action:'insert',
				position:0,
				partylist:0,
				name:'',
				course:'',
				studentid:'',
				id:''
			},
			
			message:"",
			field:{
				position: false,
				name: false,
				course: false,
				studentid: false
			}
		},

		created(){
			this.getAllPosition();
			this.getAllPartylist();
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
			
			getAllPartylist: function(){
				var vm = this;
				var url = baseurl+'api/partylist';
				axios.get(url).then(function(response){
					vm.partylists = vm.partylists.concat(response.data);
				})
			},

			getAllNominee: function(){
				var vm = this;
				var url = baseurl+'api/nominee';
				axios.get(url).then(function(response){
					vm.nominees = response.data;
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

			submit: function(){
				if(!this.isValid()) return;
				var vm = this;
				vm.startLoading();
				var params = 'name='+escape(vm.item.name)+'&course='+escape(vm.item.course)+'&studentid='+escape(vm.item.studentid)+'&positionid='+escape(vm.item.position)+'&partylistid='+escape(vm.item.partylist);
				if(vm.item.action == 'insert'){
					var url = baseurl+'api/nominee';
					var req = axios.post(url, params);
				}else if(vm.item.action == 'update'){
					var url = baseurl+'api/nominee/'+vm.item.id;
					var req = axios.put(url, params);
				}
				req.then(function(response){
					if(response.data.status == 'success'){
						vm.showMessage(response.data.message, 'alert-success');
						vm.getAllNominee();
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
			},

			edit: function(positionid, partylistid, name, course, studentid, id){
				partylistid = partylistid == '' ? 0 : partylistid;
				this.item = {
					action:'update',
					position: positionid,
					partylist: partylistid,
					name:name,
					course:course,
					studentid:studentid,
					id:id
				}
			},

			validate: function(){
				var item = this.item;
				var x = {
					
				}
				return x;
			},

			isValid: function(){
				var item = this.item;
				if(item.position == 0){
					this.message = "You must select a position";
					this.field.position = true;
					return false;
				}else if(item.name == ''){
					this.message = "Name field must have a value";
					this.field.position = false;
					this.field.name = true;
					return false;
				}else if(item.course == ''){
					this.message = "Course field must have a value";
					this.field.position = false;
					this.field.name = false;
					this.field.course = true;
					return false;
				}else if(item.studentid == ''){
					this.message = "Student Id field must have a value";
					this.field.position = false;
					this.field.name = false;
					this.field.course = false;
					this.field.studentid = true;
					return false;
				}else{
					this.message = "";
					this.field = {
						position:false,
						name:false,
						course:false,
						studentid:false
					}
					return true;
				}
			},

			insert: function(){
				this.item = {
					action:'insert',
					position:0,
					partylist:0,
					name:'',
					course:'',
					studentid:'',
					id:''
				}
			},

			deleteItem: function(id, name){
				if(this.item.action != 'delete'){
					this.item = {
						action: 'delete',
						id: id
					}
					this.selectedName = name;
				}else{
					this.deleteNomineeMessage = 'Loading...';
					var vm = this;
					var url = baseurl+'api/nominee/'+id;
					axios.delete(url).then(function(response){						
						vm.deleteNomineeMessage = '';
						$('#deleteNomineeModal').modal('hide');						
						if(response.data.status == 'success'){
							vm.showMessage(response.data.message, 'alert-success');
							vm.getAllNominee();
						}else{
							vm.showMessage(response.data.message, 'alert-danger');
						}
					}).catch(function(error){
						vm.deletePartylistMessage = '';
						$('#deleteNomineeMessage').modal('hide');
						console.log(error);
						vm.showMessage('An error occured', 'alert-danger');
					})
				}				
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
	$("#deleteNomineeModal").on('hide.bs.modal', function () {
        app.$data.item.action = 'insert';
	});
</script>
@endsection
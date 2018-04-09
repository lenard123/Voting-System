@extends('admin.layout.app') 

@section('title','Voting System - Manage Position')

@section('manageposition') class="active" @endsection

@section('css')
	.loading{
		visibility: hidden;
	}
@endsection


@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h4>Add Position</h4><hr/>
			<form v-on:submit.prevent="submit">
				<div v-show="loading.isLoading">
					<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
						<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
						<strong>@{{ loading.message }}</strong>
					</div>
				</div>
				<div class="form-group" v-bind:class="{'has-error': errors.has('position')}">
					<label for="position">Position</label>
					<input type="text" name="position" class="form-control" v-validate="'required'" v-model="item.position"/>
					<span v-show="errors.has('position')" class="text-danger">@{{ errors.first('position') }}</span>
				</div>
				<input type="submit" value="Submit" class="btn btn-info" v-if="item.action=='insert'" />
				<input type="submit" value="Update" class="btn btn-info" v-if="item.action=='update'" />
				<input type="button" value="Cancel" class="btn btn-default" v-if="item.action=='update'" v-on:click="insert()"/>
				<input type="reset" value="Reset" class="btn btn-default" />
			</form>
		</div>
		<div class="col-md-8">
			<h4>List of Position</h4><hr/>
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>POSITION</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="position in positions">
							<td>@{{ position.ID }}</td>
							<td>@{{ position.POSITION }}</td>
							<td>
								<input type="button" class="btn btn-info" value="Edit" v-on:click="edit(position.ID, position.POSITION)" />
								<input type="button" class="btn btn-danger" value="Delete" v-on:click="deleteItem(position.ID, position.POSITION)" data-toggle="modal" data-target="#deletePositionModal"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>	
		</div>
	</div>
</div>	









<div class="modal fade" id="deletePositionModal" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Delete Position</h4>			
			</div>

			<div class="modal-body">
				<p>Are you sure to delete @{{ item.position }} position?</p>
				<p>@{{ deletePositionMessage }}</p>
			</div>
	
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" v-on:click="deleteItem(item.id, item.position)">Delete</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">No</button>			
			</div>
		</div>

	</div>
</div>
@endsection









@section('script')
<script>
	Vue.use(VeeValidate);
	var baseurl = '{{ $base_url }}';
	var app = new Vue({
		el: '#app',
		data:{
			deletePositionMessage:'',
			item:{
				action:'insert',
				id:'',
				position:''
			},

			loading:{
				isLoading: false,
				message: 'Loading...',
				alert_type: 'alert-info'
			},

			positions:[]
		},

		created(){
			this.getAllPosition();
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

			getAllPosition: function(){
				var vm = this;
				var url = baseurl+'api/position';
				axios.get(url).then(function(response){
					vm.positions = response.data;
				})
			},

			submit: function(){
				var vm = this;
				var params = 'position='+escape(vm.item.position);
				this.$validator.validateAll().then(function(isValid){
					if(!isValid) return;
					vm.startLoading();
					if(vm.item.action=='insert'){
						var url = baseurl+'api/position';
						axios.post(url, params).then(function(response){
							vm.stopLoading();
							if(response.data.status == 'success'){
								vm.showMessage(response.data.message, 'alert-success');
								vm.getAllPosition();
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
					}else{
						var url = baseurl+'api/position/'+vm.item.id
						axios.put(url, params).then(function(response){
							vm.stopLoading();
							if(response.data.status == 'success'){
								vm.showMessage(response.data.message, 'alert-success');
								vm.getAllPosition();
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
					}
				})

			},

			edit: function(id, position){
				this.item ={
					action: 'update',
					id: id,
					position: position
				}
			},

			insert: function(){
				this.item = {
					action: 'insert',
					id:'',
					position:''
				}
			},

			deleteItem: function(id, position){
				if(this.item.action != 'delete'){
					this.item = {
						action: 'delete',
						id: id,
						position: position
					}
				}else{
					this.deletePositionMessage = 'Loading...';
					var vm = this;
					var url = baseurl+'api/position/'+id;
					axios.delete(url).then(function(response){						
						vm.deletePositionMessage = '';
						$('#deletePositionModal').modal('hide');						
						if(response.data.status == 'success'){
							vm.showMessage(response.data.message, 'alert-success');
							vm.getAllPosition();
						}else{
							vm.showMessage(response.data.message, 'alert-danger');
						}
					}).catch(function(error){
						vm.deletePositionMessage = '';
						$('#deletePositionModal').modal('hide');
						console.log(error);
						vm.showMessage('An error occured', 'alert-danger');
					})
				}
			}
		}			
	})
	$("#deletePositionModal").on('hide.bs.modal', function () {
        app.$data.item.action = 'insert';
	});
</script>
@endsection


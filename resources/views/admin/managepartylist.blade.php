@extends('admin.layout.app')

@section('title','Voting System - Manage Partylist')

@section('managepartylist') class="active" @endsection

@section('css')
	.loading{
		visibility: hidden;
	}
@endsection

@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h4>Add Partylist</h4><hr/>
			<form v-on:submit.prevent="submit">
				<div v-show="loading.isLoading">
					<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
						<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
						<strong>@{{ loading.message }}</strong>
					</div>
				</div>
				<div class="form-group" v-bind:class="{'has-error': errors.has('partylist')}">
					<label for="partylist">Partylist</label>
					<input type="text" name="partylist" class="form-control" v-validate="'required'" v-model="item.partylist"/>
					<span v-show="errors.has('partylist')" class="text-danger">@{{ errors.first('partylist') }}</span>
				</div>
				<input type="submit" value="Submit" class="btn btn-info" v-if="item.action=='insert'" />
				<input type="submit" value="Update" class="btn btn-info" v-if="item.action=='update'" />
				<input type="button" value="Cancel" class="btn btn-default" v-if="item.action=='update'" v-on:click="insert()"/>
				<input type="reset" value="Reset" class="btn btn-default" />				
			</form>
		</div>
		<div class="col-md-8">
			<h4>List of Partylist</h4><hr/>
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>PARTYLIST</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="partylist in partylists">
							<td>@{{ partylist.ID }}</td>
							<td>@{{ partylist.NAME }}</td>
							<td>
								<input type="button" class="btn btn-info" value="Edit" v-on:click="edit(partylist.ID, partylist.NAME)" />
								<input type="button" class="btn btn-danger" value="Delete" v-on:click="deleteItem(partylist.ID, partylist.NAME)" data-toggle="modal" data-target="#deletePartylistModal"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>	
		</div>
	</div>
</div>









<div class="modal fade" id="deletePartylistModal" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Delete Partylist</h4>			
			</div>

			<div class="modal-body">
				<p>Are you sure to delete @{{ item.partylist }} partylist?</p>
				<p>@{{ deletePartylistMessage }}</p>
			</div>
	
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" v-on:click="deleteItem(item.id, item.partylist)">Delete</button>
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
			deletePartylistMessage:'',
			item:{
				action:'insert',
				id:'',
				partylist:''
			},

			loading:{
				isLoading: false,
				message: 'Loading...',
				alert_type: 'alert-info'
			},

			partylists:[]
		},

		created(){
			this.getAllItem();
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

			getAllItem: function(){
				var vm = this;
				var url = baseurl+'api/partylist';
				axios.get(url).then(function(response){
					vm.partylists = response.data;
				})
			},

			submit: function(){
				var vm=this;
				var params = "partylist="+escape(vm.item.partylist);
				this.$validator.validateAll().then(function(isValid){
					if(!isValid) return;
					vm.startLoading();
					if(vm.item.action == 'insert'){
						var url = baseurl+'api/partylist';
						var params = 'partylist='+vm.item.partylist;
						axios.post(url, params).then(function(response){
							if(response.data.status == 'success'){
								vm.showMessage(response.data.message, 'alert-success');
								vm.getAllItem();
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
					}else if(vm.item.action == 'update'){
						var url = baseurl + 'api/partylist/'+vm.item.id;
						var params = 'partylist='+vm.item.partylist;
						axios.put(url, params).then(function(response){
							if(response.data.status == 'success'){
								vm.showMessage(response.data.message, 'alert-success');
								vm.getAllItem();
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

			edit: function(id, partylist){
				this.item = {
					action: 'update',
					id: id,
					partylist: partylist
				}
			},

			insert: function(){
				this.item = {
					action: 'insert',
					id:'',
					position:''
				}
			},

			deleteItem: function(id, partylist){
				if(this.item.action != 'delete'){
					this.item = {
						action: 'delete',
						id: id,
						partylist: partylist
					}
				}else{
					this.deletePartylistMessage = 'Loading...';
					var vm = this;
					var url = baseurl+'api/partylist/'+id;
					axios.delete(url).then(function(response){						
						vm.deletePartylistMessage = '';
						$('#deletePartylistModal').modal('hide');						
						if(response.data.status == 'success'){
							vm.showMessage(response.data.message, 'alert-success');
							vm.getAllItem();
						}else{
							vm.showMessage(response.data.message, 'alert-danger');
						}
					}).catch(function(error){
						vm.deletePartylistMessage = '';
						$('#deletePartylistModal').modal('hide');
						console.log(error);
						vm.showMessage('An error occured', 'alert-danger');
					})
				}				
			}
		}
	})
	$("#deletePartylistModal").on('hide.bs.modal', function () {
        app.$data.item.action = 'insert';
	});
</script>
@endsection
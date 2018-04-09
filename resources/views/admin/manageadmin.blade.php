@extends('admin.layout.app')

@section('manageadmin') class="active" @endsection
@if( session('ID') == 1 && $action == 'manage' )

	@section('app')	
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<h4>Add Admin</h4><hr/>
				<form v-on:submit.prevent="submit">
					<div v-show="loading.isLoading">
						<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
							<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
							<strong>@{{ loading.message }}</strong>
						</div>
					</div>
					<div class="form-group" v-bind:class="{'has-error': errors.has('name')}">
						<label for="name">Name</label>
						<input type="text" name="name" class="form-control" v-validate="'required'" v-model="item.name"/>
						<span v-show="errors.has('name')" class="text-danger">@{{ errors.first('name') }}</span>
					</div>
					<div class="form-group" v-bind:class="{'has-error': errors.has('user')}">
						<label for="user">Username</label>
						<input type="text" name="user" class="form-control" v-validate="'required'" v-model="item.user"/>
						<span v-show="errors.has('user')" class="text-danger">@{{ errors.first('user') }}</span>
					</div>
					<div class="form-group" v-bind:class="{'has-error': errors.has('pass')}">
						<label for="pass">Password</label>
						<input type="password" name="pass" class="form-control" v-validate="'required'" v-model="item.pass"/>
						<span v-show="errors.has('pass')" class="text-danger">@{{ errors.first('pass') }}</span>
					</div>
					<div class="form-group" v-bind:class="{'has-error': errors.has('confirm')}">
						<label for="confirm">Confirm</label>
						<input type="password" name="confirm" class="form-control" v-validate="'required'" v-model="item.confirm"/>
						<span v-show="errors.has('confirm')" class="text-danger">@{{ errors.first('confirm') }}</span>
					</div>
					<input type="submit" value="Submit" class="btn btn-info" />
					<input type="reset" value="Reset" class="btn btn-default" />
				</form>
			</div>
			<div class="col-md-8">
				<h4>List of Admin</h4><hr/>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>NAME</th>
								<th>USERNAME</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="admin in admins">
								<td>@{{ admin.NAME }}</td>
								<td>@{{ admin.USERNAME }}</td>
								<td>
									<input type="button" class="btn btn-danger" value="Delete" v-on:click="deleteItem(admin.ID, admin.USERNAME)" data-toggle="modal" data-target="#deleteAccountModal"/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>	
			</div>
		</div>
	</div>	









	<div class="modal fade" id="deleteAccountModal" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Delete Account</h4>			
				</div>

				<div class="modal-body">
					<p>Are you sure to delete @{{ item.selectedname }}?</p>
					<p>@{{ deleteAccountMessage }}</p>
				</div>
		
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" v-on:click="deleteItem(item.id, item.selectedname)">Delete</button>
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
			data: {
				loading:{
					isLoading: false,
					message: 'Loading...',
					alert_type: 'alert-info'
				},
				item:{
					account:'insert',
					selectedname:'',
					name:'',
					user:'',
					pass:'',
					confirm:''
				},
				admins:[],
				deleteAccountMessage:''
			},

			created(){
				this.getAllAdmin();
			},

			methods:{
				getAllAdmin: function(){
					var vm = this;
					var url = baseurl+'api/account';
					axios.get(url).then(function(response){
						vm.admins = response.data;
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
					var vm = this;
					this.$validator.validateAll().then(function(isValid){
						if(!isValid) return;
						if(vm.item.pass != vm.item.confirm){
							vm.showMessage('Password not match', 'alert-danger');
							return;
						}
						vm.startLoading();
						var url = baseurl+'api/account';
						var params = 'name='+escape(vm.item.name)+'&user='+escape(vm.item.user)+'&pass='+escape(vm.item.pass);
						axios.post(url, params).then(function(response){
							vm.stopLoading();
							if(response.data.status == 'success'){
								vm.showMessage(response.data.message, 'alert-success');
								vm.getAllAdmin();
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

				deleteItem: function(id, name){
					if(this.item.action != 'delete'){
						this.item = {
							action: 'delete',
							id: id,
							selectedname: name
						}
					}else{
						this.deleteAccountMessage = 'Loading...';
						var vm = this;
						var url = baseurl+'api/account/'+id;
						axios.delete(url).then(function(response){						
							vm.deleteAccountMessage = '';
							$('#deleteAccountModal').modal('hide');						
							if(response.data.status == 'success'){
								vm.showMessage(response.data.message, 'alert-success');
								vm.getAllAdmin();
							}else{
								vm.showMessage(response.data.message, 'alert-danger');
							}
						}).catch(function(error){
							vm.deleteAccountMessage = '';
							$('#deleteAccountModal').modal('hide');
							console.log(error);
							vm.showMessage('An error occured', 'alert-danger');
						})
					}
				}
			}
		})
		$("#deleteAccountModal").on('hide.bs.modal', function () {
	        app.$data.item.action = 'insert';
		});
	</script>
	@endsection

@else
	@section('title', 'Voting System - Update Account')

	@section('app')
	
	<div class="container">
		<div class="row">
			<div class="col-md-3">
			</div>
			<div class="col-md-6">
				<h4>Update Account</h4><hr/>
				<div v-show="loading.isLoading">
					<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
						<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
						<strong>@{{ loading.message }}</strong>
					</div>
				</div>
				








				<!-- User Form-->
				<form v-on:submit.prevent="updateUser" v-show="action=='updateUser'" id="updateUser" data-vv-scope="userForm">
					<div class="form-group" v-bind:class="{'has-error': errors.has('userForm.name')}">
						<label for="name">Name</label>
						<input type="text" name="name" class="form-control" v-validate="'required'" v-model="item.NAME" id="name"/>
						<span v-show="errors.has('userForm.name')" class="text-danger">@{{ errors.first('userForm.name') }}</span>
					</div>
					<div class="form-group" v-bind:class="{'has-error': errors.has('userForm.user')}">
						<label for="user">User</label>
						<input type="text" name="user" class="form-control" v-validate="'required'" v-model="item.USERNAME"/>
						<span v-show="errors.has('userForm.user')" class="text-danger">@{{ errors.first('userForm.user') }}</span>
					</div>
					<input type="submit" value="Submit" class="btn btn-info" />
					<input type="button" value="Change Password" class="btn btn-default" v-on:click="action='updatePassword'"/>
					<input type="reset" value="Reset" class="btn btn-default" />
				</form>









				<!-- Pass Form -->
				<form v-on:submit.prevent="updatePass" v-show="action=='updatePassword'" id="updatePass" data-vv-scope="passForm">
					<div class="form-group" v-bind:class="{'has-error': errors.has('passForm.currentPassword')}">
						<label for="currentPassword">Current Password</label>
						<input type="text" name="currentPassword" class="form-control" v-validate="'required'" v-model="password.currentPassword" />
						<span v-show="errors.has('passForm.currentPassword')" class="text-danger">@{{ errors.first('passForm.currentPassword') }}</span>
					</div>
					<div class="form-group" v-bind:class="{'has-error': errors.has('passForm.newPassword')}">
						<label for="newtPassword">New Password</label>
						<input type="Password" name="newPassword" class="form-control" v-validate="'required'" v-model="password.newPassword">
						<span v-show="errors.has('passForm.newPassword')" class="text-danger">@{{ errors.first('passForm.newPassword') }}</span>
					</div>
					<div class="form-group" v-bind:class="{'has-error': errors.has('passForm.confirmPassword')}">
						<label for="confirmPassword">Confirm Password</label>
						<input type="Password" name="confirmPassword" class="form-control" v-validate="'required'" v-model="password.confirmPassword">
						<span v-show="errors.has('passForm.confirmPassword')" class="text-danger">@{{ errors.first('passForm.confirmPassword') }}</span>
					</div>
					<input type="submit" value="Submit" class="btn btn-info" />
					<input type="button" value="Cancel" class="btn btn-default" v-on:click="action='updateUser'"/>
					<input type="reset" value="Reset" class="btn btn-default" />
				</form>









			</div>
			<div class="col-md-3">
			</div>
		</div>
	</div>
	@endsection

	@section('script')
	<script>
		var baseurl = '{{ $base_url }}';
		Vue.use(VeeValidate);
		var app = new Vue({
			el:'#app',
			data:{
				loading:{
					isLoading: false,
					message: 'Loading...',
					alert_type: 'alert-info'
				},
				item:{
					NAME:'',
					USERNAME:''
				},
				password:{
					currentPassword:'',
					newPassword:'',
					confirmPassword:''
				},
				action:'updateUser',
				ID:{{ session('ID') }}
			},

			created(){
				this.getData();
			},

			methods:{
				getData: function(){
					var vm = this;
					var url = baseurl+'api/account/'+this.ID;
					axios.get(url).then(function(response){
						vm.item = response.data;
					})
				},

				updatePass: function(){
					var vm = this;
					this.$validator.validateAll('passForm').then(function(isValid){
						if(!isValid) return;
						if(vm.password.newPassword != vm.password.confirmPassword){
							vm.showMessage('Password not match', 'alert-danger');
							return;
						} 
						vm.startLoading();
						var url = baseurl+'api/account/'+vm.ID+'?action=updatePass';
						var params = 'oldpass='+escape(vm.password.currentPassword)+'&newpass='+escape(vm.password.newPassword);
						axios.put(url, params).then(function(response){
							vm.stopLoading();
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
							console.log(error);
							vm.showMessage('An error occured', 'alert-danger');	
						})
					})
				},

				updateUser: function() {
					var vm = this;
					this.$validator.validateAll('userForm').then(function(isValid){
						if(!isValid) return;
						vm.startLoading();
						var url = baseurl+'api/account/'+vm.ID+'?action=updateUser';
						var params = 'name='+escape(vm.item.NAME)+'&user='+escape(vm.item.USERNAME);
						axios.put(url, params).then(function(response){
							vm.stopLoading();
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
							console.log(error);
							vm.showMessage('An error occured', 'alert-danger');	
						})
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
				}
			}
		})
	</script>
	@endsection
@endif
@extends('admin.layout.app')

@section('title','Voting System - Login')

@section('css')
	.login{
		margin:0px 20px 50px;
		height: 500px;
		max-width: 350px;
		border-radius: 10px;
		background-color: #ffffff;
		box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
		padding: 77px 40px 33px 40px;
	}

	.login-input{
		margin-top: 8px;
		margin-bottom: 8px;
	}

	.loading{
		visibility: hidden;
	}
@endsection

@section('app')
	<center>
		<br/><br/>
		<div class="container login">
			<b><h3>Administrator Login</h3></b>
			<h4>Web based Voting System</h4><br/><br/><br/>
			<div v-bind:class="{'loading':!loading.isLoading}">
				<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
					<strong>@{{ loading.message }}</strong>
				</div>
			</div>
			<form v-on:submit.prevent='submit'>
				{{ csrf_field() }}
				<div class="input-group login-input" v-bind:class="{'has-error': errors.has('user')}">
					<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
					<input id="email" type="text" class="form-control" name="user" placeholder="Enter your Username here" v-validate="'required'" v-model="credential.user"/>
				</div>
				<div class="input-group login-input" v-bind:class="{'has-error': errors.has('pass')}">
					<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
					<input type="password" id="password" class="form-control" name="pass" placeholder="Enter your password here" v-validate="'required'" v-model="credential.pass">
				</div>
				<input type="submit" id="submit" name="" class="btn btn-primary" value="SUBMIT" style="width: 100%" />
			</form>
		</div>
	</center>
@endsection

@section('script')
	<script>
		Vue.use(VeeValidate);
		var baseurl = '{{ $base_url }}';
		var app = new Vue({
			el: '#app',
			
			data:{
				loading:{
					isLoading: false,
					message: 'Loading...',
					alert_type: 'alert-info'
				},

				credential:{
					user:'',
					pass:''
				}
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

				submit: function(){
					var vm = this;
					this.$validator.validateAll().then(
						function(isValid){
							if(!isValid) return;
							vm.startLoading();
							var url = baseurl+'api/login';
							var params = 'user='+escape(vm.credential.user)+'&pass='+escape(vm.credential.pass);
							axios.post(url, params).then(
								function(response){
									vm.stopLoading();
									if(response.data.status == "success"){
										vm.showMessage(response.data.message, 'alert-success');
										location.href=baseurl+'admin';
									}else{
										vm.showMessage(response.data.message, 'alert-danger');
									}
								}).catch(
								function(error){
									vm.stopLoading();
									console.log(error);
									vm.showMessage('An error occured','alert-danger');
								})
						})
				}
			}


		});
	</script>
@endsection
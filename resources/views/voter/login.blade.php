@extends('voter.layout.app')

@section('title','Voting System')

@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-3">
			<h3>Voters Login</h3><hr/>
			<form v-on:submit.prevent="submit">
				<div v-show="loading.isLoading">
					<div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
						<button type="button" class="close" data-dismiss="modal" v-on:click="stopLoading()">&times;</button>
						<strong>@{{ loading.message }}</strong>
					</div>
				</div>
				<div class="form-group has-warning has-feedback" v-bind:class="{'has-error': errors.has('voterid')}">
                    <label for="voterid">Voter's ID</label>
                    <input type="text" name="voterid" class="form-control" autocomplete="off" v-validate="'required'" v-model="voterid">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
	                <span class="text-danger" v-show="errors.has('voterid')">@{{ errors.first('voterid') }}</span>
                </div>
                <input type="submit" value="Login" class="btn btn-info" />
			</form>
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
			loading:{
				isLoading: false,
				message: 'Loading...',
				alert_type: 'alert-info'
			},

			voterid:''
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
				this.$validator.validateAll().then(function(isValid){
					if(!isValid) return;
					vm.startLoading();
					var url = baseurl+'api/vlogin';
					var params = 'voterid='+escape(vm.voterid);
					axios.post(url, params).then(function(response){
						vm.stopLoading();
						switch (response.data.status) {
							case 'success':
								vm.showMessage(response.data.message, 'alert-success');
								location.href=baseurl+"voter";
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
			}
		}
	})
</script>
@endsection
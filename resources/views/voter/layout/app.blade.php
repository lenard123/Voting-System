<!DOCTYPE html>
<html>
<head>
	<title>@yield('title')</title>
	<script src="<?php echo $base_url;?>js/jquery.min.js"></script>
	<script src="<?php echo $base_url;?>js/vue.js"></script>
	<script src="<?php echo $base_url;?>js/bootstrap.min.js"></script>
	<script src="<?php echo $base_url;?>js/vee-validate.min.js"></script>
	<script src="<?php echo $base_url;?>js/axios.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="<?php echo $base_url;?>css/bootstrap.min.css" />

	<style type="text/css">
		body{
			background-color: lightyellow;
			color: #000000;
			font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
		    margin-top: 70px;	
		}

		@section('css')

		@show
	</style>

</head>
<body>









<!-- Navigation var-->
<nav class="navbar navbar-inverse navbar-fixed-top" id="nav">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="<?php echo $base_url;?>">Voting System</a>
		</div>
		@if(App\Http\Controllers\AuthController::isVLogin())
		<div class="collapse navbar-collapse navbar-right" id="myNavbar">	
			<ul class="nav navbar-nav">
				<li @yield('home')><a href="{{ $base_url }}voter"><span class="glyphicon glyphicon-home"></span></a></li>
				
				@if (App\Http\Controllers\ElectionController::isStarted())
					@if (App\Http\Controllers\ResultController::isVoted(session('VID')))
						<li @yield('result')><a href="{{ $base_url }}voter/result">Real time Result</a></li>
					@else
						<li @yield('vote')><a href="{{ $base_url }}voter/vote">Vote Now</a></li>
					@endif
				@endif
				<li @yield('account') class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span> <span class="caret"></span></a>
					<ul class="dropdown-menu">
	                    <li><a href="#" data-toggle="modal" data-target="#logoutModal">
	                    	<span class="glyphicon glyphicon-log-out"></span> Logout</a>
	                    </li>
                	</ul>
                </li>
			</ul>
		</div>
		@endif
	</div>
</nav>









<div id="app">
@section('app')
@show
</div>

@if (App\Http\Controllers\AuthController::isVlogin())
<div class="modal fade" id="logoutModal" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Logout</h4>
			</div>

			<div class="modal-body">
				<p>Are you sure to logout?</p>
				<p>@{{ message }}</p>
			</div>
	
			<div class="modal-footer">
				<button type="button" class="btn btn-info" v-on:click="logout">Yes</button>
				<button type="button" class="btn btn-default" data-dismiss="modal">No</button>
			</div>
		</div>

	</div>
</div>

<script>
	var baseurl = '{{ $base_url }}';
	var logoutModal = new Vue({
		el: '#logoutModal',
		data:{
			message:''
		},

		methods:{
			logout: function(){
				var vm = this;
				this.message = 'Logging out...';
				var url = baseurl+'api/logout';
				axios.get(url).then(
					function(response){
						if(response.data.status == 'success'){
							vm.message = response.data.message;
							location.href = baseurl+'voter/login';
						}else{
							vm.message = 'An error occured';
						}
					}
				).catch(function(error){
						console.log(error);
						vm.message = 'An error occured';
				})
				
			}
		}
	})
</script>
@endif







@section('script')
@show









</body>
</html>
<div class="modal fade" id="@yield('modal-id')" role="dialog">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				@section('modal-header')
				@show
			</div>

			<div class="modal-body">
				@section('modal-body')
				@show
			</div>
	
			<div class="modal-footer">
				@section('modal-footer')
				@show
			</div>
		</div>

	</div>
</div>









@section('modal-script')
@show
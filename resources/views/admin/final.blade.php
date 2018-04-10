@extends('admin.layout.app')

@section('title','Voting System - Election Result')

@section('app')
<div class="container">
	<div class="row">
		<div class="col-md-12">
			@foreach($positions as $position)
			<h5>{{ $position->POSITION }}</h5>
			<div class="table-responsive">
				<table class="table table-striped table-condensed">
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th style="text-align: right;padding-right: 8px">Votes</th>
					</tr>
					@foreach($voteresults as $voteresult)
					@if($voteresult->POSITION==$position->POSITION)
					<tr>
						<td>{{ $voteresult->ID }}</td>
						<td>{{ $voteresult->NAME }}</td>
						<td style="text-align: right;padding-right: 15px">{{ $voteresult->VOTES }}</td>
					</tr>
					@endif
					@endforeach
				</table>
			</div>
			@endforeach
		</div>
	</div>
</div>
@endsection

@section('aditionalcontent')
<nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">

    <div class="container">
        <div class="navbar-text">
            <a href="javascript:window.print()">Print Result</a>
        </div>
    </div>

</nav>
@endsection
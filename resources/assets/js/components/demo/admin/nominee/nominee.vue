<template>
<div class="container col-md-10 col-md-offset-1">
	<h4>Manage Nominee</h4>
	<router-view></router-view>
</div>
</template>

<script>
export default{
	created: function () {
		this.util.setTitle('Voting System - Manage Nominee');
	}
}
</script> 

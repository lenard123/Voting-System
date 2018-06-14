<template>
<div class="container col-md-8 col-md-offset-2">
	<h4>Manage Election</h4>
	<router-view></router-view>
</div>
</template>

<script>
export default{
	created: function () {
		this.util.setTitle('Voting System - Manage Election');
	}
}
</script> 

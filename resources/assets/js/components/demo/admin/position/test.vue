<template>
<table id="sample_table" class="table table-hover">
	<thead>
		<tr>
			<th>A</th>
			<th>B</th>
			<th>C</th>
		</tr>
	</thead>
	<tbody></tbody>
</table>
</template>

<script>
export default{
	created: function () {
		let fakeData = [
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>'],
			['Column1', 'Column2', '<button v-on:click="x()">click me</button>']
		]
		this.$nextTick(()=>{
			$('#sample_table').dataTable({
				aaData: fakeData
			})
		})
	},
	
	methods: {
		x: function () {
			console.log('clicked');
		}
	}
}
</script>
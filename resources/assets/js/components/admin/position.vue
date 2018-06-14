<template>
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<h3><b>Add Position</b></h3>
			<form>
				<div class="form-group">
					<label for="name">Position</label>
					<input type="text" name="name" class="form-control" required/>
				</div>

				<div class="form-group">
					<input type="button" value="Submit" class="btn btn-info"/>
					<input type="reset" value="Reset" class="btn btn-default"/>
				</div>
			</form>
		</div>
		<div class="col-md-8">
			<datatable v-bind="data" />
		</div>
	</div>
</div>
</template>

<script>
export default{
	data: () => ({
		yyy : [
			{id: 1, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 2, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 3, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 4, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 5, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 6, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 7, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 8, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 9, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 10, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 11, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 12, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 13, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 14, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 15, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 16, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 17, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'},
			{id: 18, name: 'Sample Data', x: 'Sample Data', btn: '<button @click="log" class="btn btn-info">Click me</button>'}
		],

		data: {
			columns: [
				{title:'ID', field: 'id'},
				{title:'name', field: 'name'},
				{title:'x', field:'x'},
				{title:'', field:'btn', html: true}
			],
			data: [],

			total: 0,

			query: {
				limit: 10,
				offset: 0,
				sort: '',
				order: ''
			}
		}
	}),

	created: function () {
		console.log(this);
	},

	watch : {
		'data.query': {
			handler (query) {
				this.data.data = this.xxx;
				this.data.total = this.yyy.length;
			},

			deep: true
		}
	},

	computed: {
		xxx : function () {
			var offset = this.data.query.offset; //0
			var limit = this.data.query.limit; //10
			return this.yyy.slice(offset, offset+limit);
		}
	}
}
</script>
 import AdminIndex from './components/demo/admin/index.vue';
 import AdminLogin from './components/demo/admin/login.vue';
 
 import test from './components/demo/admin/position/test.vue';
 import FinalResult from './components/demo/admin/home/final.vue';

 import ManageElection from './components/demo/admin/home/home.vue';
 import ManageElectionIndex from './components/demo/admin/home/index.vue';
 import ManageElectionResult from './components/demo/admin/home/result.vue';

 import ManagePosition from './components/demo/admin/position/position.vue';
 import ManagePositionIndex from './components/demo/admin/position/index.vue';
 import ManagePositionAdd from './components/demo/admin/position/add.vue';
 import ManagePositionEdit from './components/demo/admin/position/edit.vue';

 import ManagePartylist from './components/demo/admin/partylist/partylist.vue';
 import ManagePartylistIndex from './components/demo/admin/partylist/index.vue';
 import ManagePartylistAdd from './components/demo/admin/partylist/add.vue';
 import ManagePartylistEdit from './components/demo/admin/partylist/edit.vue';

 import ManageVoter from './components/demo/admin/voter/voter.vue';
 import ManageVoterIndex from './components/demo/admin/voter/index.vue';
 import ManageVoterAdd from './components/demo/admin/voter/add.vue';
 import ManageVoterEdit from './components/demo/admin/voter/edit.vue';

 import ManageNominee from './components/demo/admin/nominee/nominee.vue';
 import ManageNomineeIndex from './components/demo/admin/nominee/index.vue';
 import ManageNomineeAdd from './components/demo/admin/nominee/add.vue';
 import ManageNomineeEdit from './components/demo/admin/nominee/edit.vue';

 import ManageAccount from './components/demo/admin/admin/admin.vue';
 import ManageAccountIndex from './components/demo/admin/admin/index.vue';
 import ManageAccountEdit from './components/demo/admin/admin/edit.vue';
 import ManageAccountPassword from './components/demo/admin/admin/password.vue';
 import ManageAccountAdd from './components/demo/admin/admin/add.vue';

const default_component = {
	template: '<div>Not found: {{ $route.path }}</div>'
}

const routes = [

	{
		path: '/', 
		component: AdminIndex,
		children: [

			{
				path: 'result/:election_id',
				component: FinalResult,
				name: 'Election Result'
			},

			{
				path: '', 
				component: ManageElection, 
				children: [

					{
						path: '',
						component: ManageElectionIndex,
						name: 'Admin Home'
					},

					{
						path: 'result',
						component: ManageElectionResult,
						name: 'Result'
					}

				]
			},

			{
				path: 'position',
				component: ManagePosition,
				children: [
					
					{
						path:'',
						component: ManagePositionIndex,
						name: 'Manage Position'
					},

					{
						path:'add',
						component: ManagePositionAdd,
						name: 'Add Position'
					},

					{
						path: 'edit/:id',
						component: ManagePositionEdit,
						name: 'Edit Position'
					}
				]
			},

			{
				path: 'partylist',
				component: ManagePartylist,
				children: [

					{
						path: '',
						component: ManagePartylistIndex,
						name: 'Manage Partylist'
					},

					{
						path: 'add',
						component: ManagePartylistAdd,
						name: 'Add Partylist'
					},

					{
						path: 'edit/:id',
						component: ManagePartylistEdit,
						name: 'Edit Partylist'
					}

				]
			},

			{
				path: 'voter',
				component: ManageVoter,
				children: [

					{
						path: '',
						component: ManageVoterIndex,
						name: 'Manage Voter'
					},

					{
						path: 'add',
						component: ManageVoterAdd,
						name: 'Add Voter'
					},

					{
						path: 'edit/:id',
						component: ManageVoterEdit,
						name: 'Edit Voter'
					}

				]
			},

			{
				path: 'nominee',
				component: ManageNominee,
				children: [

					{
						path: '',
						component: ManageNomineeIndex,
						name: 'Manage Nominee'
					},

					{
						path: 'add',
						component: ManageNomineeAdd,
						name: 'Add Nominee'
					},

					{
						path: 'edit/:id',
						component: ManageNomineeEdit,
						name: 'Edit Nominee'
					}

				]
			},

			{
				path: '/account',
				component: ManageAccount,
				children: [

					{
						path: '',
						component: ManageAccountIndex,
						name: 'Manage Account'
					},

					{
						path: 'update',
						component: ManageAccountEdit,
						name: 'Update Account'
					},

					{
						path: 'password',
						component: ManageAccountPassword,
						name: 'Update Password'
					},

					{
						path: 'add',
						component: ManageAccountAdd,
						name: 'Add Account'
					}

				]
			}
		]
	},

	{
		path: '/login',
		component: AdminLogin,
		name: 'Admin Login'
	},

	{
		path: '/test',
		component: test
	}
];

export default routes;
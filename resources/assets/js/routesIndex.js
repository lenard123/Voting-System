import VoterLogin from './components/demo/voter/login.vue';
import VoterHome from './components/demo/voter/index.vue';

import Home from './components/demo/voter/home/index.vue';
import Vote from './components/demo/voter/home/vote.vue';
import Result from './components/demo/voter/home/result.vue';

import AdminLogin from './components/demo/admin/login.vue';
import AdminIndex from './components/demo/admin/index.vue';

import ManageElection from './components/demo/admin/home/home.vue';
import ManageElectionIndex from './components/demo/admin/home/index.vue';
import FinalResult from './components/demo/admin/home/final.vue';

const default_component = {
	template: '<div>Not found: {{ $route.path }}</div>'
}

export default [
	{
		path: '/',
		component: VoterHome,
		children: [

			{
				path: '',
				component: Home,
				name: 'Voter Home'
			},

			{
				path: 'vote',
				component: Vote,
				name: 'Vote'
			},

			{
				path: 'result',
				component: Result,
				name: 'Result'
			}

		]
	},

	{
		path: '/login',
		component: VoterLogin,
		name: 'Voter Login'
	},

	{
		path: '/admin/login',
		component: AdminLogin,
		name: 'Admin Login'
	},

	{
		path: '/admin',
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
					}
				]
			}
		]
	}
]
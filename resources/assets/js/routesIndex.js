import VoterLogin from './components/demo/voter/login.vue';
import VoterHome from './components/demo/voter/index.vue';

import Home from './components/demo/voter/home/index.vue';
import Vote from './components/demo/voter/home/vote.vue';
import Result from './components/demo/voter/home/result.vue';

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
	}
]
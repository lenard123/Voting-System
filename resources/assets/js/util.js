const methods = {
	/**
	 * Hide Modal
	 * @param 	{String} 	Modal ID
	 *
	 */
	hideModal: function (id) {
		$(id).modal('hide');
	},

	/**
	 * Check if Login
	 *
	 * @return 	{Boolean}	isLogin
	 */
	isLogin: function () {
		return localStorage['Access Token'] ? true : false;
	},

	/**
	 * Log a messages
	 * @param 	{String}	Message
	 *
	 */
	log: function (message) {
		if (config.debug) console.log(message);
	},

	/**
	 * Show an alert message
	 * @param {String}		message to be Shown
	 * @param {String}		type of message (info|error|loading|success)
	 * @param {Boolean}		if message will be closed imediately (true|false)
	 * @return {Notify}		
	 */
	notify: function (message, label = 'info', progress) {

		let delay = 5000;
		let type = 'info';
		let icon = 'fa fa-info';

		switch (label) {
			case 'error':
				type = 'danger';
				icon = 'fa fa-warning';
				break;
			case 'loading':
				delay = 0;
				icon = 'fa fa-refresh fa-spin';
				break;
			case 'success':
				type = 'success';
				icon = 'fa fa-check';
				break;
			case 'progress':
				$.notifyClose();
				delay = 0;
				message = `<label>${message}</label>
							<div class="progress">
								<div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100" style="width: ${progress}%">
								</div>
							</div>`;
				icon = 'fa fa-refresh fa-spin';		
				break;
		}

		return $.notify({
			message: message,
			icon: icon
		}, {
			type: type,
			delay: delay,
			placement: {from: 'top', align: 'center'}
		});
	},


	/** 
	 * Set Authorization for all outgoing request
	 * 
	 */
	setAuthorization: function () {
		axios.defaults.headers.common['Authorization'] = localStorage['Access Token'];
		$.ajaxSetup({headers:{'Authorization': localStorage['Access Token']}});
	},


	/**
	 * Set the title of the webpage
	 * @param 	{String}	Title
	 *
	 */
	setTitle: function (title) {
		$('title').text(title);
	},

	/**
	 * Get the error Message
	 * @param 	{String}	Data
	 * @param 	{Int}		Response Status
	 * @return 	{String}	Error Message
	 */
	getErrorMessage: function (data, status)
	{
		var message = '';
		switch (status) {
			case 200:
				message = data.message;
				break;
			case 422: 
				data = typeof data == 'string' ? JSON.parse(data) : data;
				for (var i in data) 
					data[i].map(y=>{message+=y+'<br/>';});
				break;
			case 401:
				message = 'You need to login first.';
				break;
			default:
				message = 'An error occured.';
				break;
		}
		return message;
	},

	/**
	 * Show the modal
	 * @param 	{String}	Modal ID
	 * 
	 */
	showModal: function (id) {
		$(id).modal('show');
	},

	/**
	 * Show result from an http request
	 * @param 	{Response}	response
	 * @param 	{Type}		responseType (error|success)
	 * @param 	{library}	Library used (ajax|axios) 		Default : axios
	 */
	showResult: function (response, type, library = 'axios') {
		this.log (response);
		var isSuccess = data => data.status == 'success'; 
		if (library == 'axios') {
			if (type == 'success') {
				if (isSuccess(response.data)) {
					this.notify(response.data.message, 'success');
					return true;
				} else {
					this.notify(response.data.message, 'error');
				}
			} else {
				var status =  response.response ? response.response.status : 500;
				var message = this.getErrorMessage(response.response.data, status);
				this.notify(message, 'error');
				return status;
			} 
		} else if (library == 'ajax') {
			if (type == 'success') {
				if (isSuccess(response)) {
					this.notify(response.message, 'success');
					return true;
				} else {
					this.notify(response.message, 'error');
				}
			} else if (type == 'error') {
				var status =  response.status;
				var message = this.getErrorMessage(response.responseText, status);
				this.notify(message, 'error');
				return status;
			}
		}
	}
}

const data = {
	baseURL: config.baseURL,
	API: config.API,
	storageURL: config.storageURL,
	elections: [],
	election: {},
	user: {},
	positions: [],
	position: {},
	partylists: [],
	partylist:{},
	voters:{},
	voter:{},
	nominees:[],
	nominee:{},
	admins:[],
	information: {},
	result: [],
	results: [],
	last_update: new Date()
}

export default {
	data: function () {
		return {
			util: methods,
			data: data
		}
	}
}
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    add: function add() {
      if (this.loading || !this.isPasswordMatch()) return;
      var vm = this;
      this.loading = true;
      this.util.notify('Adding Admin', 'loading');
      axios.post(config.API + 'admin', $('#add_form').serialize()).then(function (response) {
        vm.loading = false;
        $.notifyClose();

        if (vm.util.showResult(response, 'success')) {
          vm.$router.push({
            name: 'Manage Account'
          });
        }
      })["catch"](function (error) {
        vm.loading = false;
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    },
    isPasswordMatch: function isPasswordMatch() {
      var isMatch = $('[name=password]').val() == $('[name=confirm_password]').val();
      if (!isMatch) this.util.notify('Password not match', 'error');
      return isMatch;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.util.setTitle('Voting System - Manage Account');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    refreshUser: function refreshUser() {
      var vm = this;
      axios.get(config.API + 'admin/' + this.data.user.id).then(function (response) {
        vm.data.user = response.data;
      });
    },
    edit: function edit() {
      if (this.loading) return;
      this.loading = true;
      var vm = this;
      this.util.notify('Updating account', 'loading');
      axios.put(config.API + 'admin/' + this.data.user.id, $('#edit_form').serialize()).then(function (response) {
        $.notifyClose();
        vm.loading = false;

        if (vm.util.showResult(response, 'success')) {
          vm.refreshUser();
          vm.$router.push({
            name: 'Admin Home'
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error, 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: 0
    };
  },
  created: function created() {
    this.refreshAdmin();
  },
  methods: {
    deleteAdmin: function deleteAdmin() {
      this.util.hideModal('#delete-admin-modal');
      this.util.notify('Deleting admin', 'loading');
      var vm = this;
      axios["delete"](config.API + 'admin/' + this.id).then(function (response) {
        $.notifyClose();
        if (vm.util.showResult(response, 'success')) vm.refreshAdmin();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    },
    refreshAdmin: function refreshAdmin() {
      this.util.notify('Refreshing admin', 'loading');
      var vm = this;
      axios.get(config.API + 'admin').then(function (response) {
        $.notifyClose();
        if (response.data.status == 'failed') vm.util.showResult(response, 'success');else vm.data.admins = response.data;
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    edit: function edit() {
      if (this.loading || !this.checkPassword()) return;
      var vm = this;
      vm.loading = true;
      vm.util.notify('Updating Password', 'loading');
      axios.put(config.API + 'admin/password/' + this.data.user.id, $('#edit_form').serialize()).then(function (response) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(response, 'success');
        vm.$router.push({
          name: 'Admin Home'
        });
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error, 'error');
      });
    },
    checkPassword: function checkPassword() {
      var isMatch = $("[name=password]").val() == $("[name=confirm_password]").val();

      if (!isMatch) {
        this.util.notify('Password not match', 'error');
      }

      return isMatch;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/final.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/final.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      nominees: [],
      results: [],
      partylists: [],
      positions: []
    };
  },
  methods: {
    getNominee: function getNominee(id) {
      var nominees = this.nominees;

      for (var i in nominees) {
        if (id == nominees[i]['id']) return nominees[i];
      }

      return {};
    },
    getPartylist: function getPartylist(id) {
      var partylists = this.partylists;

      for (var i in partylists) {
        if (id == partylists[i]['id']) return partylists[i]['name'];
      }

      return 'No Partylist';
    }
  },
  created: function created() {
    this.util.notify('Loading please wait...', 'loading');
    var vm = this;
    axios.get(config.API + 'election/result/' + this.election_id).then(function (response) {
      $.notifyClose();
      vm.nominees = response.data.nominee;
      vm.results = response.data.result;
      vm.partylists = response.data.partylist;
      vm.positions = response.data.position;
    })["catch"](function (error) {
      $.notifyClose();
      vm.util.showResult(error, 'error');
    });
  },
  computed: {
    election_id: function election_id() {
      return this.$route.params.election_id;
    },
    no_votes: function no_votes() {
      var nominees = this.nominees;
      var results = this.results;
      var no_votes = [];

      for (var i in nominees) {
        var hasvote = false;

        for (var y in results) {
          if (results[y]['nominee_id'] == nominees[i]['id']) hasvote = true;
        }

        if (!hasvote) no_votes.push(nominees[i]);
      }

      return no_votes;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.util.setTitle('Voting System - Manage Election');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      start_date: null
    };
  },
  created: function created() {
    this.refreshElection();
    var vm = this;
    setInterval(function () {
      vm.start_date = moment(vm.data.election.start).fromNow();
    }, 1000);
  },
  methods: {
    stop: function stop() {
      var vm = this;
      this.util.hideModal('#stop-election-modal');
      this.util.notify('Stopping Election', 'loading');
      axios.post(config.API + 'election/stop', $('#stop_form').serialize()).then(function (response) {
        $.notifyClose();

        if (vm.util.showResult(response, 'success')) {
          vm.refreshElection();
          vm.data.election = response.data.election;
          vm.data.positions = [];
          vm.data.partylists = [];
          vm.data.voters = [];
          vm.data.nominees = [];
          vm.data.results = [];
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    },
    start: function start() {
      var vm = this;
      this.util.hideModal('#start-election-modal');
      this.util.notify('Loading please wait', 'loading');
      axios.post(config.API + 'election/start', $('#start_form').serialize()).then(function (response) {
        $.notifyClose();

        if (vm.util.showResult(response, 'success')) {
          vm.refreshElection();
          vm.data.election = response.data.election;
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    },
    refreshElection: function refreshElection() {
      this.util.notify('Refreshing Election', 'loading');
      var vm = this;
      axios.get(config.API + 'election').then(function (response) {
        $.notifyClose();
        vm.data.elections = response.data;
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/result.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/result.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    console.log(this);
    this.refreshNominees();
    this.$nextTick(function () {
      this.initChart();
    });
  },
  watch: {
    position_id: function position_id() {
      this.initChart();
    }
  },
  methods: {
    refreshNominees: function refreshNominees() {
      var vm = this;
      this.util.notify('Refreshing results', 'loading');
      axios.get(config.API + 'nominee').then(function (response) {
        $.notifyClose();
        vm.data.nominees = response.data;
        vm.refreshResults();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    },
    refreshResults: function refreshResults() {
      var vm = this;
      this.util.notify('Refreshing results', 'loading');
      axios.get(config.API + 'election/results').then(function (response) {
        $.notifyClose();
        vm.data.results = response.data;
        vm.data.last_update = new Date();
        vm.initChart();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    },
    initChart: function initChart() {
      $.plot($('#chart'), this.datas, {
        series: {
          pie: {
            show: true,
            innerRadius: 0.5
          }
        }
      });
    },
    getPosition: function getPosition(id) {
      var positions = this.data.positions;

      for (var i in positions) {
        if (id == positions[i]['id']) return positions[i]['name'];
      }

      return '';
    },
    getNominee: function getNominee(id) {
      var nominees = this.data.nominees;

      for (var i in nominees) {
        if (id == nominees[i]['id']) return nominees[i]['name'];
      }

      return '';
    },
    getVotes: function getVotes(id) {
      var results = this.data.results;

      for (var i in results) {
        if (results[i]['nominee_id'] == id) return results[i]['votes'];
      }

      return 0;
    }
  },
  computed: {
    last_update: function last_update() {
      var x = this.data.last_update;
      return x.toDateString() + ' ' + x.toLocaleTimeString();
    },
    position_id: function position_id() {
      return this.$route.query.position_id ? this.$route.query.position_id : this.data.positions[0]['id'];
    },
    datas: function datas() {
      //var results = 
      var data = [];
      var nominees = this.data.nominees;

      for (var i in nominees) {
        if (nominees[i]['position_id'] == this.position_id) {
          var row = [];
          row['label'] = nominees[i]['name'];
          row['data'] = [[1, this.getVotes(nominees[i]['id'])]];
          data.push(row);
        }
      }

      return data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: true
    };
  },
  created: function created() {
    var _this = this;

    this.util.setTitle('Voting System - Administrator');
    var vm = this;

    if (this.util.isLogin()) {
      this.util.setAuthorization();
      axios.get(config.API + 'admin/information').then(function (response) {
        console.log(response);
        vm.data.user = response.data.user;
        vm.data.election = response.data.election;
        vm.data.partylists = response.data.partylist;
        vm.data.positions = response.data.position;
        vm.loading = false;
      })["catch"](function (error) {
        $.notifyClose();

        if (_this.util.showResult(error) == 401) {
          vm.logout();
        }
      });
    } else {
      this.$router.push({
        name: 'Admin Login'
      });
    }
  },
  methods: {
    logout: function logout() {
      localStorage.clear();
      this.$router.push({
        name: 'Admin Login'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: {
        value: 'Login',
        isLoading: false
      }
    };
  },
  created: function created() {
    if (this.util.isLogin()) return this.$router.push({
      name: 'Admin Home'
    });
    this.util.setTitle('Admin Login');
  },
  methods: {
    login: function login() {
      var _this = this;

      if (this.loading.isLoading) return;
      var vm = this;
      this.startLoading();
      axios.post(config.API + 'admin/login', $('#login_form').serialize()).then(function (response) {
        vm.stopLoading();

        if (_this.util.showResult(response, 'success')) {
          localStorage['Access Token'] = "Bearer ".concat(response.data.token);

          _this.util.setAuthorization();

          vm.$router.push({
            name: 'Admin Home'
          });
        }
      })["catch"](function (error) {
        vm.stopLoading();

        _this.util.showResult(error, 'error');
      });
    },
    startLoading: function startLoading() {
      this.util.notify('Logging in', 'loading');
      this.loading = {
        value: 'Loading...',
        isLoading: true
      };
    },
    stopLoading: function stopLoading() {
      $.notifyClose();
      this.loading = {
        value: 'Login',
        isLoading: false
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    add: function add() {
      if (this.loading) return;
      var vm = this;
      this.loading = true;
      this.util.notify('Adding Nominee', 'progress', 0);
      $('#add_form').ajaxSubmit({
        success: function success(response) {
          $.notifyClose();
          vm.loading = false;
          if (vm.util.showResult(response, 'success', 'ajax')) vm.$router.push({
            name: 'Manage Nominee'
          });
        },
        error: function error(_error) {
          $.notifyClose();
          vm.loading = false;
          vm.util.showResult(_error, 'error', 'ajax');
        },
        uploadProgress: function uploadProgress(a, b, c, progress) {
          vm.util.notify('Adding Nominee', 'progress', progress);
        }
      });
    }
  },
  computed: {
    position_id: {
      get: function get() {
        return this.$route.query.position_id;
      },
      set: function set(id) {
        this.$router.replace({
          query: {
            position_id: id
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    if (!this.nominee.id) this.$router.push({
      name: 'Manage Nominee'
    });
  },
  methods: {
    edit: function edit() {
      if (this.loading) return;
      var vm = this;
      this.loading = true;
      this.util.notify('Updating nominee', 'progress', 0);
      $('#edit_form').ajaxSubmit({
        success: function success(response) {
          $.notifyClose();
          vm.loading = false;
          if (vm.util.showResult(response, 'success', 'ajax')) vm.$router.push({
            name: 'Manage Nominee'
          });
        },
        error: function error(_error) {
          $.notifyClose();
          vm.loading = false;
          vm.util.showResult(_error, 'error', 'ajax');
        },
        uploadProgress: function uploadProgress(a, b, c, progress) {
          vm.util.notify('Updating Nominee', 'progress', progress);
        }
      });
    }
  },
  computed: {
    id: function id() {
      return this.$route.params.id;
    },
    nominee: function nominee() {
      for (var i in this.data.nominees) {
        if (this.data.nominees[i].id == this.id) return this.data.nominees[i];
      }

      return {};
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: 0
    };
  },
  created: function created() {
    this.refreshNominee();
  },
  methods: {
    deleteNominee: function deleteNominee() {
      this.util.hideModal('#delete-nominee-modal');
      var vm = this;
      this.util.notify('Deleting nominee', 'loading');
      axios["delete"](config.API + 'nominee/' + this.id).then(function (response) {
        $.notifyClose();
        if (vm.util.showResult(response, 'success')) vm.refreshNominee();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    },
    refreshNominee: function refreshNominee() {
      var vm = this;
      this.util.notify('Refreshing Nominees', 'loading');
      axios.get(config.API + 'nominee').then(function (response) {
        $.notifyClose();
        console.log(response);
        vm.data.nominees = response.data;
      })["catch"](function (error) {
        $.notifyClose();
        vm.showResult(error);
      });
    },
    getPosition: function getPosition(id) {
      var positions = this.data.positions;

      for (var i in positions) {
        if (positions[i].id == id) return positions[i]['name'];
      }
    },
    getPartylist: function getPartylist(id) {
      var partylists = this.data.partylists;

      for (var i in partylists) {
        if (partylists[i].id == id) return partylists[i]['name'];
      }

      return 'No partylists';
    }
  },
  computed: {
    nominees: function nominees() {
      var nominees = [];
      var y = this.data.nominees;

      for (var nominee in this.data.nominees) {
        if (y[nominee].position_id == this.position_id || this.position_id == 0) {
          var x = y[nominee];
          x.position = this.getPosition(y[nominee].position_id);
          x.partylist = this.getPartylist(y[nominee].partylist_id);
          nominees.push(x);
        }
      }

      return nominees;
    },
    position_id: function position_id() {
      return this.$route.query.position_id ? this.$route.query.position_id : 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.util.setTitle('Voting System - Manage Nominee');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    add: function add() {
      if (this.loading) return;
      this.loading = true;
      var vm = this;
      this.util.notify('Adding Partylist', 'loading');
      axios.post(config.API + 'partylist', $('#add-form').serialize()).then(function (response) {
        $.notifyClose();
        vm.loading = false;

        if (vm.util.showResult(response, 'success')) {
          vm.$router.push({
            name: 'Manage Partylist',
            query: {
              refresh: true
            }
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    if (!this.data.partylist.id) {
      this.$router.push({
        name: 'Manage Partylist'
      });
    }
  },
  methods: {
    edit: function edit() {
      if (this.loading) return;
      this.loading = true;
      var vm = this;
      this.util.notify('Updating partylist', 'loading');
      axios.put(config.API + 'partylist/' + this.data.partylist.id, $('#edit-form').serialize()).then(function (response) {
        vm.loading = false;
        $.notifyClose();

        if (vm.util.showResult(response, 'success')) {
          vm.$router.push({
            name: 'Manage Partylist',
            query: {
              refresh: true
            }
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: 0
    };
  },
  created: function created() {
    if (this.$route.query.refresh) {
      this.refreshPartylist();
      this.$router.replace({
        name: 'Manage Partylist'
      });
    }
  },
  methods: {
    refreshPartylist: function refreshPartylist() {
      var vm = this;
      this.util.notify('Refreshing Partylist', 'loading');
      axios.get(config.API + 'partylist').then(function (response) {
        console.log(response);
        $.notifyClose();
        vm.data.partylists = response.data;
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    },
    edit: function edit(i) {
      var vm = this;
      this.data.partylist = this.data.partylists[i];
      this.$router.push({
        name: 'Edit Partylist',
        params: {
          id: vm.data.partylist.id
        }
      });
    },
    deletePartylist: function deletePartylist() {
      var vm = this;
      this.util.notify('Deleting partylist', 'loading');
      this.util.hideModal('#delete-partylist-modal');
      axios["delete"](config.API + 'partylist/' + this.id).then(function (response) {
        $.notifyClose();
        if (vm.util.showResult(response, 'success')) vm.refreshPartylist();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.util.setTitle('Voting System - Manage Partylist');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    add: function add() {
      if (this.loading) return;
      this.loading = true;
      var vm = this;
      this.util.notify('Adding Position', 'loading');
      axios.post(config.API + 'position', $('#add-form').serialize()).then(function (response) {
        $.notifyClose();
        vm.loading = false;

        if (vm.util.showResult(response, 'success')) {
          vm.$router.push({
            name: 'Manage Position',
            query: {
              refresh: true
            }
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    if (!this.data.position.id) {
      this.$router.push({
        name: 'Manage Position'
      });
    }
  },
  methods: {
    edit: function edit() {
      if (this.loading) return;
      this.loading = true;
      var vm = this;
      this.util.notify('Updating position', 'loading');
      axios.put(config.API + 'position/' + this.data.position.id, $('#edit-form').serialize()).then(function (response) {
        vm.loading = false;
        $.notifyClose();

        if (vm.util.showResult(response, 'success')) {
          vm.$router.push({
            name: 'Manage Position',
            query: {
              refresh: true
            }
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: 0
    };
  },
  created: function created() {
    if (this.$route.query.refresh) {
      this.refreshPosition();
      this.$router.replace({
        name: 'Manage Position'
      });
    }
  },
  methods: {
    refreshPosition: function refreshPosition() {
      var vm = this;
      this.util.notify('Refreshing Position', 'loading');
      axios.get(config.API + 'position').then(function (response) {
        console.log(response);
        $.notifyClose();
        vm.data.positions = response.data;
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    },
    initDatatable: function initDatatable() {
      var vm = this;
      $('#position_table').DataTable({
        destroy: true,
        searching: false,
        info: false,
        autoWidth: false,
        dom: 'Bfrtip'
      });
    },
    edit: function edit(i) {
      var vm = this;
      this.data.position = this.data.positions[i];
      this.$router.push({
        name: 'Edit Position',
        params: {
          id: vm.data.position.id
        }
      });
    },
    deletePosition: function deletePosition() {
      var vm = this;
      this.util.notify('Deleting position', 'loading');
      this.util.hideModal('#delete-position-modal');
      axios["delete"](config.API + 'position/' + this.id).then(function (response) {
        $.notifyClose();
        if (vm.util.showResult(response, 'success')) vm.refreshPosition();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/position.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/position.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.util.setTitle('Voting System - Manage Position');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    add: function add() {
      if (this.loading) return;
      this.loading = true;
      var vm = this;
      this.util.notify('Adding Voter', 'loading');
      axios.post(config.API + 'voter', $('#add-form').serialize()).then(function (response) {
        $.notifyClose();
        vm.loading = false;

        if (vm.util.showResult(response, 'success')) {
          vm.$router.push({
            name: 'Manage Voter'
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    if (!this.data.voter.id) {
      this.$router.push({
        name: 'Manage Voter'
      });
    }
  },
  methods: {
    edit: function edit() {
      if (this.loading) return;
      this.loading = true;
      var vm = this;
      this.util.notify('Updating voter', 'loading');
      axios.put(config.API + 'voter/' + this.data.voter.id, $('#edit-form').serialize()).then(function (response) {
        vm.loading = false;
        $.notifyClose();

        if (vm.util.showResult(response, 'success')) {
          vm.$router.push({
            name: 'Manage Voter'
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.loading = false;
        vm.util.showResult(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: 0
    };
  },
  created: function created() {
    this.refreshVoter();
  },
  methods: {
    search: function search() {},
    refreshVoter: function refreshVoter() {
      var vm = this;
      this.util.notify('Refreshing Voter', 'loading');
      axios.get(config.API + 'voter?page=' + this.current_page).then(function (response) {
        console.log(response);
        $.notifyClose();
        vm.data.voters = response.data;
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    },
    edit: function edit(i) {
      var vm = this;
      this.data.voter = this.data.voters.data[i];
      this.$router.push({
        name: 'Edit Voter',
        params: {
          id: vm.data.voter.id
        }
      });
    },
    deleteVoter: function deleteVoter() {
      var vm = this;
      this.util.notify('Deleting voter', 'loading');
      this.util.hideModal('#delete-voter-modal');
      axios["delete"](config.API + 'voter/' + this.id).then(function (response) {
        $.notifyClose();
        if (vm.util.showResult(response, 'success')) vm.refreshVoter();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    }
  },
  watch: {
    '$route.query.page': function $routeQueryPage() {
      $.notifyClose();
      this.refreshVoter();
    }
  },
  computed: {
    pages: function pages() {
      var pages = [];
      if (this.data.voters.last_page) for (var i = 1; i <= this.data.voters.last_page; i++) {
        var x = {};
        x['page'] = i;
        pages.push(x);
      }
      return pages;
    },
    current_page: function current_page() {
      return this.$route.query.page ? this.$route.query.page : 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    this.util.setTitle('Voting System - Manage Voters');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {//console.log(this)
  },
  data: function data() {
    return {
      x: {}
    };
  },
  methods: {
    hasVoted: function hasVoted() {
      return this.data.result.length > 0;
    },
    getPartylist: function getPartylist(id) {
      var partylists = this.data.partylists;

      for (var i in partylists) {
        if (partylists[i]['id'] == id) return partylists[i]['name'];
      }

      return 'No Partylist';
    },
    getPosition: function getPosition(id) {
      var positions = this.data.positions;

      for (var i in positions) {
        if (positions[i].id == id) return positions[i].name;
      }

      return '';
    },
    getNominee: function getNominee(id) {
      var nominees = this.data.nominees;

      for (var i in nominees) {
        if (nominees[i]['id'] == id) return nominees[i].name;
      }

      return '';
    },
    view: function view(index) {
      this.x = this.data.nominees[index];
      this.util.showModal('#nominee-information-modal');
    }
  },
  computed: {
    header: function header() {
      return this.x.name + ' for ' + this.getPosition(this.x.position_id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/result.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/result.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      results: [{
        "position_id": 6,
        "nominee_id": 1,
        "votes": 2
      }, {
        "position_id": 8,
        "nominee_id": 6,
        "votes": 2
      }, {
        "position_id": 7,
        "nominee_id": 5,
        "votes": 2
      }, {
        "position_id": 7,
        "nominee_id": 4,
        "votes": 1
      }, {
        "position_id": 6,
        "nominee_id": 2,
        "votes": 1
      }, {
        "position_id": 8,
        "nominee_id": 7,
        "votes": 1
      }]
    };
  },
  created: function created() {
    this.refreshResults();
    this.$nextTick(function () {
      this.initChart();
    });
  },
  watch: {
    position_id: function position_id() {
      this.initChart();
    }
  },
  methods: {
    refreshResults: function refreshResults() {
      var vm = this;
      this.util.notify('Refreshing results', 'loading');
      axios.get(config.API + 'election/result').then(function (response) {
        $.notifyClose();
        console.log(response);
        vm.data.results = response.data;
        vm.data.last_update = new Date();
        vm.initChart();
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error);
      });
    },
    initChart: function initChart() {
      $.plot($('#chart'), this.datas, {
        series: {
          pie: {
            show: true,
            innerRadius: 0.5
          }
        }
      });
    },
    getPosition: function getPosition(id) {
      var positions = this.data.positions;

      for (var i in positions) {
        if (id == positions[i]['id']) return positions[i]['name'];
      }

      return '';
    },
    getNominee: function getNominee(id) {
      var nominees = this.data.nominees;

      for (var i in nominees) {
        if (id == nominees[i]['id']) return nominees[i]['name'];
      }

      return '';
    },
    getVotes: function getVotes(id) {
      var results = this.data.results;

      for (var i in results) {
        if (results[i]['nominee_id'] == id) return results[i]['votes'];
      }

      return 0;
    }
  },
  computed: {
    last_update: function last_update() {
      var x = this.data.last_update;
      return x.toDateString() + ' ' + x.toLocaleTimeString();
    },
    position_id: function position_id() {
      return this.$route.query.position_id ? this.$route.query.position_id : this.data.positions[0]['id'];
    },
    datas: function datas() {
      //var results = 
      var data = [];
      var nominees = this.data.nominees;

      for (var i in nominees) {
        if (nominees[i]['position_id'] == this.position_id) {
          var row = [];
          row['label'] = nominees[i]['name'];
          row['data'] = [[1, this.getVotes(nominees[i]['id'])]];
          data.push(row);
        }
      }
      /*let positions = this.data.positions;
      for (var i in positions) {
      	if (positions[i]['id'] == this.position_id) {
      		var row = [];
      		row['label'] = this.getNominee()
      	}
      }
      for (var i in results) {
      	if (results[i]['position_id'] != this.position_id) continue;
      	var row = [];
      	row['label'] = this.getNominee(results[i]['nominee_id']);
      	row['data'] = [[1, results[i]['votes']]];
      	data.push(row);
      }*/


      return data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    if (this.data.result.length > 0 || this.data.election.status != 2) this.$router.push({
      name: 'Voter Home'
    });

    for (var i in this.data.positions) {
      this.selected.push({
        position_id: this.data.positions[i]['id'],
        nominee_id: null
      });
    }
  },
  data: function data() {
    return {
      selected: [],
      name: {}
    };
  },
  methods: {
    submit: function submit() {
      this.util.hideModal('#vote-modal');
      if (this.hasNullVote()) return;
      var vm = this;
      this.util.notify('Submitting your vote, please wait...', 'loading');
      var data = {};
      data['vote'] = this.selected;
      axios.post(config.API + 'election/vote', data).then(function (response) {
        $.notifyClose();

        if (vm.util.showResult(response, 'success')) {
          vm.data.result = response.data.result;
          vm.$router.push({
            name: 'Voter Home'
          });
        }
      })["catch"](function (error) {
        $.notifyClose();
        vm.util.showResult(error, 'error');
      });
    },
    hasNullVote: function hasNullVote() {
      var selected = this.selected;

      for (var i in selected) {
        if (selected[i]['nominee_id'] == null) {
          this.util.notify('You must vote on all position', 'error');
          return true;
        }
      }

      return false;
    },
    reset: function reset() {
      var selected = this.selected;

      for (var i in selected) {
        $('#' + selected[i]['nominee_id']).selected(false);
        selected[i]['nominee_id'] = null;
      }
    },
    vote: function vote(position_id, nominee_id) {
      $('#' + nominee_id).selected();

      for (var i in this.selected) {
        if (this.selected[i]['position_id'] == position_id) {
          this.selected[i]['nominee_id'] = nominee_id;
        }
      }
    },
    getName: function getName(id) {
      var positions = this.data.positions;
      var selected = this.selected;

      for (var i in selected) {
        if (selected[i]['position_id'] == id) return this.getNominee(selected[i]['nominee_id']);
      }

      return '';
    },
    getNominee: function getNominee(id) {
      var nominees = this.data.nominees;

      for (var i in nominees) {
        if (nominees[i]['id'] == id) return nominees[i]['name'];
      }
    },
    getPartylist: function getPartylist(id) {
      var partylists = this.data.partylists;

      for (var i in partylists) {
        if (partylists[i]['id'] == id) return partylists[i]['name'];
      }

      return 'No Partylist';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: true
    };
  },
  created: function created() {
    this.refreshInfo();
  },
  methods: {
    logout: function logout() {
      localStorage.clear();
      this.$router.push({
        name: 'Voter Login'
      });
    },
    hasVoted: function hasVoted() {
      return this.data.result.length > 0;
    },
    refreshInfo: function refreshInfo() {
      var vm = this;
      this.util.setAuthorization();
      axios.get(config.API + 'election/information').then(function (response) {
        console.log(response);
        vm.loading = false;
        vm.data.election = response.data.election;
        vm.data.nominees = response.data.nominee;
        vm.data.partylists = response.data.partylist;
        vm.data.positions = response.data.position;
        vm.data.user = response.data.voter;
        vm.data.result = response.data.result;
      })["catch"](function (error) {
        vm.loading = false;

        if (vm.util.showResult(error, 'error') == 401) {
          vm.$router.push({
            name: 'Voter Login'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    if (this.util.isLogin()) //return this.$router.push({name:'Admin Home'})
      this.util.setTitle('Voter Login');
  },
  methods: {
    login: function login() {
      var _this = this;

      if (this.loading) return;
      var vm = this;
      this.startLoading();
      axios.post(config.API + 'voter/login', $('#login_form').serialize()).then(function (response) {
        vm.stopLoading();

        if (_this.util.showResult(response, 'success')) {
          localStorage['Access Token'] = "Bearer ".concat(response.data.token);

          _this.util.setAuthorization();

          vm.$router.push({
            name: 'Voter Home'
          });
        }
      })["catch"](function (error) {
        vm.stopLoading();

        _this.util.showResult(error, 'error');
      });
    },
    startLoading: function startLoading() {
      this.util.notify('Logging in', 'loading');
      this.loading = true;
    },
    stopLoading: function stopLoading() {
      $.notifyClose();
      this.loading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id', 'aClass']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    fileId: {
      "default": 'fileId'
    },
    fileName: {
      "default": 'file_name'
    },
    imageId: {
      "default": 'imageId'
    },
    imageSrc: {
      "default": '#'
    }
  },
  methods: {
    /** 
     * Print the selected file into image
     * @param String fileID, String imageId
     * 
     */
    readFile: function readFile(fileId, imageId) {
      var inputFile = $('#' + fileId)[0];
      var inputImage = $('#' + imageId);

      if (inputFile.files && inputFile.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          inputImage.attr('src', e.target.result);
        };

        reader.readAsDataURL(inputFile.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./resources/assets/js/util.js");
/* harmony import */ var _routesIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routesIndex.js */ "./resources/assets/js/routesIndex.js");
__webpack_require__(/*! ./bootstrap.js */ "./resources/assets/js/bootstrap.js"); //window.VueRouter = require('vue-router').default;
//import VueRouter from 'vue-router';




Vue.use(VueRouter);
Vue.mixin(_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: _routesIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var app = new Vue({
  router: router
}).$mount('#app');

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// window.$ = window.jQuery = require('jquery'); //Library for dom Manipulation
//require('bootstrap-sass'); //Bootstrap for design
// Axios - Ajax Library
//window.axios = require('axios'); 
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // window.Vue = require('vue'); // JS Framework
// require('bootstrap-notify'); //Notify
// require('jquery-form'); //Alternative to Axios

__webpack_require__(/*! ./customComponents.js */ "./resources/assets/js/customComponents.js"); // My components
//Pie Chart for Vote Result
// require('jquery-flot');
// require('../../../node_modules/jquery-flot/jquery.flot.pie.js');
//Date and Time Management
// window.moment = require('moment');

/***/ }),

/***/ "./resources/assets/js/customComponents.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/customComponents.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

//Global Components
Vue.component('modal', __webpack_require__(/*! ./components/mycomponents/modal/modal.vue */ "./resources/assets/js/components/mycomponents/modal/modal.vue"));
Vue.component('modal-header', __webpack_require__(/*! ./components/mycomponents/modal/header.vue */ "./resources/assets/js/components/mycomponents/modal/header.vue"));
Vue.component('modal-body', __webpack_require__(/*! ./components/mycomponents/modal/body.vue */ "./resources/assets/js/components/mycomponents/modal/body.vue"));
Vue.component('modal-footer', __webpack_require__(/*! ./components/mycomponents/modal/footer.vue */ "./resources/assets/js/components/mycomponents/modal/footer.vue"));
Vue.component('uploader', __webpack_require__(/*! ./components/mycomponents/uploader.vue */ "./resources/assets/js/components/mycomponents/uploader.vue"));

/***/ }),

/***/ "./resources/assets/js/routesIndex.js":
/*!********************************************!*\
  !*** ./resources/assets/js/routesIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_demo_voter_login_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/demo/voter/login.vue */ "./resources/assets/js/components/demo/voter/login.vue");
/* harmony import */ var _components_demo_voter_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/demo/voter/index.vue */ "./resources/assets/js/components/demo/voter/index.vue");
/* harmony import */ var _components_demo_voter_home_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/demo/voter/home/index.vue */ "./resources/assets/js/components/demo/voter/home/index.vue");
/* harmony import */ var _components_demo_voter_home_vote_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/demo/voter/home/vote.vue */ "./resources/assets/js/components/demo/voter/home/vote.vue");
/* harmony import */ var _components_demo_voter_home_result_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo/voter/home/result.vue */ "./resources/assets/js/components/demo/voter/home/result.vue");
/* harmony import */ var _components_demo_admin_login_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/demo/admin/login.vue */ "./resources/assets/js/components/demo/admin/login.vue");
/* harmony import */ var _components_demo_admin_index_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/demo/admin/index.vue */ "./resources/assets/js/components/demo/admin/index.vue");
/* harmony import */ var _components_demo_admin_home_final_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/demo/admin/home/final.vue */ "./resources/assets/js/components/demo/admin/home/final.vue");
/* harmony import */ var _components_demo_admin_home_home_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/demo/admin/home/home.vue */ "./resources/assets/js/components/demo/admin/home/home.vue");
/* harmony import */ var _components_demo_admin_home_index_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/demo/admin/home/index.vue */ "./resources/assets/js/components/demo/admin/home/index.vue");
/* harmony import */ var _components_demo_admin_home_result_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/demo/admin/home/result.vue */ "./resources/assets/js/components/demo/admin/home/result.vue");
/* harmony import */ var _components_demo_admin_position_position_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/demo/admin/position/position.vue */ "./resources/assets/js/components/demo/admin/position/position.vue");
/* harmony import */ var _components_demo_admin_position_index_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/demo/admin/position/index.vue */ "./resources/assets/js/components/demo/admin/position/index.vue");
/* harmony import */ var _components_demo_admin_position_add_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/demo/admin/position/add.vue */ "./resources/assets/js/components/demo/admin/position/add.vue");
/* harmony import */ var _components_demo_admin_position_edit_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/demo/admin/position/edit.vue */ "./resources/assets/js/components/demo/admin/position/edit.vue");
/* harmony import */ var _components_demo_admin_partylist_partylist_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/demo/admin/partylist/partylist.vue */ "./resources/assets/js/components/demo/admin/partylist/partylist.vue");
/* harmony import */ var _components_demo_admin_partylist_index_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/demo/admin/partylist/index.vue */ "./resources/assets/js/components/demo/admin/partylist/index.vue");
/* harmony import */ var _components_demo_admin_partylist_add_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/demo/admin/partylist/add.vue */ "./resources/assets/js/components/demo/admin/partylist/add.vue");
/* harmony import */ var _components_demo_admin_partylist_edit_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/demo/admin/partylist/edit.vue */ "./resources/assets/js/components/demo/admin/partylist/edit.vue");
/* harmony import */ var _components_demo_admin_voter_voter_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/demo/admin/voter/voter.vue */ "./resources/assets/js/components/demo/admin/voter/voter.vue");
/* harmony import */ var _components_demo_admin_voter_index_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/demo/admin/voter/index.vue */ "./resources/assets/js/components/demo/admin/voter/index.vue");
/* harmony import */ var _components_demo_admin_voter_add_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/demo/admin/voter/add.vue */ "./resources/assets/js/components/demo/admin/voter/add.vue");
/* harmony import */ var _components_demo_admin_voter_edit_vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/demo/admin/voter/edit.vue */ "./resources/assets/js/components/demo/admin/voter/edit.vue");
/* harmony import */ var _components_demo_admin_nominee_nominee_vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/demo/admin/nominee/nominee.vue */ "./resources/assets/js/components/demo/admin/nominee/nominee.vue");
/* harmony import */ var _components_demo_admin_nominee_index_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/demo/admin/nominee/index.vue */ "./resources/assets/js/components/demo/admin/nominee/index.vue");
/* harmony import */ var _components_demo_admin_nominee_add_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/demo/admin/nominee/add.vue */ "./resources/assets/js/components/demo/admin/nominee/add.vue");
/* harmony import */ var _components_demo_admin_nominee_edit_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/demo/admin/nominee/edit.vue */ "./resources/assets/js/components/demo/admin/nominee/edit.vue");
/* harmony import */ var _components_demo_admin_admin_admin_vue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/demo/admin/admin/admin.vue */ "./resources/assets/js/components/demo/admin/admin/admin.vue");
/* harmony import */ var _components_demo_admin_admin_index_vue__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/demo/admin/admin/index.vue */ "./resources/assets/js/components/demo/admin/admin/index.vue");
/* harmony import */ var _components_demo_admin_admin_edit_vue__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/demo/admin/admin/edit.vue */ "./resources/assets/js/components/demo/admin/admin/edit.vue");
/* harmony import */ var _components_demo_admin_admin_password_vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/demo/admin/admin/password.vue */ "./resources/assets/js/components/demo/admin/admin/password.vue");
/* harmony import */ var _components_demo_admin_admin_add_vue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/demo/admin/admin/add.vue */ "./resources/assets/js/components/demo/admin/admin/add.vue");
































var default_component = {
  template: '<div>Not found: {{ $route.path }}</div>'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '/',
  component: _components_demo_voter_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  children: [{
    path: '',
    component: _components_demo_voter_home_index_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    name: 'Voter Home'
  }, {
    path: 'vote',
    component: _components_demo_voter_home_vote_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    name: 'Vote'
  }, {
    path: 'result',
    component: _components_demo_voter_home_result_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    name: 'Result'
  }]
}, {
  path: '/login',
  component: _components_demo_voter_login_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Voter Login'
}, {
  path: '/admin/login',
  component: _components_demo_admin_login_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
  name: 'Admin Login'
}, {
  path: '/admin',
  component: _components_demo_admin_index_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
  children: [{
    path: 'result/:election_id',
    component: _components_demo_admin_home_final_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    name: 'Election Result'
  }, {
    path: '',
    component: _components_demo_admin_home_home_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    children: [{
      path: '',
      component: _components_demo_admin_home_index_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
      name: 'Admin Home'
    }, {
      path: 'result',
      component: _components_demo_admin_home_result_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
      name: 'Current Result'
    }]
  }, {
    path: 'position',
    component: _components_demo_admin_position_position_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    children: [{
      path: '',
      component: _components_demo_admin_position_index_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
      name: 'Manage Position'
    }, {
      path: 'add',
      component: _components_demo_admin_position_add_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
      name: 'Add Position'
    }, {
      path: 'edit/:id',
      component: _components_demo_admin_position_edit_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
      name: 'Edit Position'
    }]
  }, {
    path: 'partylist',
    component: _components_demo_admin_partylist_partylist_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    children: [{
      path: '',
      component: _components_demo_admin_partylist_index_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
      name: 'Manage Partylist'
    }, {
      path: 'add',
      component: _components_demo_admin_partylist_add_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
      name: 'Add Partylist'
    }, {
      path: 'edit/:id',
      component: _components_demo_admin_partylist_edit_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
      name: 'Edit Partylist'
    }]
  }, {
    path: 'voter',
    component: _components_demo_admin_voter_voter_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    children: [{
      path: '',
      component: _components_demo_admin_voter_index_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
      name: 'Manage Voter'
    }, {
      path: 'add',
      component: _components_demo_admin_voter_add_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
      name: 'Add Voter'
    }, {
      path: 'edit/:id',
      component: _components_demo_admin_voter_edit_vue__WEBPACK_IMPORTED_MODULE_22__["default"],
      name: 'Edit Voter'
    }]
  }, {
    path: 'nominee',
    component: _components_demo_admin_nominee_nominee_vue__WEBPACK_IMPORTED_MODULE_23__["default"],
    children: [{
      path: '',
      component: _components_demo_admin_nominee_index_vue__WEBPACK_IMPORTED_MODULE_24__["default"],
      name: 'Manage Nominee'
    }, {
      path: 'add',
      component: _components_demo_admin_nominee_add_vue__WEBPACK_IMPORTED_MODULE_25__["default"],
      name: 'Add Nominee'
    }, {
      path: 'edit/:id',
      component: _components_demo_admin_nominee_edit_vue__WEBPACK_IMPORTED_MODULE_26__["default"],
      name: 'Edit Nominee'
    }]
  }, {
    path: '/account',
    component: _components_demo_admin_admin_admin_vue__WEBPACK_IMPORTED_MODULE_27__["default"],
    children: [{
      path: '',
      component: _components_demo_admin_admin_index_vue__WEBPACK_IMPORTED_MODULE_28__["default"],
      name: 'Manage Account'
    }, {
      path: 'update',
      component: _components_demo_admin_admin_edit_vue__WEBPACK_IMPORTED_MODULE_29__["default"],
      name: 'Update Account'
    }, {
      path: 'password',
      component: _components_demo_admin_admin_password_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
      name: 'Update Password'
    }, {
      path: 'add',
      component: _components_demo_admin_admin_add_vue__WEBPACK_IMPORTED_MODULE_31__["default"],
      name: 'Add Account'
    }]
  }]
}]);

/***/ }),

/***/ "./resources/assets/js/util.js":
/*!*************************************!*\
  !*** ./resources/assets/js/util.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var methods = {
  /**
   * Hide Modal
   * @param 	{String} 	Modal ID
   *
   */
  hideModal: function hideModal(id) {
    $(id).modal('hide');
  },

  /**
   * Check if Login
   *
   * @return 	{Boolean}	isLogin
   */
  isLogin: function isLogin() {
    return localStorage['Access Token'] ? true : false;
  },

  /**
   * Log a messages
   * @param 	{String}	Message
   *
   */
  log: function log(message) {
    if (config.debug) console.log(message);
  },

  /**
   * Show an alert message
   * @param {String}		message to be Shown
   * @param {String}		type of message (info|error|loading|success)
   * @param {Boolean}		if message will be closed imediately (true|false)
   * @return {Notify}		
   */
  notify: function notify(message) {
    var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
    var progress = arguments.length > 2 ? arguments[2] : undefined;
    var delay = 5000;
    var type = 'info';
    var icon = 'fa fa-info';

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
        message = "<label>".concat(message, "</label>\n\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-green\" role=\"progressbar\" aria-valuenow=\"").concat(progress, "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ").concat(progress, "%\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>");
        icon = 'fa fa-refresh fa-spin';
        break;
    }

    return $.notify({
      message: message,
      icon: icon
    }, {
      type: type,
      delay: delay,
      placement: {
        from: 'top',
        align: 'center'
      }
    });
  },

  /** 
   * Set Authorization for all outgoing request
   * 
   */
  setAuthorization: function setAuthorization() {
    axios.defaults.headers.common['Authorization'] = localStorage['Access Token'];
    $.ajaxSetup({
      headers: {
        'Authorization': localStorage['Access Token']
      }
    });
  },

  /**
   * Set the title of the webpage
   * @param 	{String}	Title
   *
   */
  setTitle: function setTitle(title) {
    $('title').text(title);
  },

  /**
   * Get the error Message
   * @param 	{String}	Data
   * @param 	{Int}		Response Status
   * @return 	{String}	Error Message
   */
  getErrorMessage: function getErrorMessage(data, status) {
    var message = '';

    switch (status) {
      case 200:
        message = data.message;
        break;

      case 422:
        data = typeof data == 'string' ? JSON.parse(data) : data;

        for (var i in data) {
          data[i].map(function (y) {
            message += y + '<br/>';
          });
        }

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
  showModal: function showModal(id) {
    $(id).modal('show');
  },

  /**
   * Show result from an http request
   * @param 	{Response}	response
   * @param 	{Type}		responseType (error|success)
   * @param 	{library}	Library used (ajax|axios) 		Default : axios
   */
  showResult: function showResult(response, type) {
    var library = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'axios';
    this.log(response);

    var isSuccess = function isSuccess(data) {
      return data.status == 'success';
    };

    if (library == 'axios') {
      if (type == 'success') {
        if (isSuccess(response.data)) {
          this.notify(response.data.message, 'success');
          return true;
        } else {
          this.notify(response.data.message, 'error');
        }
      } else {
        var status = response.response ? response.response.status : 500;
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
        var status = response.status;
        var message = this.getErrorMessage(response.responseText, status);
        this.notify(message, 'error');
        return status;
      }
    }
  }
};
var _data = {
  baseURL: config.baseURL,
  API: config.API,
  storageURL: config.storageURL,
  elections: [],
  election: {},
  user: {},
  positions: [],
  position: {},
  partylists: [],
  partylist: {},
  voters: {},
  voter: {},
  nominees: [],
  nominee: {},
  admins: [],
  information: {},
  result: [],
  results: [],
  last_update: new Date()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      util: methods,
      data: _data
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody{\r\n\tpadding: 70px 5px;\n}\t\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\r\n\tpadding: 50px 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody{\r\n\tpadding: 70px 5px;\n}\t\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\r\n\tpadding: 50px 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.primary{\r\n\tbackground-color: #337ab7;\r\n\tcolor: #fff;\n}\n.primary .modal-body{\r\n\tbackground-color: #fff;\r\n\tborder-left: solid 1px #337ab7;\r\n\tborder-right: solid 1px #337ab7;\r\n\tcolor: #000;\n}\n.primary .modal-footer{\r\n\tbackground-color: #fff;\r\n\tborder-radius: 5px;\r\n\tborder-left: solid 1px #337ab7;\r\n\tborder-right: solid 1px #337ab7;\r\n\tborder-bottom: solid 1px #337ab7;\r\n\tcolor: #000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.imgContainer {\r\n\tposition: relative; \r\n\theight: 200px; \r\n\twidth: 200px;\n}\n.file {\r\n\tposition: absolute; \r\n\theight: 100%; \r\n\twidth: 100%; \r\n\topacity: 0;\n}\n.imgUpload {\r\n\tbackground-color: #ffffff;\r\n\tborder:2px black solid;\n}\n.imgText {\r\n\tposition: absolute; \r\n\tleft: 0; \r\n\ttop: 45%; \r\n\twidth: 100%; \r\n\ttext-align: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/*!****************************************!*\
  !*** ./resources/assets/sass/app.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./uploader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/add.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/add.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_4a4a3b0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=4a4a3b0c& */ "./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=template&id=4a4a3b0c&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_4a4a3b0c___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_vue_vue_type_template_id_4a4a3b0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/admin/add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/admin.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/admin.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_vue_vue_type_template_id_20dcf5fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.vue?vue&type=template&id=20dcf5fa& */ "./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=template&id=20dcf5fa&");
/* harmony import */ var _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_vue_vue_type_template_id_20dcf5fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _admin_vue_vue_type_template_id_20dcf5fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/admin/admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/edit.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/edit.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_aa7864a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=aa7864a2& */ "./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=template&id=aa7864a2&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_aa7864a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_aa7864a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/admin/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/index.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/index.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2124bc06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2124bc06& */ "./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=template&id=2124bc06&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2124bc06___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2124bc06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/admin/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/password.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/password.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _password_vue_vue_type_template_id_cfccc980___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.vue?vue&type=template&id=cfccc980& */ "./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=template&id=cfccc980&");
/* harmony import */ var _password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _password_vue_vue_type_template_id_cfccc980___WEBPACK_IMPORTED_MODULE_0__.render,
  _password_vue_vue_type_template_id_cfccc980___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/admin/password.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/final.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/final.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _final_vue_vue_type_template_id_22ef532b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final.vue?vue&type=template&id=22ef532b& */ "./resources/assets/js/components/demo/admin/home/final.vue?vue&type=template&id=22ef532b&");
/* harmony import */ var _final_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/home/final.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _final_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _final_vue_vue_type_template_id_22ef532b___WEBPACK_IMPORTED_MODULE_0__.render,
  _final_vue_vue_type_template_id_22ef532b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/home/final.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/home.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/home.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_28af438c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=28af438c& */ "./resources/assets/js/components/demo/admin/home/home.vue?vue&type=template&id=28af438c&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/home/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_28af438c___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_28af438c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/home/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/index.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_44bea6f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=44bea6f2& */ "./resources/assets/js/components/demo/admin/home/index.vue?vue&type=template&id=44bea6f2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_44bea6f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_44bea6f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/home/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/result.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/result.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _result_vue_vue_type_template_id_eb124490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=eb124490& */ "./resources/assets/js/components/demo/admin/home/result.vue?vue&type=template&id=eb124490&");
/* harmony import */ var _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/home/result.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _result_vue_vue_type_template_id_eb124490___WEBPACK_IMPORTED_MODULE_0__.render,
  _result_vue_vue_type_template_id_eb124490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/home/result.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/index.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_5bbb2a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5bbb2a06& */ "./resources/assets/js/components/demo/admin/index.vue?vue&type=template&id=5bbb2a06&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5bbb2a06___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_5bbb2a06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/login.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/login.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_c86be3d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=c86be3d8& */ "./resources/assets/js/components/demo/admin/login.vue?vue&type=template&id=c86be3d8&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_c86be3d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_c86be3d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/add.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/add.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_389a664e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=389a664e& */ "./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=template&id=389a664e&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_389a664e___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_vue_vue_type_template_id_389a664e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/nominee/add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/edit.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/edit.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_f30deaa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=f30deaa6& */ "./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=template&id=f30deaa6&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_f30deaa6___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_f30deaa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/nominee/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/index.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/index.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_eb3ff682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=eb3ff682& */ "./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=template&id=eb3ff682&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_eb3ff682___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_eb3ff682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/nominee/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/nominee.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/nominee.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nominee_vue_vue_type_template_id_70ec0c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nominee.vue?vue&type=template&id=70ec0c7e& */ "./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=template&id=70ec0c7e&");
/* harmony import */ var _nominee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nominee.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nominee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nominee_vue_vue_type_template_id_70ec0c7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _nominee_vue_vue_type_template_id_70ec0c7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/nominee/nominee.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/add.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/add.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_252159c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=252159c1& */ "./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=template&id=252159c1&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_252159c1___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_vue_vue_type_template_id_252159c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/partylist/add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/edit.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/edit.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_2ad0859a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=2ad0859a& */ "./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=template&id=2ad0859a&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_2ad0859a___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_2ad0859a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/partylist/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/index.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/index.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_70f7e772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=70f7e772& */ "./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=template&id=70f7e772&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_70f7e772___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_70f7e772___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/partylist/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/partylist.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/partylist.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _partylist_vue_vue_type_template_id_7beeba24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partylist.vue?vue&type=template&id=7beeba24& */ "./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=template&id=7beeba24&");
/* harmony import */ var _partylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partylist.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _partylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _partylist_vue_vue_type_template_id_7beeba24___WEBPACK_IMPORTED_MODULE_0__.render,
  _partylist_vue_vue_type_template_id_7beeba24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/partylist/partylist.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/add.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/add.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_e6b3e840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=e6b3e840& */ "./resources/assets/js/components/demo/admin/position/add.vue?vue&type=template&id=e6b3e840&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/position/add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_e6b3e840___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_vue_vue_type_template_id_e6b3e840___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/position/add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/edit.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/edit.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_983bd14a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=983bd14a& */ "./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=template&id=983bd14a&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_983bd14a___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_983bd14a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/position/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/index.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/index.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_0a188dd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0a188dd1& */ "./resources/assets/js/components/demo/admin/position/index.vue?vue&type=template&id=0a188dd1&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/position/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0a188dd1___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_0a188dd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/position/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/position.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/position.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _position_vue_vue_type_template_id_5ec3d30c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.vue?vue&type=template&id=5ec3d30c& */ "./resources/assets/js/components/demo/admin/position/position.vue?vue&type=template&id=5ec3d30c&");
/* harmony import */ var _position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/position/position.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _position_vue_vue_type_template_id_5ec3d30c___WEBPACK_IMPORTED_MODULE_0__.render,
  _position_vue_vue_type_template_id_5ec3d30c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/position/position.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/add.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/add.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_7c4e8cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=7c4e8cf6& */ "./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=template&id=7c4e8cf6&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_7c4e8cf6___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_vue_vue_type_template_id_7c4e8cf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/voter/add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/edit.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/edit.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_25051e56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=25051e56& */ "./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=template&id=25051e56&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_25051e56___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_25051e56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/voter/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/index.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/index.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_85533394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=85533394& */ "./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=template&id=85533394&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_85533394___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_85533394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/voter/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/voter.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/voter.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _voter_vue_vue_type_template_id_0a7f45a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voter.vue?vue&type=template&id=0a7f45a8& */ "./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=template&id=0a7f45a8&");
/* harmony import */ var _voter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voter.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _voter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _voter_vue_vue_type_template_id_0a7f45a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _voter_vue_vue_type_template_id_0a7f45a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/admin/voter/voter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/index.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_57d6a3ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57d6a3ee& */ "./resources/assets/js/components/demo/voter/home/index.vue?vue&type=template&id=57d6a3ee&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/voter/home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57d6a3ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_57d6a3ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/voter/home/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/result.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/result.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _result_vue_vue_type_template_id_56ffd331___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=56ffd331& */ "./resources/assets/js/components/demo/voter/home/result.vue?vue&type=template&id=56ffd331&");
/* harmony import */ var _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/voter/home/result.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _result_vue_vue_type_template_id_56ffd331___WEBPACK_IMPORTED_MODULE_0__.render,
  _result_vue_vue_type_template_id_56ffd331___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/voter/home/result.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/vote.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/vote.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vote_vue_vue_type_template_id_0cf4be7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vote.vue?vue&type=template&id=0cf4be7e& */ "./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=template&id=0cf4be7e&");
/* harmony import */ var _vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vote.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vote_vue_vue_type_template_id_0cf4be7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _vote_vue_vue_type_template_id_0cf4be7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/voter/home/vote.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/index.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_bfe9a194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=bfe9a194& */ "./resources/assets/js/components/demo/voter/index.vue?vue&type=template&id=bfe9a194&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/voter/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_bfe9a194___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_bfe9a194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/voter/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/login.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/login.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_69b2d24d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=69b2d24d& */ "./resources/assets/js/components/demo/voter/login.vue?vue&type=template&id=69b2d24d&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/demo/voter/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_69b2d24d___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_69b2d24d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/demo/voter/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/body.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/body.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _body_vue_vue_type_template_id_17b4402c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.vue?vue&type=template&id=17b4402c& */ "./resources/assets/js/components/mycomponents/modal/body.vue?vue&type=template&id=17b4402c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _body_vue_vue_type_template_id_17b4402c___WEBPACK_IMPORTED_MODULE_0__.render,
  _body_vue_vue_type_template_id_17b4402c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/mycomponents/modal/body.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/footer.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/footer.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_1f034b63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=1f034b63& */ "./resources/assets/js/components/mycomponents/modal/footer.vue?vue&type=template&id=1f034b63&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _footer_vue_vue_type_template_id_1f034b63___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_1f034b63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/mycomponents/modal/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/header.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/header.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_4035af55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=4035af55& */ "./resources/assets/js/components/mycomponents/modal/header.vue?vue&type=template&id=4035af55&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _header_vue_vue_type_template_id_4035af55___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_4035af55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/mycomponents/modal/header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/modal.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/modal.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_vue_vue_type_template_id_6c48dfd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.vue?vue&type=template&id=6c48dfd6& */ "./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=template&id=6c48dfd6&");
/* harmony import */ var _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=script&lang=js&");
/* harmony import */ var _modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_vue_vue_type_template_id_6c48dfd6___WEBPACK_IMPORTED_MODULE_0__.render,
  _modal_vue_vue_type_template_id_6c48dfd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/mycomponents/modal/modal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/mycomponents/uploader.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/uploader.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _uploader_vue_vue_type_template_id_c6311dd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader.vue?vue&type=template&id=c6311dd8& */ "./resources/assets/js/components/mycomponents/uploader.vue?vue&type=template&id=c6311dd8&");
/* harmony import */ var _uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploader.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/mycomponents/uploader.vue?vue&type=script&lang=js&");
/* harmony import */ var _uploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploader.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uploader_vue_vue_type_template_id_c6311dd8___WEBPACK_IMPORTED_MODULE_0__.render,
  _uploader_vue_vue_type_template_id_c6311dd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/mycomponents/uploader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/final.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/final.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./final.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/final.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/result.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/result.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/result.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/login.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nominee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nominee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nominee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./partylist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/position.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/position.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./position.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/position.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./voter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/result.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/result.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/result.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/voter/login.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/mycomponents/uploader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/uploader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./uploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./uploader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=template&id=4a4a3b0c&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=template&id=4a4a3b0c& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_4a4a3b0c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_4a4a3b0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_4a4a3b0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=template&id=4a4a3b0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=template&id=4a4a3b0c&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=template&id=20dcf5fa&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=template&id=20dcf5fa& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_20dcf5fa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_20dcf5fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_vue_vue_type_template_id_20dcf5fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin.vue?vue&type=template&id=20dcf5fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=template&id=20dcf5fa&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=template&id=aa7864a2&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=template&id=aa7864a2& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_aa7864a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_aa7864a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_aa7864a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=aa7864a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=template&id=aa7864a2&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=template&id=2124bc06&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=template&id=2124bc06& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2124bc06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2124bc06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2124bc06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2124bc06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=template&id=2124bc06&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=template&id=cfccc980&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=template&id=cfccc980& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_cfccc980___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_cfccc980___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_template_id_cfccc980___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./password.vue?vue&type=template&id=cfccc980& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=template&id=cfccc980&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/final.vue?vue&type=template&id=22ef532b&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/final.vue?vue&type=template&id=22ef532b& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_template_id_22ef532b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_template_id_22ef532b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_template_id_22ef532b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./final.vue?vue&type=template&id=22ef532b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/final.vue?vue&type=template&id=22ef532b&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/home.vue?vue&type=template&id=28af438c&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/home.vue?vue&type=template&id=28af438c& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_28af438c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_28af438c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_28af438c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=28af438c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/home.vue?vue&type=template&id=28af438c&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/index.vue?vue&type=template&id=44bea6f2&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/index.vue?vue&type=template&id=44bea6f2& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_44bea6f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_44bea6f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_44bea6f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=44bea6f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/index.vue?vue&type=template&id=44bea6f2&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/home/result.vue?vue&type=template&id=eb124490&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/home/result.vue?vue&type=template&id=eb124490& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_eb124490___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_eb124490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_eb124490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./result.vue?vue&type=template&id=eb124490& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/result.vue?vue&type=template&id=eb124490&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/index.vue?vue&type=template&id=5bbb2a06&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/index.vue?vue&type=template&id=5bbb2a06& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5bbb2a06___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5bbb2a06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5bbb2a06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=5bbb2a06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=template&id=5bbb2a06&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/login.vue?vue&type=template&id=c86be3d8&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/login.vue?vue&type=template&id=c86be3d8& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_c86be3d8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_c86be3d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_c86be3d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=c86be3d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=template&id=c86be3d8&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=template&id=389a664e&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=template&id=389a664e& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_389a664e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_389a664e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_389a664e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=template&id=389a664e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=template&id=389a664e&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=template&id=f30deaa6&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=template&id=f30deaa6& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_f30deaa6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_f30deaa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_f30deaa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=f30deaa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=template&id=f30deaa6&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=template&id=eb3ff682&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=template&id=eb3ff682& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eb3ff682___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eb3ff682___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eb3ff682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=eb3ff682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=template&id=eb3ff682&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=template&id=70ec0c7e&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=template&id=70ec0c7e& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nominee_vue_vue_type_template_id_70ec0c7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nominee_vue_vue_type_template_id_70ec0c7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nominee_vue_vue_type_template_id_70ec0c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./nominee.vue?vue&type=template&id=70ec0c7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=template&id=70ec0c7e&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=template&id=252159c1&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=template&id=252159c1& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_252159c1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_252159c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_252159c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=template&id=252159c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=template&id=252159c1&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=template&id=2ad0859a&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=template&id=2ad0859a& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2ad0859a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2ad0859a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2ad0859a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=2ad0859a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=template&id=2ad0859a&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=template&id=70f7e772&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=template&id=70f7e772& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70f7e772___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70f7e772___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_70f7e772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=70f7e772& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=template&id=70f7e772&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=template&id=7beeba24&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=template&id=7beeba24& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_partylist_vue_vue_type_template_id_7beeba24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_partylist_vue_vue_type_template_id_7beeba24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_partylist_vue_vue_type_template_id_7beeba24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./partylist.vue?vue&type=template&id=7beeba24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=template&id=7beeba24&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/add.vue?vue&type=template&id=e6b3e840&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/add.vue?vue&type=template&id=e6b3e840& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_e6b3e840___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_e6b3e840___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_e6b3e840___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=template&id=e6b3e840& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/add.vue?vue&type=template&id=e6b3e840&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=template&id=983bd14a&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=template&id=983bd14a& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_983bd14a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_983bd14a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_983bd14a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=983bd14a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=template&id=983bd14a&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/index.vue?vue&type=template&id=0a188dd1&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/index.vue?vue&type=template&id=0a188dd1& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a188dd1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a188dd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a188dd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=0a188dd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/index.vue?vue&type=template&id=0a188dd1&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/position/position.vue?vue&type=template&id=5ec3d30c&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/position/position.vue?vue&type=template&id=5ec3d30c& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_template_id_5ec3d30c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_template_id_5ec3d30c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_template_id_5ec3d30c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./position.vue?vue&type=template&id=5ec3d30c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/position.vue?vue&type=template&id=5ec3d30c&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=template&id=7c4e8cf6&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=template&id=7c4e8cf6& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_7c4e8cf6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_7c4e8cf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_7c4e8cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add.vue?vue&type=template&id=7c4e8cf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=template&id=7c4e8cf6&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=template&id=25051e56&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=template&id=25051e56& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_25051e56___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_25051e56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_25051e56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=25051e56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=template&id=25051e56&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=template&id=85533394&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=template&id=85533394& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_85533394___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_85533394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_85533394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=85533394& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=template&id=85533394&");


/***/ }),

/***/ "./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=template&id=0a7f45a8&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=template&id=0a7f45a8& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_voter_vue_vue_type_template_id_0a7f45a8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_voter_vue_vue_type_template_id_0a7f45a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_voter_vue_vue_type_template_id_0a7f45a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./voter.vue?vue&type=template&id=0a7f45a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=template&id=0a7f45a8&");


/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/index.vue?vue&type=template&id=57d6a3ee&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/index.vue?vue&type=template&id=57d6a3ee& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57d6a3ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57d6a3ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57d6a3ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=57d6a3ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/index.vue?vue&type=template&id=57d6a3ee&");


/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/result.vue?vue&type=template&id=56ffd331&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/result.vue?vue&type=template&id=56ffd331& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_56ffd331___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_56ffd331___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_56ffd331___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./result.vue?vue&type=template&id=56ffd331& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/result.vue?vue&type=template&id=56ffd331&");


/***/ }),

/***/ "./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=template&id=0cf4be7e&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=template&id=0cf4be7e& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_template_id_0cf4be7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_template_id_0cf4be7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vote_vue_vue_type_template_id_0cf4be7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vote.vue?vue&type=template&id=0cf4be7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=template&id=0cf4be7e&");


/***/ }),

/***/ "./resources/assets/js/components/demo/voter/index.vue?vue&type=template&id=bfe9a194&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/index.vue?vue&type=template&id=bfe9a194& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bfe9a194___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bfe9a194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_bfe9a194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=bfe9a194& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=template&id=bfe9a194&");


/***/ }),

/***/ "./resources/assets/js/components/demo/voter/login.vue?vue&type=template&id=69b2d24d&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/components/demo/voter/login.vue?vue&type=template&id=69b2d24d& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_69b2d24d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_69b2d24d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_69b2d24d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=69b2d24d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=template&id=69b2d24d&");


/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/body.vue?vue&type=template&id=17b4402c&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/body.vue?vue&type=template&id=17b4402c& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_template_id_17b4402c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_template_id_17b4402c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_body_vue_vue_type_template_id_17b4402c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./body.vue?vue&type=template&id=17b4402c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/body.vue?vue&type=template&id=17b4402c&");


/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/footer.vue?vue&type=template&id=1f034b63&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/footer.vue?vue&type=template&id=1f034b63& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1f034b63___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1f034b63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1f034b63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=1f034b63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/footer.vue?vue&type=template&id=1f034b63&");


/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/header.vue?vue&type=template&id=4035af55&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/header.vue?vue&type=template&id=4035af55& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_4035af55___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_4035af55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_4035af55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=4035af55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/header.vue?vue&type=template&id=4035af55&");


/***/ }),

/***/ "./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=template&id=6c48dfd6&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=template&id=6c48dfd6& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_6c48dfd6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_6c48dfd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_template_id_6c48dfd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal.vue?vue&type=template&id=6c48dfd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=template&id=6c48dfd6&");


/***/ }),

/***/ "./resources/assets/js/components/mycomponents/uploader.vue?vue&type=template&id=c6311dd8&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/mycomponents/uploader.vue?vue&type=template&id=c6311dd8& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_template_id_c6311dd8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_template_id_c6311dd8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_template_id_c6311dd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./uploader.vue?vue&type=template&id=c6311dd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=template&id=c6311dd8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=template&id=4a4a3b0c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/add.vue?vue&type=template&id=4a4a3b0c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "form",
        {
          attrs: { id: "add_form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.add()
            },
          },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("input", {
                staticClass: "btn btn-info",
                attrs: { type: "submit", value: "Submit" },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Manage Account" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "name", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "email", name: "email", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", name: "password", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "confirm_password" } }, [
        _vm._v("Confirm Password"),
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", name: "confirm_password", required: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=template&id=20dcf5fa&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/admin.vue?vue&type=template&id=20dcf5fa& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container col-md-8 col-md-offset-2" },
    [_c("h4", [_vm._v("Manage Account")]), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=template&id=aa7864a2&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/edit.vue?vue&type=template&id=aa7864a2& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Update Account")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "edit_form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.edit()
            },
          },
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "name", required: "" },
              domProps: { value: _vm.data.user.name },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "email" } }, [_vm._v("E-mail")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "email", name: "email", required: "" },
              domProps: { value: _vm.data.user.email },
            }),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("input", {
                staticClass: "btn btn-info",
                attrs: { type: "submit", value: "Submit" },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Update Password" } },
                },
                [_vm._v("Change Password")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=template&id=2124bc06&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/index.vue?vue&type=template&id=2124bc06& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "panel panel-default" },
    [
      _c("div", { staticClass: "panel-body table-responsive" }, [
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success",
                attrs: { to: { name: "Add Account" } },
              },
              [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Add Account")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function ($event) {
                    return _vm.refreshAdmin()
                  },
                },
              },
              [_c("i", { staticClass: "fa fa-refresh" }), _vm._v(" Refresh")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("table", { staticClass: "table table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.data.admins, function (admin) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(admin.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(admin.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(admin.email))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      on: {
                        click: function ($event) {
                          _vm.id = admin.id
                          _vm.util.showModal("#delete-admin-modal")
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "fa fa-trash" }),
                      _vm._v(" Delete\r\n\t\t\t\t\t\t"),
                    ]
                  ),
                ]),
              ])
            }),
            0
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { id: "delete-admin-modal" } },
        [
          _c("modal-header", [_vm._v("Delete Admin")]),
          _vm._v(" "),
          _c("modal-body", [
            _c("h3", [_vm._v("Are you sure to delete this admin?")]),
          ]),
          _vm._v(" "),
          _c("modal-footer", [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function ($event) {
                    return _vm.deleteAdmin()
                  },
                },
              },
              [_vm._v("Delete")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function ($event) {
                    return _vm.util.hideModal("#delete-admin-modal")
                  },
                },
              },
              [_vm._v("Cancel")]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Delete")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=template&id=cfccc980&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/admin/password.vue?vue&type=template&id=cfccc980& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Update Password")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "edit_form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.edit()
            },
          },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("input", {
                staticClass: "btn btn-info",
                attrs: { type: "submit", value: "Submit" },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Update Account" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "old_password" } }, [_vm._v("Old Password")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", name: "old_password", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "password" } }, [_vm._v("New Password")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", name: "password", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "confirm_password" } }, [
        _vm._v("Confirm Password"),
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", name: "confirm_password", required: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/final.vue?vue&type=template&id=22ef532b&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/final.vue?vue&type=template&id=22ef532b& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        _vm._l(_vm.positions, function (position) {
          return _c("div", [
            _c("h5", [_vm._v(_vm._s(position.name))]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                { staticClass: "table table-striped table-condensed" },
                [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.results, function (result) {
                        return result.position_id == position.id
                          ? _c("tr", [
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.getNominee(result.nominee_id)[
                                      "student_id"
                                    ]
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.getNominee(result.nominee_id)["name"]
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.getPartylist(
                                      _vm.getNominee(result.nominee_id)[
                                        "partylist_id"
                                      ]
                                    )
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.getNominee(result.nominee_id)["course"]
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(result.votes))]),
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.no_votes, function (no_vote) {
                        return no_vote.position_id == position.id
                          ? _c("tr", [
                              _c("td", [_vm._v(_vm._s(no_vote.student_id))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(no_vote.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.getPartylist(no_vote.partylist_id))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(no_vote.course))]),
                              _vm._v(" "),
                              _c("td", [_vm._v("0")]),
                            ])
                          : _vm._e()
                      }),
                    ],
                    2
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("hr"),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Student ID")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Partylist")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Course")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Votes")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/home.vue?vue&type=template&id=28af438c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/home.vue?vue&type=template&id=28af438c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container col-md-8 col-md-offset-2" },
    [_c("h4", [_vm._v("Manage Election")]), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/index.vue?vue&type=template&id=44bea6f2&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/index.vue?vue&type=template&id=44bea6f2& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v(" Recent Elections")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _vm.data.election.status == 1
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: {
                    click: function ($event) {
                      return _vm.util.showModal("#start-election-modal")
                    },
                  },
                },
                [_vm._v("Start Election")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.election.status == 2
            ? _c(
                "router-link",
                {
                  staticClass: "btn btn-info",
                  attrs: { to: { name: "Current Result" } },
                },
                [_vm._v("\r\n\t\t\t\tView Results\r\n\t\t\t")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.election.status == 2
            ? _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function ($event) {
                      return _vm.util.showModal("#stop-election-modal")
                    },
                  },
                },
                [_vm._v("End Election")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.election.status == 2
            ? _c("label", [
                _vm._v("Election has Started " + _vm._s(_vm.start_date)),
              ])
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm._l(_vm.data.elections, function (election) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(election.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(election.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(election.start))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(election.end))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-info",
                          attrs: {
                            to: {
                              name: "Election Result",
                              params: { election_id: election.id },
                            },
                          },
                        },
                        [_vm._v("View Result")]
                      ),
                    ],
                    1
                  ),
                ])
              }),
              _vm._v(" "),
              _vm.data.elections.length < 1
                ? _c("tr", [
                    _c("td", { attrs: { colspan: "5" } }, [
                      _vm._v("No elections yet"),
                    ]),
                  ])
                : _vm._e(),
            ],
            2
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "start_form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.start.apply(null, arguments)
            },
          },
        },
        [
          _c(
            "modal",
            { attrs: { id: "start-election-modal" } },
            [
              _c("modal-header", [_vm._v("Start Election")]),
              _vm._v(" "),
              _c("modal-body", [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Election Name"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "(Optional)",
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "password" } }, [
                    _vm._v("Confirm Password"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "password", name: "password", required: "" },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("modal-footer", [
                _c("input", {
                  staticClass: "btn btn-info",
                  attrs: { type: "submit", value: "Start" },
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "btn btn-default",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    value: "Cancel",
                  },
                }),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "stop_form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.stop.apply(null, arguments)
            },
          },
        },
        [
          _c(
            "modal",
            { attrs: { id: "stop-election-modal" } },
            [
              _c("modal-header", [_vm._v("Stop Election")]),
              _vm._v(" "),
              _c("modal-body", [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Election Name"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "(Optional)",
                    },
                    domProps: { value: _vm.data.election.name },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "password" } }, [
                    _vm._v("Confirm Password"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "password", name: "password", required: "" },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("modal-footer", [
                _c("input", {
                  staticClass: "btn btn-danger",
                  attrs: { type: "submit", value: "Stop Election" },
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "btn btn-default",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    value: "Cancel",
                  },
                }),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Election Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Election Start")]),
        _vm._v(" "),
        _c("th", [_vm._v("Election End")]),
        _vm._v(" "),
        _c("th", [_vm._v("View")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/result.vue?vue&type=template&id=eb124490&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/home/result.vue?vue&type=template&id=eb124490& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-4" }, [
      _c("h4", [_vm._v("Positions")]),
      _c("hr"),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "list-group" },
        [
          _vm._l(_vm.data.positions, function (position) {
            return _c(
              "router-link",
              {
                key: position.id,
                staticClass: "list-group-item",
                class: { active: position.id == _vm.position_id },
                attrs: {
                  tag: "li",
                  to: { query: { position_id: position.id } },
                  exact: "",
                  replace: "",
                },
              },
              [_vm._v("\r\n\t\t\t\t" + _vm._s(position.name) + "\r\n\t\t\t")]
            )
          }),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "list-group-item" },
            [
              _c("center", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function ($event) {
                        return _vm.refreshNominees()
                      },
                    },
                  },
                  [
                    _vm._v("\r\n\t\t\t\t\t\tRefresh results "),
                    _c("i", { staticClass: "fa fa-refresh" }),
                  ]
                ),
              ]),
            ],
            1
          ),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-8" }, [
      _c("h4", [_vm._v("Results")]),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _vm._v(
            _vm._s(_vm.getPosition(_vm.position_id)) +
              " - Results as of : " +
              _vm._s(_vm.last_update)
          ),
        ]),
        _vm._v(" "),
        _vm._m(0),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-body" }, [
      _c("div", {
        staticStyle: { height: "300px", width: "300px" },
        attrs: { id: "chart" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=template&id=5bbb2a06&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/index.vue?vue&type=template&id=5bbb2a06& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.loading
      ? _c(
          "div",
          [
            _c(
              "nav",
              {
                staticClass: "navbar navbar-default navbar-fixed-top",
                attrs: { id: "nav" },
              },
              [
                _c("div", { staticClass: "container-fluid" }, [
                  _c("div", { staticClass: "navbar-header" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "navbar-brand",
                        attrs: { href: _vm.data.baseURL },
                      },
                      [_vm._v("Voting System")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse",
                      attrs: { id: "myNavbar" },
                    },
                    [
                      _c(
                        "ul",
                        { staticClass: "nav navbar-nav" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "Admin Home" },
                                tag: "li",
                                exact: "",
                              },
                            },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Home"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "Manage Position" },
                                tag: "li",
                              },
                            },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Manage Position"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "Manage Partylist" },
                                tag: "li",
                              },
                            },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Manage Partylist"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "Manage Voter" },
                                tag: "li",
                              },
                            },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Manage Voter"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "Manage Nominee" },
                                tag: "li",
                              },
                            },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Manage Nominee"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("ul", { staticClass: "nav navbar-right navbar-nav" }, [
                        _c("li", { staticClass: "dropdown" }, [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-toggle",
                              attrs: {
                                href: "#",
                                "data-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "true",
                                "aria-expanded": "false",
                              },
                            },
                            [
                              _c("span", { staticClass: "fa fa-user" }),
                              _vm._v(" " + _vm._s(_vm.data.user.name) + " "),
                              _c("span", { staticClass: "caret" }),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "dropdown-menu" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: { name: "Update Account" },
                                    tag: "li",
                                    exact: "",
                                  },
                                },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Update Account"),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.data.user.id == 1
                                ? _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: { name: "Manage Account" },
                                        tag: "li",
                                      },
                                    },
                                    [
                                      _c("a", { attrs: { href: "#" } }, [
                                        _vm._v("Manage Account"),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.logout()
                                    },
                                  },
                                },
                                [_c("a", [_vm._v("Logout")])]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("router-view"),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.loading
      ? _c("div", { staticClass: "container" }, [_vm._m(1)])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggle",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#myNavbar",
        },
      },
      [
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jumbotron" }, [
      _c("h1", [
        _vm._v("Loading "),
        _c("i", { staticClass: "fa fa-refresh fa-spin" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=template&id=c86be3d8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/login.vue?vue&type=template&id=c86be3d8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-5 col-md-offset-3" }, [
    _c("div", { staticClass: "panel panel-default" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { id: "login_form" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.login.apply(null, arguments)
              },
            },
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                staticClass: "btn btn-primary form-control",
                class: { disabled: _vm.loading.isLoading },
                attrs: { type: "submit" },
                domProps: { value: _vm.loading.value },
              }),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h4", [_vm._v("Admin Login")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("E-mail")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "email", name: "email", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          name: "password",
          id: "password",
          required: "",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [
      _c("input", {
        attrs: {
          type: "checkbox",
          id: "visibility",
          onclick:
            " $(this)[0].checked ? \r\n\t\t\t\t\t\t\t\t\t$('#password').attr('type','text'):\r\n\t\t\t\t\t\t\t\t\t$('#password').attr('type','password')",
        },
      }),
      _vm._v(" Show Password\r\n\t\t\t\t"),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=template&id=389a664e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/add.vue?vue&type=template&id=389a664e& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "form",
        {
          staticClass: "row",
          attrs: {
            method: "POST",
            id: "add_form",
            action: _vm.data.API + "nominee",
            enctype: "mutlipart/formdata",
          },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.add()
            },
          },
        },
        [
          _c(
            "div",
            { staticClass: "col-md-4" },
            [_c("uploader", { attrs: { "file-name": "image" } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "position_id" } }, [
                _vm._v("Position"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.position_id,
                      expression: "position_id",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { name: "position_id", required: "" },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.position_id = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "0", disabled: "" } }, [
                    _vm._v("--- Select Position ---"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.data.positions, function (position) {
                    return _c("option", { domProps: { value: position.id } }, [
                      _vm._v(_vm._s(position.name)),
                    ])
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "partylist_id" } }, [
                _vm._v("Partylist"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  staticClass: "form-control",
                  attrs: { name: "partylist_id" },
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("--- Select Partylist (Optional) ---"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.data.partylists, function (partylist) {
                    return _c("option", { domProps: { value: partylist.id } }, [
                      _vm._v(_vm._s(partylist.name)),
                    ])
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group pull-right" },
              [
                _c("input", {
                  staticClass: "btn btn-info",
                  attrs: { type: "submit", value: "Submit" },
                }),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-default",
                    attrs: {
                      to: {
                        name: "Manage Nominee",
                        query: { position_id: _vm.position_id },
                      },
                    },
                  },
                  [_vm._v("\r\n\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t")]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "name", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "student_id" } }, [_vm._v("Student ID")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "student_id", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "course" } }, [_vm._v("Course")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "course", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "motto" } }, [_vm._v("Motto")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "motto", placeholder: "(Optional)" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "description" } }, [_vm._v("Description")]),
      _vm._v(" "),
      _c("textarea", {
        staticClass: "form-control",
        attrs: { name: "description", placeholder: "(Optional)" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=template&id=f30deaa6&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/edit.vue?vue&type=template&id=f30deaa6& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "form",
        {
          staticClass: "row",
          attrs: {
            method: "POST",
            id: "edit_form",
            action: _vm.data.API + "nominee/" + _vm.id,
            enctype: "multipart/form-data",
          },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.edit()
            },
          },
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "_method", value: "PUT" },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("uploader", {
                attrs: {
                  "file-name": "image",
                  "image-src": _vm.data.storageURL + _vm.nominee.image,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", name: "name", required: "" },
                domProps: { value: _vm.nominee.name },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "student_id" } }, [
                _vm._v("Student ID"),
              ]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", name: "student_id", required: "" },
                domProps: { value: _vm.nominee.student_id },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "course" } }, [_vm._v("Course")]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", name: "course", required: "" },
                domProps: { value: _vm.nominee.course },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "motto" } }, [_vm._v("Motto")]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "motto",
                  placeholder: "(Optional)",
                },
                domProps: { value: _vm.nominee.motto },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "description" } }, [
                _vm._v("Description"),
              ]),
              _vm._v(" "),
              _c(
                "textarea",
                {
                  staticClass: "form-control",
                  attrs: { name: "description", placeholder: "(Optional)" },
                },
                [_vm._v(_vm._s(_vm.nominee.description))]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "position_id" } }, [
                _vm._v("Position"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  staticClass: "form-control",
                  attrs: { name: "position_id", required: "" },
                  domProps: { value: _vm.nominee.position_id },
                },
                [
                  _c("option", { attrs: { value: "0", disabled: "" } }, [
                    _vm._v("--- Select Position ---"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.data.positions, function (position) {
                    return _c("option", { domProps: { value: position.id } }, [
                      _vm._v(_vm._s(position.name)),
                    ])
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "partylist_id" } }, [
                _vm._v("Partylist"),
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  staticClass: "form-control",
                  attrs: { name: "partylist_id" },
                  domProps: { value: _vm.nominee.partylist_id },
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("--- Select Partylist (Optional) ---"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.data.partylists, function (partylist) {
                    return _c("option", { domProps: { value: partylist.id } }, [
                      _vm._v(_vm._s(partylist.name)),
                    ])
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group pull-right" },
              [
                _c("input", {
                  staticClass: "btn btn-info",
                  attrs: { type: "submit", value: "Submit" },
                }),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-default",
                    attrs: { to: { name: "Manage Nominee" } },
                  },
                  [_vm._v("\r\n\t\t\t\t\t\tBack\r\n\t\t\t\t\t")]
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=template&id=eb3ff682&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/index.vue?vue&type=template&id=eb3ff682& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c(
        "div",
        { staticClass: "col-md-3", staticStyle: { "max-width": "250px" } },
        [
          _c(
            "ul",
            { staticClass: "list-group" },
            [
              _c(
                "router-link",
                {
                  staticClass: "list-group-item",
                  class: { active: _vm.position_id == 0 },
                  attrs: {
                    tag: "li",
                    to: { name: "Manage Nominee" },
                    exact: "",
                    replace: "",
                  },
                },
                [_vm._v("\r\n\t\t\t\tAll Position\r\n\t\t\t")]
              ),
              _vm._v(" "),
              _vm._l(_vm.data.positions, function (position) {
                return _c(
                  "router-link",
                  {
                    key: position.id,
                    staticClass: "list-group-item",
                    attrs: {
                      tag: "li",
                      to: { query: { position_id: position.id } },
                      exact: "",
                      replace: "",
                    },
                  },
                  [
                    _vm._v(
                      "\r\n\t\t\t\t" + _vm._s(position.name) + "\r\n\t\t\t"
                    ),
                  ]
                )
              }),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9 panel panel-default" }, [
        _c("div", { staticClass: "panel-body table-responsive" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: {
                    to: {
                      name: "Add Nominee",
                      query: { position_id: _vm.position_id },
                    },
                  },
                },
                [_c("i", { staticClass: "fa fa-plus" }), _vm._v(" Add Nominee")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.nominees, function (nominee) {
                  return _c("tr", [
                    _c("td", [
                      _c("img", {
                        staticClass: "thumbnail",
                        staticStyle: { height: "60px", width: "60px" },
                        attrs: {
                          alt: nominee.name,
                          src: _vm.data.storageURL + nominee.image,
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(nominee.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(nominee.student_id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(nominee.course))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(nominee.position))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(nominee.partylist))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-info",
                            attrs: {
                              to: {
                                name: "Edit Nominee",
                                params: { id: nominee.id },
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "fa fa-edit" }),
                            _vm._v(" Edit\r\n\t\t\t\t\t\t\t"),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function ($event) {
                                _vm.util.showModal("#delete-nominee-modal")
                                _vm.id = nominee.id
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "fa fa-trash" }),
                            _vm._v(" Delete\r\n\t\t\t\t\t\t\t"),
                          ]
                        ),
                      ],
                      1
                    ),
                  ])
                }),
                _vm._v(" "),
                _vm.nominees.length < 1
                  ? _c("tr", [
                      _c("td", { attrs: { colspan: "7" } }, [
                        _vm._v("No nominees"),
                      ]),
                    ])
                  : _vm._e(),
              ],
              2
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { id: "delete-nominee-modal" } },
        [
          _c("modal-header", [_vm._v("Delete Nominee")]),
          _vm._v(" "),
          _c("modal-body", [
            _c("h3", [_vm._v("Are you sure to delete this nominee?")]),
          ]),
          _vm._v(" "),
          _c("modal-footer", [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function ($event) {
                    return _vm.deleteNominee()
                  },
                },
              },
              [_vm._v("Delete")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function ($event) {
                    return _vm.util.hideModal("#delete-nominee-modal")
                  },
                },
              },
              [_vm._v("\r\n\t\t\t\tBack\r\n\t\t\t")]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Student ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Course")]),
        _vm._v(" "),
        _c("th", [_vm._v("Position")]),
        _vm._v(" "),
        _c("th", [_vm._v("Partylist")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=template&id=70ec0c7e&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/nominee/nominee.vue?vue&type=template&id=70ec0c7e& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container col-md-10 col-md-offset-1" },
    [_c("h4", [_vm._v("Manage Nominee")]), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=template&id=252159c1&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/add.vue?vue&type=template&id=252159c1& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Add Partylist")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "add-form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.add()
            },
          },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "button",
                { staticClass: "btn btn-success", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Manage Partylist" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "name", required: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=template&id=2ad0859a&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/edit.vue?vue&type=template&id=2ad0859a& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Edit Partylist")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "edit-form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.edit()
            },
          },
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "name", required: "" },
              domProps: { value: _vm.data.partylist.name },
            }),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("input", {
                staticClass: "btn btn-success",
                attrs: { type: "submit", value: "Submit" },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Manage Partylist" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=template&id=70f7e772&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/index.vue?vue&type=template&id=70f7e772& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: { to: { name: "Add Partylist" } },
                },
                [
                  _c("i", { staticClass: "fa fa-plus" }),
                  _vm._v(" Add Partylist\r\n\t\t\t"),
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function ($event) {
                      return _vm.refreshPartylist()
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-refresh" }),
                  _vm._v(" Refresh Partylist\r\n\t\t\t"),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-hover",
                attrs: { id: "partylist_table" },
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.data.partylists, function (partylist, i) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(partylist.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(partylist.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              on: {
                                click: function ($event) {
                                  return _vm.edit(i)
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "fa fa-edit" }),
                              _vm._v(" Edit\r\n\t\t\t\t\t\t\t"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function ($event) {
                                  _vm.util.showModal("#delete-partylist-modal")
                                  _vm.id = partylist.id
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(" Delete\r\n\t\t\t\t\t\t\t"),
                            ]
                          ),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    _vm.data.partylists.length < 1
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }, [
                            _vm._v("No Partylist"),
                          ]),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { id: "delete-partylist-modal" } },
        [
          _c("modal-header", [_vm._v("Delete Partylist")]),
          _vm._v(" "),
          _c("modal-body", [
            _c("h2", [_vm._v("Are you sure to delete Partylist?")]),
          ]),
          _vm._v(" "),
          _c("modal-footer", [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function ($event) {
                    return _vm.deletePartylist()
                  },
                },
              },
              [_vm._v("Delete")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function ($event) {
                    return _vm.util.hideModal("#delete-partylist-modal")
                  },
                },
              },
              [_vm._v("Cancel")]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=template&id=7beeba24&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/partylist/partylist.vue?vue&type=template&id=7beeba24& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container col-md-8 col-md-offset-2" },
    [_c("h4", [_vm._v("Manage Partylist")]), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/add.vue?vue&type=template&id=e6b3e840&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/add.vue?vue&type=template&id=e6b3e840& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Add Position")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "add-form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.add()
            },
          },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "button",
                { staticClass: "btn btn-success", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Manage Position" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "name", required: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=template&id=983bd14a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/edit.vue?vue&type=template&id=983bd14a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Edit Position")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "edit-form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.edit()
            },
          },
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "name", required: "" },
              domProps: { value: _vm.data.position.name },
            }),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("input", {
                staticClass: "btn btn-success",
                attrs: { type: "submit", value: "Submit" },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Manage Position" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/index.vue?vue&type=template&id=0a188dd1&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/index.vue?vue&type=template&id=0a188dd1& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: { to: { name: "Add Position" } },
                },
                [
                  _c("i", { staticClass: "fa fa-plus" }),
                  _vm._v(" Add Position\r\n\t\t\t"),
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function ($event) {
                      return _vm.refreshPosition()
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-refresh" }),
                  _vm._v(" Refresh Position\r\n\t\t\t"),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-hover",
                attrs: { id: "position_table" },
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.data.positions, function (position, i) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(position.id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(position.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              on: {
                                click: function ($event) {
                                  return _vm.edit(i)
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "fa fa-edit" }),
                              _vm._v(" Edit\r\n\t\t\t\t\t\t\t"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function ($event) {
                                  _vm.util.showModal("#delete-position-modal")
                                  _vm.id = position.id
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(" Delete\r\n\t\t\t\t\t\t\t"),
                            ]
                          ),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    _vm.data.positions.length < 1
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }, [
                            _vm._v("No Positions"),
                          ]),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { id: "delete-position-modal" } },
        [
          _c("modal-header", [_vm._v("Delete Position")]),
          _vm._v(" "),
          _c("modal-body", [
            _c("h2", [_vm._v("Are you sure to delete Position?")]),
          ]),
          _vm._v(" "),
          _c("modal-footer", [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function ($event) {
                    return _vm.deletePosition()
                  },
                },
              },
              [_vm._v("Delete")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function ($event) {
                    return _vm.util.hideModal("#delete-position-modal")
                  },
                },
              },
              [_vm._v("Cancel")]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/position.vue?vue&type=template&id=5ec3d30c&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/position/position.vue?vue&type=template&id=5ec3d30c& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container col-md-8 col-md-offset-2" },
    [_c("h4", [_vm._v("Manage Position")]), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=template&id=7c4e8cf6&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/add.vue?vue&type=template&id=7c4e8cf6& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Add Voter")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "add-form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.add()
            },
          },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "button",
                { staticClass: "btn btn-success", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Manage Voter" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "name", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "student_id" } }, [_vm._v("Student ID")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "student_id", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "course" } }, [_vm._v("Course")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "course", required: "" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=template&id=25051e56&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/edit.vue?vue&type=template&id=25051e56& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-body" }, [
      _c("h4", [_vm._v("Edit Voter")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "edit-form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.edit()
            },
          },
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "name", required: "" },
              domProps: { value: _vm.data.voter.name },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "student_id" } }, [
              _vm._v("Student ID"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "student_id", required: "" },
              domProps: { value: _vm.data.voter.student_id },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "course" } }, [_vm._v("Course")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", name: "course", required: "" },
              domProps: { value: _vm.data.voter.course },
            }),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("input", {
                staticClass: "btn btn-success",
                attrs: { type: "submit", value: "Submit" },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-default",
                  attrs: { to: { name: "Manage Voter" } },
                },
                [_vm._v("Back")]
              ),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=template&id=85533394&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/index.vue?vue&type=template&id=85533394& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-body" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: { to: { name: "Add Voter" } },
                },
                [
                  _c("i", { staticClass: "fa fa-plus" }),
                  _vm._v(" Add Voter\r\n\t\t\t"),
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: {
                    click: function ($event) {
                      return _vm.refreshVoter()
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-refresh" }),
                  _vm._v(" Refresh Voter\r\n\t\t\t"),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass: "table table-hover",
                attrs: { id: "position_table" },
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.data.voters.data, function (voter, i) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(voter.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(voter.student_id))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(voter.course))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info",
                              on: {
                                click: function ($event) {
                                  return _vm.edit(i)
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "fa fa-edit" }),
                              _vm._v(" Edit\r\n\t\t\t\t\t\t\t"),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              on: {
                                click: function ($event) {
                                  _vm.util.showModal("#delete-voter-modal")
                                  _vm.id = voter.id
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(" Delete\r\n\t\t\t\t\t\t\t"),
                            ]
                          ),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    _vm.data.voters.data && _vm.data.voters.data.length < 1
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "3" } }, [
                            _vm._v("No Voters"),
                          ]),
                        ])
                      : _vm._e(),
                  ],
                  2
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm.pages.length > 1
            ? _c(
                "ul",
                { staticClass: "pagination" },
                _vm._l(_vm.pages, function (page) {
                  return _c(
                    "router-link",
                    {
                      key: page["pages"],
                      class: { active: _vm.current_page == page["page"] },
                      attrs: {
                        tag: "li",
                        to: { query: { page: page["page"] } },
                        exact: "",
                      },
                    },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v(_vm._s(page["page"])),
                      ]),
                    ]
                  )
                }),
                1
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { id: "delete-voter-modal" } },
        [
          _c("modal-header", [_vm._v("Delete Voter")]),
          _vm._v(" "),
          _c("modal-body", [
            _c("h2", [_vm._v("Are you sure to delete voter?")]),
          ]),
          _vm._v(" "),
          _c("modal-footer", [
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function ($event) {
                    return _vm.deleteVoter()
                  },
                },
              },
              [_vm._v("Delete")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                on: {
                  click: function ($event) {
                    return _vm.util.hideModal("#delete-voter-modal")
                  },
                },
              },
              [_vm._v("Cancel")]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Student ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Course")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=template&id=0a7f45a8&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/admin/voter/voter.vue?vue&type=template&id=0a7f45a8& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container col-md-8 col-md-offset-2" },
    [_c("h4", [_vm._v("Manage Voters")]), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/index.vue?vue&type=template&id=57d6a3ee&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/index.vue?vue&type=template&id=57d6a3ee& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row col-md-10 col-md-offset-1" }, [
    _c("div", { staticClass: "col-md-4" }, [
      _c("h4", [_vm._v("Voter's Information")]),
      _c("hr"),
      _vm._v(" "),
      _c("ul", { staticClass: "list-group" }, [
        _c("li", { staticClass: "list-group-item" }, [
          _c("b", [_vm._v("Student ID : ")]),
          _vm._v(_vm._s(_vm.data.user.student_id)),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item" }, [
          _c("b", [_vm._v("Name : ")]),
          _vm._v(_vm._s(_vm.data.user.name)),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item" }, [
          _c("b", [_vm._v("Course : ")]),
          _vm._v(_vm._s(_vm.data.user.course)),
        ]),
        _vm._v(" "),
        _vm.data.election.status == 1
          ? _c(
              "li",
              { staticClass: "list-group-item" },
              [_c("center", [_vm._v("Election hasn't started yet")])],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.data.election.status == 2
          ? _c(
              "li",
              { staticClass: "list-group-item" },
              [
                _c(
                  "center",
                  [
                    !_vm.hasVoted()
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-info",
                            attrs: { to: { name: "Vote" } },
                          },
                          [_vm._v("\r\n\t\t\t\t\t\tVote Now\r\n\t\t\t\t\t")]
                        )
                      : _c(
                          "router-link",
                          {
                            staticClass: "btn btn-info",
                            attrs: { to: { name: "Result" } },
                          },
                          [_vm._v("\r\n\t\t\t\t\t\tView Result\r\n\t\t\t\t\t")]
                        ),
                  ],
                  1
                ),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm._v(" "),
      _vm.hasVoted()
        ? _c("div", [
            _c("hr"),
            _vm._v(" "),
            _c("h4", [_vm._v("Your votes information")]),
            _c("hr"),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "list-group" },
              _vm._l(_vm.data.result, function (result) {
                return _c("li", { staticClass: "list-group-item" }, [
                  _c("b", [
                    _vm._v(_vm._s(_vm.getPosition(result.position_id)) + " : "),
                  ]),
                  _vm._v(
                    _vm._s(_vm.getNominee(result.nominee_id)) + "\r\n\t\t\t\t"
                  ),
                ])
              }),
              0
            ),
          ])
        : _vm._e(),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-8" },
      [
        _c("h4", [_vm._v("Candidates Information")]),
        _c("hr"),
        _vm._v(" "),
        _c("small", [_vm._v("Click Picture to see details")]),
        _vm._v(" "),
        _vm._l(_vm.data.positions, function (position) {
          return _c("div", { staticClass: "panel panel-primary" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _vm._v(_vm._s(position.name)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body table-responsive" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _vm._m(0, true),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.data.nominees, function (nominee, i) {
                    return nominee.position_id == position.id
                      ? _c("tr", [
                          _c("td", [
                            _c("img", {
                              staticClass: "thumbnail",
                              staticStyle: { height: "60px", width: "60px" },
                              attrs: {
                                src: _vm.data.storageURL + nominee.image,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.view(i)
                                },
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(nominee.name))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.getPartylist(nominee.partylist_id))
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(nominee.course))]),
                        ])
                      : _vm._e()
                  }),
                  0
                ),
              ]),
            ]),
          ])
        }),
        _vm._v(" "),
        _c(
          "modal",
          { attrs: { id: "nominee-information-modal", aClass: "primary" } },
          [
            _c("modal-header", [_vm._v(_vm._s(_vm.header))]),
            _vm._v(" "),
            _c("modal-body", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("img", {
                    staticClass: "thumbnail",
                    staticStyle: { height: "150px", width: "150px" },
                    attrs: { src: _vm.data.storageURL + _vm.x.image },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-9",
                    staticStyle: { "margin-left": "5px" },
                  },
                  [
                    _c("h3", [
                      _c("strong", [
                        _c("em", [_vm._v('"' + _vm._s(_vm.x.motto) + '"')]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("b", [_vm._v(" Name : ")]),
                    _vm._v(_vm._s(_vm.x.name)),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [_vm._v(" Course : ")]),
                    _vm._v(_vm._s(_vm.x.course)),
                    _c("br"),
                    _vm._v(" "),
                    _c("b", [_vm._v(" Partylist : ")]),
                    _vm._v(_vm._s(_vm.getPartylist(_vm.x.partylist_id))),
                    _c("br"),
                    _c("hr"),
                    _vm._v(
                      "\r\n\t\t\t\t\t\t" +
                        _vm._s(_vm.x.description) +
                        "\r\n\t\t\t\t\t"
                    ),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("modal-footer", [
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { "data-dismiss": "modal" },
                },
                [_vm._v("Close")]
              ),
            ]),
          ],
          1
        ),
      ],
      2
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Partylist")]),
        _vm._v(" "),
        _c("th", [_vm._v("Course")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/result.vue?vue&type=template&id=56ffd331&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/result.vue?vue&type=template&id=56ffd331& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row col-md-10 col-md-offset-1" }, [
    _c("div", { staticClass: "col-md-4" }, [
      _c("h4", [_vm._v("Positions")]),
      _c("hr"),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "list-group" },
        [
          _vm._l(_vm.data.positions, function (position) {
            return _c(
              "router-link",
              {
                key: position.id,
                staticClass: "list-group-item",
                class: { active: position.id == _vm.position_id },
                attrs: {
                  tag: "li",
                  to: { query: { position_id: position.id } },
                  exact: "",
                  replace: "",
                },
              },
              [_vm._v("\r\n\t\t\t\t" + _vm._s(position.name) + "\r\n\t\t\t")]
            )
          }),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "list-group-item" },
            [
              _c("center", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function ($event) {
                        return _vm.refreshResults()
                      },
                    },
                  },
                  [
                    _vm._v("\r\n\t\t\t\t\t\tRefresh results "),
                    _c("i", { staticClass: "fa fa-refresh" }),
                  ]
                ),
              ]),
            ],
            1
          ),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-8" }, [
      _c("h4", [_vm._v("Results")]),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "panel panel-default" }, [
        _c("div", { staticClass: "panel-heading" }, [
          _vm._v(
            _vm._s(_vm.getPosition(_vm.position_id)) +
              " - Results as of : " +
              _vm._s(_vm.last_update)
          ),
        ]),
        _vm._v(" "),
        _vm._m(0),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-body" }, [
      _c("div", {
        staticStyle: { height: "300px", width: "300px" },
        attrs: { id: "chart" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=template&id=0cf4be7e&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/home/vote.vue?vue&type=template&id=0cf4be7e& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row col-md-10 col-md-offset-1" },
    [
      _c("div", { staticClass: "col-md-4" }, [
        _c("h4", [_vm._v("Vote Information")]),
        _c("hr"),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-group" },
          [
            _vm._l(_vm.data.positions, function (position) {
              return _c("li", { staticClass: "list-group-item" }, [
                _c("b", [_vm._v(_vm._s(position.name) + " : ")]),
                _vm._v(_vm._s(_vm.getName(position.id)) + "\r\n\t\t\t"),
              ])
            }),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "list-group-item" },
              [
                _c("center", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function ($event) {
                          return _vm.util.showModal("#vote-modal")
                        },
                      },
                    },
                    [_vm._v("Submit Vote")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      on: {
                        click: function ($event) {
                          return _vm.reset()
                        },
                      },
                    },
                    [_vm._v("Reset")]
                  ),
                ]),
              ],
              1
            ),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-8" },
        [
          _c("h4", [_vm._v("Select Candidates")]),
          _c("hr"),
          _vm._v(" "),
          _vm._l(_vm.data.positions, function (position) {
            return _c("div", { staticClass: "panel panel-info" }, [
              _c("div", { staticClass: "panel-heading" }, [
                _vm._v(_vm._s(position.name)),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body table-responsive" }, [
                _c("table", { staticClass: "table table-hover" }, [
                  _vm._m(0, true),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.data.nominees, function (nominee) {
                      return nominee.position_id == position.id
                        ? _c(
                            "tr",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.vote(position.id, nominee.id)
                                },
                              },
                            },
                            [
                              _c("td", [
                                _c("input", {
                                  attrs: {
                                    type: "radio",
                                    name: position.id,
                                    id: nominee.id,
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(nominee.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm.getPartylist(nominee.partylist_id))
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(nominee.course))]),
                            ]
                          )
                        : _vm._e()
                    }),
                    0
                  ),
                ]),
              ]),
            ])
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "modal",
        { attrs: { id: "vote-modal" } },
        [
          _c("modal-header", [_vm._v("Vote")]),
          _vm._v(" "),
          _c("modal-body", [
            _c("h3", [_vm._v("Note: You can only vote once, so vote wisely.")]),
          ]),
          _vm._v(" "),
          _c("modal-footer", [
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                on: {
                  click: function ($event) {
                    return _vm.submit()
                  },
                },
              },
              [_vm._v("Submit Vote")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { "data-dismiss": "modal" },
              },
              [_vm._v("Cancel")]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Partylist")]),
        _vm._v(" "),
        _c("th", [_vm._v("Course")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=template&id=bfe9a194&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/index.vue?vue&type=template&id=bfe9a194& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.loading
      ? _c(
          "div",
          [
            _c(
              "nav",
              {
                staticClass: "navbar navbar-default navbar-fixed-top",
                attrs: { id: "nav" },
              },
              [
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "navbar-header" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "navbar-brand",
                        attrs: { href: _vm.data.baseURL },
                      },
                      [_vm._v("Voting System")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse",
                      attrs: { id: "myNavbar" },
                    },
                    [
                      _c(
                        "ul",
                        { staticClass: "nav navbar-nav" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "Voter Home" },
                                tag: "li",
                                exact: "",
                              },
                            },
                            [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Home"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.data.election.status == 2 && !_vm.hasVoted()
                            ? _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: { name: "Vote" },
                                    tag: "li",
                                    exact: "",
                                  },
                                },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Vote"),
                                  ]),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.data.election.status == 2 && _vm.hasVoted()
                            ? _c(
                                "router-link",
                                {
                                  attrs: { to: { name: "Result" }, tag: "li" },
                                },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Results"),
                                  ]),
                                ]
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("ul", { staticClass: "nav navbar-right navbar-nav" }, [
                        _c("li", { staticClass: "dropdown" }, [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-toggle",
                              attrs: {
                                href: "#",
                                "data-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "true",
                                "aria-expanded": "false",
                              },
                            },
                            [
                              _c("span", { staticClass: "fa fa-user" }),
                              _vm._v(" " + _vm._s(_vm.data.user.name) + " "),
                              _c("span", { staticClass: "caret" }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("ul", { staticClass: "dropdown-menu" }, [
                            _c(
                              "li",
                              {
                                on: {
                                  click: function ($event) {
                                    return _vm.logout()
                                  },
                                },
                              },
                              [_c("a", [_vm._v("Logout")])]
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("router-view"),
          ],
          1
        )
      : _c("div", { staticClass: "container" }, [_vm._m(1)]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggle",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#myNavbar",
        },
      },
      [
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jumbotron" }, [
      _c("h1", [
        _vm._v("Loading "),
        _c("i", { staticClass: "fa fa-refresh fa-spin" }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=template&id=69b2d24d&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/demo/voter/login.vue?vue&type=template&id=69b2d24d& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-5 col-md-offset-3" }, [
    _c("div", { staticClass: "panel panel-default" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { id: "login_form" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.login.apply(null, arguments)
              },
            },
          },
          [_vm._m(1), _vm._v(" "), _vm._m(2)]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h4", [_vm._v("Voter Login")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Student ID")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", name: "student_id", required: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("input", {
        staticClass: "btn btn-primary form-control",
        attrs: { type: "submit", value: "Login" },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/body.vue?vue&type=template&id=17b4402c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/body.vue?vue&type=template&id=17b4402c& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-body" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/footer.vue?vue&type=template&id=1f034b63&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/footer.vue?vue&type=template&id=1f034b63& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-footer" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/header.vue?vue&type=template&id=4035af55&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/header.vue?vue&type=template&id=4035af55& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-header" }, [
    _c(
      "button",
      {
        staticClass: "close",
        attrs: { type: "button", "data-dismiss": "modal" },
      },
      [_vm._v("×")]
    ),
    _vm._v(" "),
    _c("h4", [_vm._t("default")], 2),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=template&id=6c48dfd6&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/modal/modal.vue?vue&type=template&id=6c48dfd6& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal fade", attrs: { id: _vm.id, role: "dialog" } },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c(
          "div",
          { staticClass: "modal-content", class: _vm.aClass },
          [_vm._t("default")],
          2
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=template&id=c6311dd8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/mycomponents/uploader.vue?vue&type=template&id=c6311dd8& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("center", [
    _c("div", { staticClass: "imgContainer" }, [
      _c("input", {
        staticClass: "file",
        attrs: { type: "file", id: _vm.fileId, name: _vm.fileName },
        on: {
          change: function ($event) {
            return _vm.readFile(_vm.fileId, _vm.imageId)
          },
        },
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "imgUpload img-rounded",
        attrs: {
          src: _vm.imageSrc,
          height: "100%",
          width: "100%",
          id: _vm.imageId,
        },
      }),
      _vm._v(" "),
      _c("span", { staticClass: "imgText" }, [_vm._v("Select Image")]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/assets/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
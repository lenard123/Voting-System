@extends('admin.layout.app')

@section('title','Voting System - Home')
@section('home') class="active" @endsection
@section('app')
<div style="margin-top: -20px">
        <div class="jumbotron">
            <div class="text-center">
                <h1>Web Based Voting System</h1>
                <p>
                    <h4 v-show="status==1">Election started @{{ aaa }}</h4><br />
                    <!-- Election hasn't started -->
                    <button class="btn btn-info" data-toggle="modal" data-target="#startElectionModal" v-show="status==0">Start Election</button>
                    <!-- Election has started -->
                    <button class="btn btn-primary" v-show="status==1" onclick="location.href='{{ $base_url }}admin/result'">Realtime Result</button>
                    <button class="btn btn-danger" data-toggle="modal" data-target="#endElectionModal" v-show="status==1">Stop Election</button>
                    <!-- Election hasn't ended -->
                    <button class="btn btn-info" v-show="status==3" onclick="location.href='{{ $base_url }}admin/final'">View Result</button>
                    <button class="btn btn-danger" v-show="status==3" data-toggle="modal" data-target="#resetElectionModal">Reset Election</button>

                    <h4 v-show="status==2">Loading...</h4>
                </p>
            </div>
        </div>
 </div>



<div class="modal fade" id="alert" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div v-show="loading.isLoading">
                    <div class="alert" v-bind:class="loading.alert_type" style="text-align: left">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <strong>@{{ loading.message }}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="startElectionModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Start Election</h4>           
            </div>

            <div class="modal-body">
                <p>Start Election?</p>
                <p>Note: During the Election you can not add/update/delete 
                Voter, Nominee, Partylist and Position.</p>
                <p>@{{ startElectionMessage }}</p>
            </div>
    
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" v-on:click="start">Start</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>          
            </div>
        </div>

    </div>
</div>




<div class="modal fade" id="resetElectionModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Reset Election?</h4>           
            </div>

            <div class="modal-body">
                <p>Note: Resetting election will erased all data including Voters, Nominee, Position, and Partylist.</p>
                <div class="form-group has-warning has-feedback">
                    <label for="password">Enter Password</label>
                    <input type="text" name="password" class="form-control" autocomplete="off" v-model="password" >
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <p>@{{ resetElectionMessage }}</p>
            </div>
    
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" v-on:click="reset">Reset</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>          
            </div>
        </div>

    </div>
</div>




<div class="modal fade" id="endElectionModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">End Election</h4>           
            </div>

            <div class="modal-body">
                <p>End Election?</p>
                <p>@{{ endElectionMessage }}</p>
            </div>
    
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" v-on:click="end">Submit</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>          
            </div>
        </div>

    </div>
</div>
@endsection

@section('script')
<script>
    var currentdate = moment().format('YYYY-MM-DD HH:mm:ss');
    var baseurl = '{{ $base_url }}';
    var diff = 0;
    var app = new Vue({
        el: '#app',
        data:{
            loading:{
                isLoading: true,
                message: 'Election has started successfully',
                alert_type: 'alert-success'
            },
            startElectionMessage:'',
            endElectionMessage:'',
            resetElectionMessage:'',
            password:'',
            startTime:'',
            status:2,
            aaa:''
        },

        created(){
            this.getStatus();
        },

        methods:{
            showMessage: function(message, alert_type){
                this.loading = {
                    isLoading: true,
                    message: message,
                    alert_type: alert_type
                }
            },

            getStatus: function(){
                var vm = this;
                var url = baseurl+'api/election/1';
                axios.get(url).then(function(response){
                    vm.status = response.data.STATUS==null ? 0:response.data.STATUS;
                    if(response.data.STATUS == 1){
                        vm.startTime = response.data.ELECTIONDAY;
                        var date1 = moment(vm.startTime, "YYYY-MM-DD HH:mm:ss")
                        var date2 = moment(currentdate, "YYYY-MM-DD HH:mm:ss")
                        diff = date2.diff(date1);
                        vm.aaa = vm.getTime(diff);
                    }
                })
            },

            end: function(){
                var url = baseurl+'api/election/1';
                var params = 'electionend='+escape(currentdate);
                var vm = this;
                vm.endElectionMessage = "Loading...";
                axios.put(url, params).then(function(response){
                    switch (response.data.status){
                        case 'success':
                            vm.endElectionMessage = response.data.message;
                            vm.getStatus();
                            vm.showMessage('Election has ended', 'alert-info')
                            $('#endElectionModal').modal('hide');
                            $('#alert').modal('show')
                            setTimeout(function(){
                                $('#alert').modal('hide')
                            }, 3000);
                            break;
                        case 'failed':
                            vm.endElectionMessage=response.data.message;
                            break;
                        default:
                            console.log(response);
                            vm.endElectionMessage=response.data.message;
                            break;
                    }
                }).catch(function(error){
                    console.log(error);
                    vm.startElectionMessage=error.message; 
                })
            },

            reset: function(){
                var vm = this;
                var url = baseurl+'api/reset?password='+this.password;
                vm.resetElectionMessage = 'Loading...';
                axios.get(url).then(function(response){
                    vm.resetElectionMessage = '';
                    switch(response.data.status){
                        case 'success':
                            vm.getStatus();
                            vm.showMessage(response.data.message, 'alert-info');
                            $('#resetElectionModal').modal('hide');
                            $('#alert').modal('show');
                            setTimeout(function(){
                                $('#alert').modal('hide')
                            }, 3000);
                            break;
                        case 'failed':
                            vm.showMessage(response.data.message, 'alert-danger');
                            $('#resetElectionModal').modal('hide');
                            $('#alert').modal('show');
                            setTimeout(function(){
                                $('#alert').modal('hide')
                            }, 3000);
                            break;
                        default:
                            console.log(response);
                            vm.resetElectionMessage = 'An error occured';
                            break;
                    }
                }).catch(function(err){
                    console.log(err);
                    vm.resetElectionMessage = 'An error occured';
                })
            },

            start: function(){
                    var url = baseurl+'api/election';
                    var params = 'electionday='+escape(currentdate);
                    var vm = this;
                    vm.startElectionMessage = 'Loading...';
                    axios.post(url, params).then(function(response){
                        switch (response.data.status) {
                            case 'success':
                                vm.startElectionMessage=response.data.message;
                                vm.getStatus();
                                vm.showMessage(vm.startElectionMessage, 'alert-success');
                                $('#startElectionModal').modal('hide');
                                $('#alert').modal('show')
                                setTimeout(function(){
                                    $('#alert').modal('hide')
                                }, 3000);
                                break;
                            case 'failed':
                                vm.startElectionMessage=response.data.message;
                                break;
                            default:
                                console.log(response);
                                vm.startElectionMessage=response.data.message;
                                break;
                        }           
                    }).catch(function(error){
                        console.log(error);
                        vm.startElectionMessage=response.data.message; 
                    })
            },

            getTime: function(ms){
                //example ms = 471000 
                var day = Math.floor(ms/86400000) == 0 ? '' : Math.floor(ms/86400000)+'day(s) ';
                var hour = Math.floor((ms%86400000)/3600000) == 0? '' : Math.floor((ms%86400000)/3600000)+'hour(s) ';
                var minutes = Math.floor(((ms%86400000)%3600000)/60000) == 0? '': Math.floor(((ms%86400000)%3600000)/60000)+'minute(s) ';
                var seconds = Math.floor((((ms%86400000)%3600000)%60000)/1000)==0?'':Math.floor((((ms%86400000)%3600000)%60000)/1000)+'seconds ';
                return day+hour+minutes+seconds;
            }
        }
    })
    setInterval(function(){
        if(app.$data.status == 1){
            diff += 1000;
            app.$data.aaa = app.getTime(diff);
        }
    }, 1000)
</script>
@endsection
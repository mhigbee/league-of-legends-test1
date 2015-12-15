angular.module('leagueTestV1',[])
    //.controller('DataCtrl',['GetDataService',function (GetDataService){
    .controller('DataCtrl', ['LeagueService',function (LeagueService){
        var vm = this;
        console.log('Hello');
        //var getLeagueData = function () {
        //    GetDataService.grabLegends();
        //};
        //console.log(getLeagueData());
        vm.getSummonerId = function (){
            console.log("Submit");
            console.log(vm.summoner)
        };
        vm.userList = LeagueService.listUsers();
        console.log(vm.userList);
    }])
    .service('LeagueService', [function () {
        var users = [
            {userName : "jhrigs", userID : 12},
            {userName : "shigabee", userID: 12345677},
            {userName : "matt", userID: 18390498}
            ]
        this.listUsers = function(){
            return users;
        }
    }]);
//make a service with $http
//hard code in some array of data in the service
//test the app
//next step do an np-repeat and show in the view.
//investigate the API. What calls do we want to make?
//dev key e661fd26-2d79-487b-82b5-f0f4a08f3a67
//https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/shigabee?api_key=e661fd26-2d79-487b-82b5-f0f4a08f3a67


;
(function() {
    'use strict';
    angular.module('app.controllers')
        .controller('LoginCtrl', function($rootScope, $scope, $http, $state) {
            var vm = $scope;
            vm.Login = UserLogin;

            function UserLogin(users) {
                console.log("进入angular方法");
                let promise = $http({
                    method: 'POST',
                    url: '/account/loginPost',
                    data: users
                })
                promise.success(function(data, status, config, headers) {
                    console.log(data);
                    if (data.rel == "0") {
                        alert_layer(data.msg);
                    } else {
                        $rootScope.$broadcast('showUser', data)
                            // $rootScope.loginshow = false;
                        $state.go('download', {});
                    }
                });
                promise.error(function(data, status, hedaers, config) {
                    console.log("error");
                });
            }

        });

})();
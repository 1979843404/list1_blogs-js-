'use strict';
(function() {
    angular
        .module('blogs')
        .directive('showheader', header);

    function header(header_List, $http) {
        var directive = {
            link: link,
            templateUrl: 'temp/header/header.html',
            restrict: 'EA',
            replace: true
        };

        return directive;

        function link(scope, element, attrs) {
            var vm = scope;
            vm.header_List = header_List;
            vm.LoginOut = function() {
                let promise = $http({
                    method: 'POST',
                    url: '/account/loginOut',
                })
                promise.success(function(data, status, config, headers) {
                    location.href = '#/login'
                });
                promise.error(function(data, status, hedaers, config) {
                    console.log("error");
                });
            }
            vm.loginshow = true;
            vm.$on("showUser", function(e, data) {
                console.log(data);
                vm.loginshow = false;
                vm.username = true;
                vm.users = data;
            });
        }
    }
})();
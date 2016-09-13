(function() {
    'use strict';
    angular
        .module("app.router")
        .config(['$stateProvider', '$urlRouterProvider', '$compileProvider', config]);

    return;

    function config($stateProvider, $urlRouterProvider, $compileProvider) {
        whitelist($compileProvider);
        bindRouter($stateProvider);
    }



    function whitelist($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
    }

    function bindRouter($stateProvider) {
        $stateProvider
            .state('login', {
                controller: 'LoginCtrl',
                url: '/login',
                templateUrl: './temp/account/login/login.html'

            }).state('register', {
                url: '/register',
                templateUrl: './temp/account/register/register.html'
            }).state('about', {
                url: '/about',
                templateUrl: './temp/about/about.html'
            }).state('download', {
                url: '/download',
                templateUrl: './temp/download/download.html'
            }).state('message', {
                url: '/message',
                templateUrl: './temp/message/message.html'
            })
    }
})();
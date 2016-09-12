(function() {
    //开启严格模式
    'use strict';
    //进行模块化依赖注入
    //.run()注射器启动之后执行某些操作，而这些操作需要在页面对用户可用之前执行
    angular.module('Myapp', ['app.router', 'blogs', 'app.services', 'app.controllers'])
        .run(function($rootScope, $timeout, $log, $location) {});
    angular.module("app.config", []);
    angular.module("app.router", ['ui.router']);
    angular.module('blogs', ['app.config']);
    angular.module('app.services', ['app.config']);
    angular.module('app.controllers', ['app.services']);

})();
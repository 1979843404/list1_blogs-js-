'use strict';
(function() {
    angular
        .module('blogs')
        .directive('showheader', header);

    function header(header_List) {
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
        }
    }
})();
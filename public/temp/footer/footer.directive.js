'use strict';
(function() {
    console.log("2");
    angular
        .module('blogs')
        .directive('footers', msuics);

    function msuics() {
        var directive = {
            link: link,
            templateUrl: './main/footer/footer.html',
            restrict: 'EA',
            replace: true
        };

        return directive;

        function link(scope, element, attrs) {
            var vm = scope;
            vm.$watch('$viewContentLoaded', function() {
                var datas = {
                    title: '',
                    author: '',
                    url: '',
                    pic: ''
                };
                Aplayer(datas);
            });
        }


        function Aplayer(data) {
            var aplayerss = document.getElementById('aplayer');
            console.log("3");
            var ap1 = new APlayer({
                element: aplayerss,
                narrow: false,
                autoplay: true,
                showlrc: false,
                mutex: true,
                theme: '#e6d0b2',
                preload: 'metadata',
                music: {
                    title: data.title,
                    author: data.author,
                    url: data.url,
                    pic: data.pic
                }
            });
            ap1.init();
        }
    }
})();
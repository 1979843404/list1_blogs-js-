(function() {
    'use strict';
    angular.module('app.controllers')
        .controller('default_controller', function($scope, $http) {
            var vm = $scope;
            vm.Seach = Seach;
            vm.play = play;
            vm.PageSize = PageSize;
            var seachTexts = "";
           function Seach(seachText) {
                if (seachText == undefined || seachText == "") {
                    alert("请输入查询值");
                    return;
                }
                var dataAll = [];
                let url = 'http://apis.baidu.com/geekery/music/query?s=' + seachText + '&size=10&page=4';
                $http.get(url, {
                    cache: true,
                    headers: { 'apikey': '38d2a4547e526791f6abe0a443cf0962' }
                }).success(function(req) {
                    let datas = req.data.data;
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].album_name == "") {
                            datas[i].album_name = "暂无专辑";
                        }
                        dataAll.push({
                            'name': datas[i].filename,
                            'singer': datas[i].singername,
                            'album': datas[i].album_name,
                            'time': datas[i].duration,
                            'hash': datas[i].hash
                        })
                    }
                })
                vm.musicss = dataAll;
                return seachTexts = seachText;
            }

            function PageSize($event) {
                if (seachTexts == undefined || seachTexts == "") {
                    alert("没有数据不要进行翻页操作");
                }
                let PageSize = $event.target.getAttribute('PageSize');
                var dataAll = [];
                let url = 'http://apis.baidu.com/geekery/music/query?s=' + seachTexts + '&size=10&page=' + PageSize;
                $http.get(url, {
                    cache: true,
                    headers: { 'apikey': '38d2a4547e526791f6abe0a443cf0962' }
                }).success(function(req) {
                    let datas = req.data.data;
                 for (var i = 0; i < datas.length; i++) {
                        if (datas[i].album_name == "") {
                            datas[i].album_name = "暂无专辑";
                        }
                        dataAll.push({
                            'name': datas[i].filename,
                            'singer': datas[i].singername,
                            'album': datas[i].album_name,
                            'time': datas[i].duration,
                            'hash': datas[i].hash
                        })
                    }
                })
                vm.musicss = dataAll;
                return;
            }
            function play($event) {
                let hash = $event.target.getAttribute('hash');
                let singer = $event.target.getAttribute('singer');
                var singer_img = "";
                console.log(hash);
                if (hash == undefined) {
                    console.log("无歌曲");
                } else {
                    let singer_img_url = "http://apis.baidu.com/geekery/music/singer?name=" + singer;
                    $http.get(singer_img_url, {
                        cache: true,
                        headers: { 'apikey': '38d2a4547e526791f6abe0a443cf0962' }
                    }).success(function(req) {
                        return singer_img = req.data.image;
                    });
                    let url = "http://apis.baidu.com/geekery/music/playinfo?hash=" + hash;
                    $http.get(url, {
                        cache: true,
                        headers: { 'apikey': '38d2a4547e526791f6abe0a443cf0962' }
                    }).success(function(req) {
                        let musicdata = {
                            title: req.data.fileName,
                            author: singer,
                            url: req.data.url,
                            pic: singer_img
                        };
                        let aplayerss = document.getElementById('aplayer');

                        let ap1 = new APlayer({
                            element: aplayerss,
                            narrow: false,
                            autoplay: true,
                            showlrc: false,
                            mutex: true,
                            theme: '#e6d0b2',
                            preload: 'metadata',
                            music: {
                                title: musicdata.title,
                                author: musicdata.author,
                                url: musicdata.url,
                                pic: musicdata.pic
                            }
                        });
                        ap1.init();
                    })
                }
            }
        });
})();
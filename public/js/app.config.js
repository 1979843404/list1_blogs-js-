angular
    .module("app.config", [])
    .constant('header_List', [{
        'name': '博客',
        'url': '#/index'
    }, {
        'name': '关于我们',
        'url': '#/about'
    }, {
        'name': '下载',
        'url': '#/download'
    }, {
        'name': '留言',
        'url': '#/message'
    }]);
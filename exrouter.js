//Express 路由配置
var account = require('./routes/account');


module.exports = function(app) {
    app.get('/', function(req, res) {
            res.render('index', {});
        })
        // app.get('login', function(req, res) {
        //     res.render('login');
        // })
        // app.get('register', function(req, res) {
        //     res.render('register');
        // })
    app.post('/account/loginPost', account.login);

    app.post('/account/loginOut', account.loginOut);
}
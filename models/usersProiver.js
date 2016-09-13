var mongoose = require('mongoose'),
    Users = mongoose.model('Users');


exports.UserLogin = function(req, res) {
    let data = req.body;
    console.log(req.session.name);
    if (req.session.name == data.username) {
        return res.json({
            rel: '0',
            msg: '该账户已登录，请勿重复登录'
        });
    }
    if (data.username == "123" && data.password == "123") {
        console.log("页面测试");
        return res.json(data);
    } else if (data.username == "123456" && data.password == "123456") {
        req.session.sign = true;
        req.session.name = data.username;
        return res.json(data);
    } else {
        return res.json({
            rel: '0',
            msg: '该账户不存在或者密码错误'
        });
    }
}
exports.loginOut = function(req, res) {
    req.session.destroy();
    return res.json({
        rel: '1',
        msg: '登出成功'
    });
}
exports.login = function(req, res) {
     console.log("进入请求");
        console.log(req.session.user);
        if (req.session.user) {
            console.log("有session");
            res.render('/', {
                // username: req.session.username
            })
        } else {
            console.log("无session");
            // req.session.msg = '需要您登录账号才能进入首页';
            res.redirect('#/login');
        }
};
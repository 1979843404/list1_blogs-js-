var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/zjx1');
var app = express();

mongoose.connection.on('error', function(error) {
    console.log('数据库连接失败' + error);
});
mongoose.connection.once('open', function() {
    console.log('连接数据库成功!');
});
require('./models/blogs_model.js');

app.use(session({
    secret: 'zjx', //secret的值建议使用随机字符串
    cookie: { maxAge: 60 * 1000 * 30 } // 过期时间（毫秒）
}));

// view engine setup
app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('./exrouter')(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
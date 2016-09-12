function alert_layer(msg) {
    if (msg == undefined || msg == "" || msg == null) {
        return;
    }
    layer.open({
        type: 1,
        area: ['320px', '200px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:20px;">提示信息：' + msg + '\<\/div>'
    });
};
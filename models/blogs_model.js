var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//用户名
//密码
//头部图片
//角色
var UserSchema = new Schema({
    name: String,
    password: String,
    headUrl: String,
    role: Number
});
mongoose.model('Users', UserSchema);
// var BillingSchema = new Schema({
//     cardtype: { type: String, enum: ['Visa', 'MasterCard', 'Amex'] },
//     name: String,
//     number: String,
//     expiremonth: Number,
//     expireyear: Number,
//     address: [AddressSchema]
// }, { _id: false });
// mongoose.model('Billing', BillingSchema);
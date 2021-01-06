const { Article } = require('../../model/article');
const { User } = require('../../model/user');
//导入分页模块
const pagination = require('mongoose-sex-page');
const { request } = require('express');

module.exports = async(req, res) => {
    //从数据库中查询数据,并且按照发布先后逆序输出
    let result = await Article.find().populate('author').sort({_id:-1}).lean();

    // res.send('欢迎来到博客首页');
    //渲染模板并传递数据
    res.render('home/default.art', {
        result: result
    });
}
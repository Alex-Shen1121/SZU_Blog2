const { Article } = require('../../model/article');

module.exports = async (req, res, next) => {
    //接收客户端传递过来的请求参数
    const { cover,title,publishDate,content } = req.body;

    const id = req.query.id;
    console.log(id);
    let article = await Article.findOne({ _id: id });

    await Article.updateOne({ _id: id }, {
        cover:cover,
        title:title,
        publishDate:publishDate,
        content:content
    });
    //将页面重定向到用户列表页面
    res.redirect('/admin/article');

    // const isValid = await bcrypt.compare(password, user.password);
    // //密码比对成功
    // if (isValid) {
    //     // res.send('密码比对成功');
    //     await User.updateOne({ _id: id }, {
    //         username: username,
    //         email: email,
    //         role: role,
    //         state: state
    //     });
    //     //将页面重定向到用户列表页面
    //     res.redirect('/admin/user');
    // } else {
    //     // 密码比对失败
    //     let obj = { path: '/admin/user-edit', message: '密码比对失败,不能进行用户信息的修改', id: id }
    //     next(JSON.stringify(obj));
    // }
    // // res.send(user);
}
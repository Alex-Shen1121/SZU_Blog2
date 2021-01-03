//将文章集合的构造函数导入到当前文件中
const {Article}=require('../../model/article');
module.exports= async(req, res) => {
       var id=req.app.locals.userInfo.id;
        //标识 标识当前访问的是文章管理页面
        req.app.locals.currentLink='article';
        //查询所有文章数据 
        let articles;
        if(req.app.locals.userInfo.role=='normal')
             articles=await Article.find({"author":id}).populate('author').lean();
        else  articles=await Article.find().populate('author').lean();
        // res.send(articles);
        //渲染文章模板
        res.render('admin/article.art',{
            articles:articles
        });
}
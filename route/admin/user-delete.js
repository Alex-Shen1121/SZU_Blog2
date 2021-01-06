
const {Article}=require('../../model/article');
const {Comment}=require('../../model/comment');
const {User}=require('../../model/user');
module.exports=async (req,res) => {

    //根据id删除用户
    await User.findOneAndDelete({_id:req.query.id});
    //根据id删除文章
    await Article.deleteMany({author:req.query.id});
        //删除文章的评论
    await Comment.deleteMany({uid:req.query.id});
    res.redirect('/admin/user');
}
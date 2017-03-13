var express = require('express');
// router就是路由模块
var router = express.Router();

var md = require('markdown').markdown;

/* GET home page. */
router.get('/', function(req, res, next) {
  //  //查询数据库 获取文章列表
  // Model('Article').find({}).populate('user')
  //     .exec(function (err,articles) {
  //
  //         articles.forEach(function (a) {
  //
  //             //将markdown语法的文章内容转换成html格式
  //             a.content =  md.toHTML(a.content);
  //         })
  //
  //       res.render('index', { title: '我的博客',articles:articles });
  //     });

    //切换到首页时,要清空session中的搜索关键字
    req.session.keyword=null;
    res.redirect("/articles/list/1/2");

});

module.exports = router;

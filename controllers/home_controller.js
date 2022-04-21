const { path } = require('express/lib/application');
const Post = require('../models/post');

module.exports.home = function(req, res){
   // console.log(req.cookies);
    
//without populating
    //Post.find({}, function(err,posts){
     //   return res.render('home', {
     //       title: "Codeial | Home",
    //        posts: posts
      //  });
  //  });

    //fetching user details for displaying it below post(populating the user)
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err,posts){
        return res.render('home', {
            title: " | Home",
            posts: posts
        });
    })
}

// module.exports.actionName = function(req, res){}
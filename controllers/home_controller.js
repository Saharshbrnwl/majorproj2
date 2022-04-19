const Post = require('../models/post');

module.exports.home = function(req, res){
   // console.log(req.cookies);
    
//without puopulating
    //Post.find({}, function(err,posts){
     //   return res.render('home', {
     //       title: "Codeial | Home",
    //        posts: posts
      //  });
  //  });

    //fetching user details for displaying it below post(populating the user)
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts
        });
    })
}

// module.exports.actionName = function(req, res){}
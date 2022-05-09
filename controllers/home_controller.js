const { path } = require('express/lib/application');
const Post = require('../models/post');
const User = require('../models/user');
const USer = require('../models/user');

module.exports.home = async function(req, res){
   // console.log(req.cookies);
    
//without populating
    //Post.find({}, function(err,posts){
     //   return res.render('home', {
     //       title: "Codeial | Home",
    //        posts: posts
      //  });
  //  });

    
    try{
        //fetching user details for displaying it below post(populating the user)
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
       
        let users = await User.find({});
    
        return res.render('home', {
            title: " | Home",
            posts: posts,
            all_users: users
        });

    }catch(err){
        console.log('Error',err);
        return;
    }
   
       
    
  
}

// module.exports.actionName = function(req, res){}
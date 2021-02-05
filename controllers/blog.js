var express = require('express');
var router = express.Router();

var Blog = require('../models/blog');

router.get('/getBlog/:id', function(req,res,next){
    Blog.findOne({_id: req.params.id})
        .exec(function(err, blog){
            if(err) return next(err)
            res.json(blog)
    })
})

router.get('/getBlogs', function(req,res,next){
    Blog.find()
        .sort('-date')
        .exec(function(err, blogs){
            if(err) next(err)
            res.json(blogs);
        })
})

router.post('/newBlog', function(req,res){
    var blog = new Blog({
        title: req.body.title,
        content: req.body.content
    });
    blog.save(function(err,blog){
        if(err) return next(err);
        res.json(201, blog);
    })
})

router.delete('/deleteBlog/:id', function(req,res,next){
    Blog.deleteOne({_id: req.params.id}, function(err){
        if(err) return next(err);
        res.json(200);
    })
})

router.post('/updateBlog/:id/update', function(req,res,next){
    Blog.findByIdAndUpdate(req.params.id, req.body, {upsert: true}, function(err, song){
        if(err) return next(err);
        res.json(201, song);
    })
})

module.exports = router;
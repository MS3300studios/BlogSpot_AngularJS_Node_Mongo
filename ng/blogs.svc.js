//blog service
angular.module("app").service('blogSvc', function($http){
    this.createBlog = function(blog){
        return $http.post('/newBlog', blog)
    }
    this.getBlogs = function(){
        return $http.get('/getBlogs')
    }
    this.deleteBlog = function(id){
        return $http.delete('/deleteBlog/'+ id)
    }
    this.updateBlog = function(blog){
        return $http.post('/updateBlog/'+ blog.id + '/update', blog)
    }
    this.getBlog = function(id){
        return $http.get('/getBlog/'+ id)
    }
})
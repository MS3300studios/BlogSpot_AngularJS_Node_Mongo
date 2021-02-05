//dashboard controller
angular.module("app").controller('dashboardCtrl', function($http, $scope, blogSvc, $interval, $routeParams){
    var local_id = null; //id of the post to be edited

    $scope.getBlogs = function(){
        blogSvc.getBlogs()
            .success(function(blogs){
                $scope.blogs = blogs;
            })
    }   

    $scope.getBlog = function(id){
        id = $routeParams.id
        blogSvc.getBlog(id)
            .success(function(blog){
                $scope.blog = blog;
            })
    }
    //lightbox function
    $scope.changeLightbox = function(lightboxOn, action, id){
        if(lightboxOn == true){
            if(action=='send'){
                $scope.title = "";
                $scope.content = "";

                $scope.action = 'send';
                $scope.message = 'blog saved';
            }
            else if(action=='edit'){
                blogSvc.getBlog(id)
                    .success(function(blog){
                        $scope.title = blog.title;
                        $scope.content = blog.content;

                        local_id = id;
                        $scope.action = 'edit';
                        $scope.message = 'edition successful';
                    })
            }
            $scope.lightbox = {'visibility': 'visible'}
        }
        else if(lightboxOn == false){
            $scope.lightbox = {'visibility': 'hidden'}
        }
    }
    //flash function
    var flashBox = angular.element(document.getElementById('flashBox'))
    var flash = function(msg){
        $scope.flashMessage = msg;

        flashBox.removeClass('notVisible');
        flashBox.addClass('show');

        $interval(function(){
            flashBox.removeClass('show')
            flashBox.addClass('notVisible')
        }, 1000, 1)
    }

    $scope.form = function(action, message){
        if(action == 'edit')
        {
            //local_id is taken from the $scope defined above and inserted here
            edit(local_id, message);
        }
        else if(action == 'send')
        {
            sendBlog(message);
        }
    }
    //editing blogs
    var edit = function(id, msg){
      if($scope.title.length<=18){
        blogSvc.updateBlog({
            id: id,
            title: $scope.title,
            content: $scope.content
        })
        $scope.changeLightbox(false);
        
        $scope.title = "";
        $scope.content = "";
        
        flash(msg);
        blogSvc.getBlogs()
            .success(function(blogs)
            {
                $scope.blogs = blogs;
            })
      }
      else{
        var n = $scope.title.length - 18;
        var txt = 'delete '+n+' characters from the title';
        flash(txt)
      }
    }

    //sending blog to server
    var sendBlog = function(msg){
        $scope.lightbox = {'visibility': 'hidden'}
                
        blogSvc.createBlog({
            title: $scope.title,
            content: $scope.content
            }).success(function(){
            $scope.title = "";
            $scope.content = "";
                    
            flash(msg);

            blogSvc.getBlogs()
                .success(function(blogs){
                    $scope.blogs = blogs;
                })
            })
    }

    //deleting blogs
    $scope.delete = function(id, msg){
        blogSvc.deleteBlog(id).success(function(){
        
            flash(msg);

            blogSvc.getBlogs()
            .success(function(blogs){
                $scope.blogs = blogs;
            })
        })
    }


})
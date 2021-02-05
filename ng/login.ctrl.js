angular.module("app").controller('loginCtrl', function($scope, $location, userSvc){
    $scope.login = function(email, password){
        userSvc.login(email, password)
        .then(function(response){
            $scope.$emit('login', response.data)
            $location.path('/')
        })
    }
    $scope.submitClicked = function(){
        // console.log('incorrect password or email');
    }
})




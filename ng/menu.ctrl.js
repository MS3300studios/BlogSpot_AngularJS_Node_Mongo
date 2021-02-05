angular.module("app").controller('menuCtrl', function($scope, $location, userSvc){
    $scope.getUsername = function(){
        userSvc.getUser().then(function(response){
            $scope.username = response.data.name+" "+response.data.surname;
        })
    }
    

    $scope.logout = function(){
        userSvc.logOut();
        $scope.$emit('logout');
        $location.path('/#/gate');
        console.log('logged out');
    }
})

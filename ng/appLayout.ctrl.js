angular.module("app")
  .controller("ApplicationCtrl", function ($scope, $window, $location){

    $scope.$on('login', function(_, user){
      $scope.currentUser = user;
    })
    
    $scope.$on('logout', function(){
      $scope.currentUser = undefined;
    })


    $scope.checkToken = function(){  
      if(!$window.sessionStorage["jwt"]||$window.sessionStorage["jwt"]==""){
        $location.path('/gate');
      } 
      else if($window.sessionStorage["jwt"]!=""){
        $scope.currentUser = "user"
      }
    } 
  });

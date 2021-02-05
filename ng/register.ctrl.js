angular.module("app").controller('registerCtrl', function($scope, $location, userSvc){
    $scope.register = function(name,surname,email,password){
        userSvc.register({
            name: name,
            surname: surname,
            email: email,
            password: password
        }).then(function(response){
            if(response.status == 201){
                console.log('registered successfully');
                $location.path('/') //redirect to dashboard
            }
        })
    }
})


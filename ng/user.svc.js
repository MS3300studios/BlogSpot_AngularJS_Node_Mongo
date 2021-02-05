//users (register/login) service
angular.module("app").service('userSvc', function($http, $window, $location){
    var svc = this;

    svc.register = function(user){
        return $http.post('/user', user)
        .then(function(){
            svc.login({email: user.email, password: user.password})
        })
    }

    svc.login = function(email, password){ 
        return $http.post('/session', {email: email, password: password})
            .then(function(token){
                $window.sessionStorage["jwt"] = token.data;
                $http.defaults.headers.common["X-Auth"] = $window.sessionStorage["jwt"];
                return svc.getUser();
            })
    }

    svc.getUser = function(){
        return $http.get('/user')
    }

    svc.setToken = function(){
        if($window.sessionStorage['jwt'])  $http.defaults.headers.common["X-Auth"] = $window.sessionStorage["jwt"]
        return svc.getUser();
    }

    svc.logOut = function(){
        $window.sessionStorage['jwt'] = "";
        $http.defaults.headers.common["X-Auth"] = undefined;
    }
})
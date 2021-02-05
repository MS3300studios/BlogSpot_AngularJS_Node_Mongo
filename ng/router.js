angular.module("app").config(function($routeProvider){
    $routeProvider
        .when('/', {controller: 'dashboardCtrl', templateUrl: '/partials/dashboard.html'})
        .when('/show/:id', {controller: 'dashboardCtrl', templateUrl: '/partials/show.html'})
        .when('/register', {controller: 'registerCtrl', templateUrl: '/partials/register.html'})
        .when('/login', {controller: 'loginCtrl', templateUrl: '/partials/login.html'})
        .when('/gate', {controller: '', templateUrl: '/layouts/gate.html'})
});
angular.module("app").controller('showCtrl', function($scope, $interval){
    $scope.showUpdate = function(){
        $interval(function(){
            location.reload();
        }, 2000, 1)
    }
    $scope.top = function(){
        var btnTop = angular.element(document.getElementById('btnTop'))
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        btnTop.removeClass('show');
        btnTop.addClass('notVisible');
    }
    window.onscroll = function(){
        var btnTop = angular.element(document.getElementById('btnTop'))
        var scrollTab = angular.element(document.documentElement.scrollTop)
        var scrollHeight = scrollTab[0];
        if(scrollHeight > 200){
            btnTop.removeClass('notVisible');
            btnTop.addClass('show');
        }
        else if(scrollHeight < 200){
            btnTop.removeClass('show');
            btnTop.addClass('notVisible');
        }
    };
})
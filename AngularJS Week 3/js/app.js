/**
 * Created by Josh on 5/8/15.
 */

/*
angular.module("myApp" , ["ngRoute"])

    .config(function($routeProvider){

        $routeProvider.when('/view1', {
            templateUrl : "view1.html",
            controller : "view1Controller"
        }).when("/view2" ,{
            templateUrl : "view2.html",
            controller : "view2Controller"
        }).when("/view3/:paramTest",
            {
                templateUrl : "view3.html",
                controller : "view3Controller"
            })
            .otherwise({
                redirectTo : "/view1"
            });
    })

    .controller("view1Controller", function($scope){
        $scope.test = "Hello World 1";
    })
    .controller("view2Controller", function($scope){
        $scope.test = "Hello World 2";
    })
    .controller("view3Controller", function($scope, $routeParams){
        $scope.test = "Hello World 3";
        $scope.otherTest = $routeParams.paramTest;
    })
    .controller("MyAppController", function($scope){
        $scope.test = "Hello World ";
    });
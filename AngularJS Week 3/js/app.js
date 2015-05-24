/**
 * Created by Josh on 5/8/15.
 */
var app = angular.module('myApp', []);
app.controller('DBController', function($scope) {

    $scope.userName;

    $scope.nameArray= ['Janice','Christine','Kristel'];

    $scope.addName= function(){
        $scope.nameArray.push($scope.userName);

        $scope.userName='';
    };

    //Remove Name
    $scope.removeName = function(name){
        var idx = $scope.nameArray.indexOf(name);
        $scope.nameArray.splice(idx,1);
    }

});
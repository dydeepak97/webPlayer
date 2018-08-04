(function(){

'use strict';

console.log("Main Harmony Module Started");

angular.module('harmony', ['ui.router', 'ApiHandler'])
.controller('testCtr', testCtr);

testCtr.$inject = ['$scope'];

function testCtr($scope){
  $scope.num=30;
}

})();

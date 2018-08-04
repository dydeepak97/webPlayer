(function(){

'use strict';

console.log("Harmony Module Created");

angular.module('harmony', ['ui.router', 'ApiHandler'])
.controller('testController', testController);


testController.$inject = ['$scope'];

function testController($scope){
  $scope.name= 2;
}





// .controller('youtubeTestController', youtubeTestcontroller);
//
// youtubeTestcontroller.$inject = ['$scope'];
//
// function youtubeTestcontroller($scope){
//   console.log("controller Lonch");
//   var list = this;
//
//   list.items = videoSearchService.getSearchData();
//
//   console.log("list is here");
//   console.log(list.items);
//
//
// }




})();

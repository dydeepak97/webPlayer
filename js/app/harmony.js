(function(){

'use strict';

console.log("Harmony Module Created");

angular.module('harmony', ['ui.router'])
.controller('youtubeTestController', youtubeTestcontroller);

youtubeTestcontroller.$inject = ['$scope','videoSearchService'];

function youtubeTestcontroller($scope,videoSearchService){
  console.log("controller Lonch");
  var list = this;

  list.items = videoSearchService.addItem();

  console.log("list is here");
  console.log(list.items);


}




})();

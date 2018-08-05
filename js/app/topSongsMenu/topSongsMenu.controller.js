(function(){

'use strict';

angular.module('ApiHandler')
.controller('topSongsController', topSongsController);

topSongsController.$inject = ['videoList', 'youtubeService' , '$timeout'];

function topSongsController(videoList, youtubeService, $timeout){
  var $ctrl = this;
  $ctrl.searchTerm = "song";

  $ctrl.videoList = videoList;

    $ctrl.top5 = {};

  $ctrl.getYoutubeSearch = function(searchTerm){
    console.log("Search button clicked");
    $ctrl.videoList = youtubeService.getSearchData(searchTerm);


    console.log("Response after btn", $ctrl.videoList);

    for (var i = 1; i < 5; i++) {
     $ctrl.top5[i] = $ctrl.videoList[i].snippet;
    }
  };



  console.log("response:" , $ctrl.videoList[3]);

  for (var i = 1; i < 5; i++) {
   $ctrl.top5[i] = $ctrl.videoList[i].snippet;
  }

  console.log("Top5:" , $ctrl.top5);
}


})();

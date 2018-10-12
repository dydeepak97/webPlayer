(function(){

'use strict';

angular.module('ApiHandler')
.controller('topSongsController', topSongsController);

topSongsController.$inject = ['videoList', 'youtubeService' , '$timeout'];

function topSongsController(videoList, youtubeService, $timeout){
  var $ctrl = this;
  $ctrl.searchTerm = "song";

  console.log("After Route", videoList.data);

  $ctrl.videoList = videoList.data.items;
  $ctrl.top5 = {};

  $ctrl.getYoutubeSearch = function(searchTerm){
    console.log("Search button clicked");
    $ctrl.response = youtubeService.getSearchData(searchTerm);

    $ctrl.response.then(function(result){
          console.log(result.data.items[0].snippet.channelTitle);
          $ctrl.videoList = result.data.items;
          console.log("Response after btn", $ctrl.videoList);
          for (var i = 0; i < 5; i++) {
           $ctrl.top5[i] = $ctrl.videoList[i];;
          }
      }).catch(function(error){
        return "ERROR";
      });
  };

  console.log("response:" , $ctrl.videoList[3]);

  for (var i = 0; i < 5; i++) {
   $ctrl.top5[i] = $ctrl.videoList[i];
  }

  console.log("Top5:" , $ctrl.top5);
}


})();

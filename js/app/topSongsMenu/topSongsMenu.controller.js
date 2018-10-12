(function(){

'use strict';

angular.module('ApiHandler')
.controller('topSongsController', topSongsController);

topSongsController.$inject = ['videoList', 'youtubeService', 'lastFmService', '$timeout'];

function topSongsController(videoList, youtubeService, lastFmService, $timeout){
  var $ctrl = this;
  $ctrl.searchTerm = "song";

  console.log("After Route", videoList.data);

  $ctrl.videoList = videoList.data.items;
  $ctrl.top5 = {};

  $ctrl.getYoutubeSearch = function(searchTerm){
    console.log("Search button clicked");
    let response = youtubeService.getSearchData(searchTerm);

    //FOR TEST, Remove immdeiately
    console.log("Youtube JSON:" , response);
      

    response.then(function(result){
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

  $ctrl.topTracks = [];

  //Last.fm Service call
  $ctrl.getLastFmChartTop = function(){
    console.log("Last.fm Button Clicked");
    let response = lastFmService.chart.getTopTracks();

    response.then(function(result){
        console.log("LastFm Then");

        for(let i=0; i < 10; ++i ){
          let temp = {};
          temp.artist = result.data.tracks.track[i].artist.name;
          temp.song = result.data.tracks.track[i].name;
          temp.image = result.data.tracks.track[i].image[2]["#text"];
          $ctrl.topTracks.push(temp);
           
        }
        console.log("Top Tracks:" , $ctrl.topTracks[3]);
      })
    .catch(function(err){
        return "ERROR :(";
    });
    
  };

}


})();

(function(){

'use strict';

console.log("Harmony Module Created");

angular.module('harmony')
.service('videoSearchService', videoSearchService)
.constant('ApiBasePath', "https://www.googleapis.com/youtube/v3/search");

videoSearchService.$inject = ['$http','$q','ApiBasePath'];
function videoSearchService($http, $q, ApiBasePath){
  console.log("service Lonch");
  var service = this;

  service.addItem = function(){

      var response = $http({
        method: "GET",
        url:ApiBasePath,
        params:{
            part: 'snippet',
            key: 'AIzaSyAVqoqkJ01svDnPnEXpPPMisrwOZhiijqY',
            q: 'RainbowSix'
        }
      });
      return response.then(function(result){
          console.log(result.data.items[0].snippet.channelTitle);
          service.allItems = result.data.items;

          // service.searchList=[];
          //
          // for( var i=0 ; i<service.allItems.length ; i++){
          //   if(service.allItems[i].description.indexOf(searchTerm) != -1){
          //     service.searchList.push(service.allItems[i]);
          //   }
          // }

          return result.data.items;
      }).catch(function(error){
        return "ERROR";
      });;
    }

}

})();

(function(){

'use strict';

console.log("Youtube ServiceCreated");

angular.module('ApiHandler')
.service('youtubeService', youtubeService)
.constant('ApiBasePath', "https://www.googleapis.com/youtube/v3/search")
.constant('ApiKey', "AIzaSyAVqoqkJ01svDnPnEXpPPMisrwOZhiijqY");

youtubeService.$inject = ['$http' , 'ApiBasePath', 'ApiKey'];
function youtubeService($http, ApiBasePath, ApiKey){
  console.log("service Lonch");
  var service = this;

  service.getSearchData = function(searchTerm){

      console.log("Youtube Service Called");

      var response = $http({
        method: "GET",
        url:ApiBasePath,
        params:{
            part: 'snippet',
            key: ApiKey,
            q: searchTerm,
            kind: 'video'
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

(function(){

'use strict';

angular.module('ApiHandler')
.controller('topSongsController', topSongsController);

topSongsController.$inject = ['videoList'];

function topSongsController(videoList){
  var $ctrl = this;
  $ctrl.videoList = videoList;
}


})();
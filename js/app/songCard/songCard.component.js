(function(){

'use strict';

console.log("songCard Componet created");

angular.module('ApiHandler')
.component('songCard', {
  templateUrl:'js/app/songCard/songCard.html',
  bindings: {
    song: '<',
    image: '<'
  }
});

})();

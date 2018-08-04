(function(){

'use strict'


console.log("Router Started");

angular.module('harmony')
.config(RoutesConfig);

RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];

function RoutesConfig( $stateProvider, $urlRouterProvider ){

  //default
  $urlRouterProvider.otherwise('/');

  console.log("RoutesConfig Working");


  //UI States
  $stateProvider
    .state('topSongsMenu', {
      url:'/topSongsMenu',
      templateUrl: 'js/app/topSongsMenu/topSongsMenu.html',
      controller:'topSongsController',
      controllerAs: 'topSongsMenu',
      resolve: {
        videoList : ['videoSearchService', function(videoSearchService){
          return videoSearchService.getSearchData();
        }]
      }
    })
    .state('songList', {
      ulr:'/songList',
      templateUrl: 'ht/songList.html',
      controller: 'listController',
        controllerAs: 'list',
      //resolve:
    })
    .state('player', {
      ulr:'/player',
      templateUrl: 'ht/player.html',
      controller: 'playerController',
        controllerAs: 'player',
      //resolve:
    });

}

})();

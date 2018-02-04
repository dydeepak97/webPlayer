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
    .state('songList', {
      ulr:'/songList',
      templateUrl: 'ht/songList.html'
      controller: 'listController as list'
      //resolve:
    })
    .state('player', {
      ulr:'/player',
      templateUrl: 'ht/player.html',
      controller: 'playerController as player'
      //resolve:
    })

}

})();

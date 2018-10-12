(function(){

'use strict';

console.log("LastFm Service started");

angular.module('ApiHandler')
    .service('lastFmService', lastFmService)
    .constant('LastFmApiBasePath', "http://ws.audioscrobbler.com/2.0/")
    .constant('LastFmApiKey', "5b8cd0e7aef46e119b6cb12c15c39616");

lastFmService.$inject = ['$http', 'LastFmApiBasePath', 'LastFmApiKey'];

function lastFmService( $http, LastFmApiBasePath, LastFmApiKey ){
    console.log("LastFm Service Launched");
    var service = this;

    service.limit = 10;
    service.chart;

    service.chart.getTopTracks = function(){
        console.log("Charts.TopTracks API called");

        var response = $http({
            method: 'GET',
            url: LastFmApiBasePath,
            params: {
                method: 'chart.gettoptracks',
                api_key: LastFmApiKey,
                limit: service.limit,
                format: 'json'
            }
        });

        return response.then(function(result){
            console.log("LastFm Then");
            service.chart.topList = [];

        })
        .catch(function(err){
            return "ERROR :(";
        })
    }
    
}

})();
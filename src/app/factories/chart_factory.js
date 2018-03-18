(function() {
  'use strict';

  angular
      .module('solarDashboardUi')
      .factory('chartsFactory', ['$q', '$http',   function($q, $http) {

    var services = {

      getStation : getStation,
      getRainyDayChart: getRainyDayChart


    }

        var base_address = "http://localhost:8080";


    function success(data) {





            return $q.resolve(data.data);
        }

        function error(error) {

            console.log(error);
            console.log("There was an error");


            return $q.reject(error);
        }


        function getStation(place)
        {
          var endpoint_url = base_address +  "/nearest_station?place=" + place;
          return $http.get(endpoint_url).then(success, error);
        }

        function getRainyDayChart(station)
        {
          var endpoint_url = base_address + "/rainy_day_graph?station=" + station;
          return $http.get(endpoint_url).then(success, error);
        }


    return services;
  }]);
     
  

})();
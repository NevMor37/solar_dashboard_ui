(function() {
  'use strict';

  angular
    .module('solarDashboardUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr , chartsFactory) {
    var vm = this;

    vm.place = "";
    vm.station = "";

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1521337743139;
    vm.showToastr = showToastr;

    vm.labels = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  vm.series = ['Rainy days %'];

  vm.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];

vm.series2 = ['a'];

    vm.labels2 =["North", "East", "South" , "West"];


           

  vm.data2 = [
    [1719074.8373413086, 4816119.4105468756, 4526222.7853698758, 4509260.5466613779]
  ];


    vm.place_change = place_change;


    activate();

    function place_change()
    {
      if(vm.place.length > 4)
      {
        chartsFactory.getStation(vm.place).then(station_response);
      }
    }

    function station_response(data)
    {
      console.log(data);

      vm.station = data.station;
      chartsFactory.getRainyDayChart(vm.station).then(update_rainy_chart);
    }

    function update_rainy_chart(data)
    {
      console.log("update rainy chart");
      console.log(data);
      vm.data[0] = data;
    }

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();

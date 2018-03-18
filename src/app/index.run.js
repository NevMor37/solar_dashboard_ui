(function() {
  'use strict';

  angular
    .module('solarDashboardUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

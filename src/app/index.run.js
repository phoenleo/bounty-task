(function() {
  'use strict';

  angular
    .module('bountyTask')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

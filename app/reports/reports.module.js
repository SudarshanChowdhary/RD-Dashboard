var angular = require('angular');

module.exports = angular
    .module('rt.reports', [])
    .config(require('./reports.route'))
    .controller('ReportsController', require('./reports.controller'))
    .controller('ReportsHomeController', require('./reports-home.controller'))
    .controller('ReportsBHUController', require('./reports-bhu.controller'))
    .controller('BHUIHUController', require('./bhu-ihu.controller'))
    .controller('CurrentStatusController', require('./current-status.controller'))
    .controller('WarrantyIssuesController', require('./warranty-issues.controller'))
    .factory('reportservice', require('./reports.service'));
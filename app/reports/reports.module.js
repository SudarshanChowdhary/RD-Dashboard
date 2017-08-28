var angular = require('angular');

module.exports = angular
    .module('rt.reports', [])
    .config(require('./reports.route'))
    .controller('ReportsController', require('./reports.controller'))
    .factory('reportservice', require('./reports.service'));
ReportsRoute.$inject = ['$stateProvider'];

function ReportsRoute($stateProvider) {
    $stateProvider.state('root.reports', {
        url: '/reports',
        views: {
            '@root.reports': {
                templateUrl: 'app/reports/templates/reports.html',
                controller: 'ReportsController',
                controllerAs: 'vmrep'
            }
        },
        resolve: {
                reportsList: require('./reports-list.resolve')
                // reportsList: ["$q", "$timeout","$http", function ($q, $timeout, $http) {
                //    return $http.get("reports/list").then(function(resp){ return {status:true , reportsList: resp} }, function(error){ return {status:false, reportsList: error} })
                // }]
            },
        ncyBreadcrumb: {
            label: 'Request Report'
        }
    }).state('root.bhureports', {
        url: '/bhureports',
        views: {
            '@root.bhureports': {
                templateUrl: 'app/reports/templates/reports-bhu-report.html',
                controller: 'BhuReportController',
                controllerAs: 'bhureport'
            }
        },
        ncyBreadcrumb: {
            label: 'BHU Report'
        }
    }).state('root.reporthome', {
        url: '/reporthome',
        views: {
            '@root': {
                templateUrl: 'app/reports/templates/reports-home.html',
                controller: 'ReportsController',
                controllerAs: 'vmrep'
            }
        },
        resolve: {
                reportsList: require('./reports-list.resolve')
                // reportsList: ["$q", "$timeout","$http", function ($q, $timeout, $http) {
                //    return $http.get("reports/list").then(function(resp){ return {status:true , reportsList: resp} }, function(error){ return {status:false, reportsList: error} })
                // }]
            },
        ncyBreadcrumb: {
            label: 'Reports'
        }
    });
}
module.exports = ReportsRoute;
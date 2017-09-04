ReportsRoute.$inject = ['$stateProvider'];

function ReportsRoute($stateProvider) {
    $stateProvider
    .state('root.reporthome', {
        url: '/reporthome',
        views: {
            '@root': {
                templateUrl: 'app/reports/templates/reports-home.html',
                controller: 'ReportsHomeController',
                controllerAs: "vmrephome"
            }
        }
    })
    .state('root.reportbhu', {
        url: '/reportbhu',
        views: {
            '@root': {
                templateUrl: 'app/reports/templates/reports-bhu.html',
                controller: 'ReportsBHUController',
                controllerAs: "vmrepbhu"
            }
        }
    })
    .state('root.bhuihu', {
        url: '/bhuihu',
        views: {
            '@root': {
                templateUrl: 'app/reports/templates/bhu-ihu.html',
                controller: 'BHUIHUController',
                controllerAs: "vmbhuihu"
            }
        }
    })
    .state('root.currentstatus', {
        url: '/currentstatus',
        views: {
            '@root': {
                templateUrl: 'app/reports/templates/current-status.html',
                controller: 'CurrentStatusController',
                controllerAs: "vmcurrentstatus"
            }
        }
    })    
    .state('root.warrantyissues', {
        url: '/warrantyissues',
        views: {
            '@root': {
                templateUrl: 'app/reports/templates/warranty-issues.html',
                controller: 'WarrantyIssuesController',
                controllerAs: "vmwarrantyissues"
            }
        }
    })
    .state('root.reports', {
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
    });
}
module.exports = ReportsRoute;
ReportsService.$inject = ['$http', '$q', 'spinnerService'];

function ReportsService($http, $q,spinnerService){
	var reportsService = {
		getReportsList: getReportsList,
        getReportsUrl: getReportsUrl,

        getBhuReportData: getBhuReportData,
        getBhuReportFilterDetailsByYear: getBhuReportFilterDetailsByYear,
        getBhuReportFilterDetailsByQuarter: getBhuReportFilterDetailsByQuarter,
        exportToExcelByYear: exportToExcelByYear,
        exportToExcelByQuarter: exportToExcelByQuarter,
        exportToExcelCurrentQuarter: exportToExcelCurrentQuarter
	};

	return reportsService;

	function getReportsList() {
        var def = $q.defer();
         spinnerService.show();
          //  $http.get("reports/list")
           $http.get("https://rtdashboardp.rno.apple.com:9012/reports/list?callback=angular.callbacks._0")
                .success(function(data) {
                    def.resolve(data);
                    spinnerService.hide();
                })
                .error(function() {
                    def.reject("Failed to get data");
                });
            return def.promise;
    }

    function getReportsUrl(rId) {
        return ("reports/download/" + rId);
    }
    
    function getBhuReportData() {
        var def = $q.defer();
        spinnerService.show();
        $http.get("bhureports/details?start-index=1").success(function(data) {
            def.resolve(data);
            spinnerService.hide();
        }).error(function() {
            def.reject("Failed to get data");
        });
        return def.promise;
    }

    function getBhuReportFilterDetailsByYear(year, startIndex){
        var def = $q.defer();
         spinnerService.show();
            $http.get("bhureports/details/"+year+"?start-index="+startIndex)
                .success(function(data) {
                    def.resolve(data);
                    spinnerService.hide();
                })
                .error(function() {
                    def.reject("Failed to get data");
                });
            return def.promise;
    }

    function getBhuReportFilterDetailsByQuarter(year,quar, startIndex){
        var def = $q.defer();
         spinnerService.show();
            $http.get("bhureports/details/"+year+"/"+quar+"?start-index="+startIndex)
                .success(function(data) {
                    def.resolve(data);
                    spinnerService.hide();
                })
                .error(function() {
                    def.reject("Failed to get data");
                });
            return def.promise;
    }

    function exportToExcelByYear(y){
            return "bhureports/download/"+y;
    }
    function exportToExcelByQuarter(y, q){
        return "bhureports/download/"+y+"/"+q;        
    }
    function exportToExcelCurrentQuarter(){
            return "bhureports/download/";
    }

}

module.exports = ReportsService;
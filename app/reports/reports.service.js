ReportsService.$inject = ['$http', '$q', 'spinnerService'];

function ReportsService($http, $q,spinnerService){
	var reportsService = {
		getReportsList: getReportsList,
        getReportsUrl: getReportsUrl
	};

	return reportsService;

	function getReportsList() {
        var def = $q.defer();
         spinnerService.show();
            $http.get("reports/list")
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

}

module.exports = ReportsService;


var workerdetailsApp = angular.module('crowdsource.workerdetails.controllers', ['ngGrid']);

workerdetailsApp.controller('WorkerdetailsController', function($scope, $log, $http) {	
    	$scope.workerdetails = [];
    	$http.get("/api/Worker/?format=json").success(function(data,config) {
        	$scope.workerdetails = data
        	console.log($scope.workerdetails )
        }).error(function(data, status, headers, config) {
               console.log(status)
        });
    	
    $scope.gridOptions = {
    multiSelect: false,
    enablePinning: true,
    data:'workerdetails',
    columnDefs: [   
                    { field: "id", displayName: 'Requester id', width:220,pinned: true },
                    { field:"gender",displayName: 'Gender', width:140 },
                    { field: "birthday", displayName:'Birthday', width:100 },
                    { field: "verified", displayName: 'Verified', width: 100 },
                    { field: "picture", displayName: 'Picture', width: 150 },
                    { field: "user", displayName: 'User',  width: 40 }
                    ]
    };	
}) 



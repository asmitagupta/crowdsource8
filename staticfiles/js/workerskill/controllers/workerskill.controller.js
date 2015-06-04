
var workerskillApp = angular.module('crowdsource.workerskill.controllers', ['ngGrid']);

workerskillApp.controller('WorkerskillController', function($scope, $log, $http) {	
    	$scope.workerskill = [];
    	$http.get("/api/worker-skill/?format=json").success(function(data,config) {
        	$scope.workerskill = data
        	console.log($scope.workerskill )
        }).error(function(data, status, headers, config) {
               console.log(status)
        });
    	
    $scope.gridOptions = {
    multiSelect: false,
    enablePinning: true,
    data:'workerskill',
    columnDefs: [   
                    { field: "worker", displayName: 'worker', width:220,pinned: true },
                    { field:"skill",displayName: 'skill', width:140 },
                    { field: "level", displayName:'level', width:100 },
                    { field: "verified", displayName: 'verified', width: 100 }
                  
                    ]
    };	
}) 



(function () {
    'use strict';
    
    angular.module('Assignment1App', [])
    
    .controller('Assignment1Controller', function ($scope) {
        $scope.name = "Module-1 Coding Assignment";
        $scope.items = "";

        $scope.validateItems = function(items){
           
           if(items != ""){
            console.log(items);
            var array = items.split(',');
            console.log(array.length);

           if(array.length <= 3)
           {
            $scope.message = "Enjoy!";

           }
           else 
           {
            $scope.message = "Too much!";
        }
        }
        else {
            $scope.message = "Please enter data first";

        }           
        };
    });
    
    })();
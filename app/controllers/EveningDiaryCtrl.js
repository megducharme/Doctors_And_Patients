"use strict";
app.controller('EveningDiaryCtrl', function ($scope, SleepDataFactory) {


$scope.sleepData = {
  TOD: "evening"
}


 $scope.postSleepData = function (sleepData) {


  console.log('You clicked ng-click');
  SleepDataFactory.postSleepData(sleepData);

   /* body... */
 }


})

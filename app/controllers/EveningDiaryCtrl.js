"use strict";
app.controller('EveningDiaryCtrl', function ($scope, SleepDataFactory) {


$scope.sleepData = {}


 $scope.postSleepData = function (sleepData) {


  console.log('You clicked ng-click');
  SleepDataFactory.postSleepData(sleepData);

   /* body... */
 }






})

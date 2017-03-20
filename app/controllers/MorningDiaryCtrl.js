"use strict";
app.controller('MorningDiaryCtrl', function ($scope, SleepDataFactory) {

$scope.sleepData = {}


 $scope.postSleepData = function (sleepData) {

  SleepDataFactory.postSleepData(sleepData);

 }



})
// let printDoctors = function () {
//   HospitalFactory.getDoctors()
//   .then((doctorData) => {
//     console.log("doctorData", doctorData)
//     console.log(Object.keys(doctorData.data));
//     $scope.doctors = doctorData.data;

//     for (let i = 0; doctorData.data.length < i; i++){
//       doctorData[i] =
//     }
//   })
  /* body... */

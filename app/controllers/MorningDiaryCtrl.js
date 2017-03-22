"use strict";
app.controller('MorningDiaryCtrl', function ($scope, SleepDataFactory, $location) {

$scope.sleepData = {
  TOD: "morning"
}


 $scope.postSleepData = function (sleepData) {

  SleepDataFactory.postSleepData(sleepData);
  $location.path("/landingPage");

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

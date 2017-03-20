"use strict";
app.factory('SleepDataFactory', function ($q, $http, FBCreds) {

  let getSleepData = function(){
    return $q((resolve, reject) =>
$http.get(`${FBCreds.databaseURL}/SleepData.json`)
  .then((SleepDataList) => {
    console.log(SleepDataList);
    resolve(SleepDataList)

  })
  .catch((error) => {
    reject(error);
  })
    )};


    let postSleepData = function(sleepObject){
    return $q((resolve, reject) =>
$http.post(`${FBCreds.databaseURL}/SleepData.json`, angular.toJson(sleepObject))

  .then((SleepDataList) => {

    resolve(SleepDataList)

  })
  .catch((error) => {
    reject(error);
  })
    )};


// RelatedEvent

    // let editSleepData = function (sleepObject, sleepObjectId) {
    //   return $q((resolve, reject) => $http.patch(`${FBCreds.databaseURL}/SleepData/${sleepObjectId}.json`, sleepObject)

    //   .then ((SleepDataList) => {
    //     resolve(SleepDataList)
    //   })
    // }





// Not sure if this is necessary


// let getDoctors = function(){
//     return $q((resolve, reject) =>
// $http.get(`${FBCreds.databaseURL}/doctors.json`)
//   .then((doctorsList) => {
//     console.log(doctorsList);
//     resolve(doctorsList)
//   })
//   .catch((error) => {
//     reject(error);
//   })
//     )};


  return {getSleepData, postSleepData};

});

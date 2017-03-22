
app.controller('retrieveDataCtrl',  function( SleepDataFactory, $scope){

console.log( 'inside retrieveDataCtrl ');

$scope.sleepData;
let getSleepData = function (){

  SleepDataFactory.getSleepData()
  //it returns a promise
.then((sleepData) => {
  console.log(sleepData);


    $scope.sleepData = sleepData;
})
}

getSleepData();




  $scope.deleteSleepData = function( SleepDataId){
    SleepDataFactory.deleteSleepData(SleepDataId)
    .then((response) => {
  SleepDataFactory.getSleepData()
  //it returns a promise
      .then((sleepData) => {
       console.log(sleepData);
    $scope.sleepData = sleepData;
      })
    })
  };
  /* body... */

})

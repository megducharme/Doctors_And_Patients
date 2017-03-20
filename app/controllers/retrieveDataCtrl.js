
app.controller('retrieveDataCtrl',  function( SleepDataFactory, $scope){
console.log( 'inside retrieveDataCtrl ');

let getSleepData = function (){
  SleepDataFactory.getSleepData()
  //it returns a promise
.then((sleepData) => {
  console.log(sleepData);
  let sleepDataArray = [];
  let sleepDataActual = sleepData.data;
    for (key in sleepDataActual) {
      console.log(sleepDataActual, key);
      sleepDataArray.push(sleepDataActual[key]);
    }
      console.log(sleepDataArray);
    $scope.sleepData = sleepDataArray;
})
}

getSleepData();
})

// Here's the initial data. Again: don't worry about persistence :)
var data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
]

var app = angular.module('testing',[]);

app.controller('GridController', function($scope){
  $scope.stars = data;
  $scope.addStar=function(){
        $scope.stars.push({
        	name : $scope.newName,
          photo_url : $scope.newPic
        });
    }
  $scope.fired=function(index){
  	$scope.stars.splice(index, 1);
  }
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
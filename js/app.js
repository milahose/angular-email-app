const emailer = angular.module('emailer', []);

emailer.controller('EmailController', ['$scope', function($scope) {
  $scope.greeting = 'Hello World!';

  $scope.isPopupVisible = false;
  
  $scope.showPopup = function(email) {
    $scope.isPopupVisible = true;
    $scope.selectedEmail = email;
  };
  
  $scope.closePopup = function() {
    $scope.isPopupVisible = false;
  };

  $scope.emails = [
    { 
      from: 'John', 
      subject: 'I love angular', 
      date: 'Jan 1', 
      body: 'hello world!'
    },
    { 
      from: 'Jack', 
      subject: 'Angular and I are just friends', 
      date: 'Feb 15', 
      body: 'just kidding'
    },
    { 
      from: 'Ember', 
      subject: 'I hate you Angular!', 
      date: 'Dec 8', 
      body: 'wassup dude'
    }
  ];
}]);
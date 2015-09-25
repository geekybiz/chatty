'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function($scope, MessageService) {
    MessageService.getMessages().then(function(response) {
      $scope.messages = response.data;

      $scope.addMessage = function(message) {
        MessageService.addMessage(message).then(function(val) {
            console.log(val);
        })
      }

    })
  });

'use strict';

angular.module('chattyApp')
  .service('MessageService', function($http) {

    this.getMessages = function(messages) {
      return $http({
        method: 'GET',
        url: 'http://localhost:9000'
      })
    }

    this.addMessage = function(message) {
      return $http({
        method: 'POST',
        url: 'http://localhost:9000',
        data: {
          message: message
        }
      }).then(function(response) {
        return response;
      })

    }

  });

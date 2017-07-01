var app = angular.module('app', []);

app.service('SubscriberService', function ($http) {
    //to create unique subscriber id
    var uid = 1;

    //subscribers array to hold list of all subscribers
    var subscribers = [{
        id: 0,
        name: 'Edy Segura',
        email: 'edysegura@gmail.com'
    }];

    //save method create a new subscriber if not already exists
    //else update the existing object
    this.save = function (subscriber) {
        if (subscriber.id == null) {
            //if this is new subscriber, add it in subscribers array
            subscriber.id = uid++;
            return $http.post('/api/subscribers', subscriber)
            // subscribers.push(subscriber);
        } else {
            //for existing subscriber, find this subscriber using id
            //and update it.
            return $http.put('/api/subscribers/' + subscriber.id, subscriber)
            // for (i in subscribers) {
            //     if (subscribers[i].id == subscriber.id) {
            //         subscribers[i] = subscriber;
            //     }
            // }
        }
    }

    //simply search subscribers list for given id
    //and returns the subscriber object if found
    this.get = function (id) {
        return $http.get('/api/subscribers/' + id)
        // for (i in subscribers) {
        //     if (subscribers[i].id == id) {
        //         return subscribers[i];
        //     }
        // }
    }

    //iterate through subscribers list and delete
    //subscriber if found
    this.delete = function (id) {
        return $http.delete('/api/subscribers/' + id)
        // for (i in subscribers) {
        //     if (subscribers[i].id == id) {
        //         subscribers.splice(i, 1);
        //     }
        // }
    }

    //simply returns the subscribers list
    this.list = function () {
        return $http.get('/api/subscribers')
    }
});

app.controller('SubscriberController', function ($scope, SubscriberService) {
    function list() {
        SubscriberService.list().then(response => {
            console.log(response.data)
            $scope.subscribers = response.data;
        });
    }
    list();

    $scope.saveSubscriber = function () {
        SubscriberService.save($scope.newSubscriber).then(response => {
            $scope.newSubscriber = {};
            list();
        });
    }

    $scope.delete = function (id) {
        SubscriberService.delete(id).then(response => {
            $scope.newSubscriber = {};
            list();
        });
    }

    $scope.edit = function (id) {
        SubscriberService.get(id).then(response => {
            $scope.newSubscriber = angular.copy(response.data);
        })
    }
});
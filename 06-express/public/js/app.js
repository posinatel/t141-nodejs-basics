var app = angular.module('app', []);

app.service('SubscriberService', function () {
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
            subscribers.push(subscriber);
        } else {
            //for existing subscriber, find this subscriber using id
            //and update it.
            for (i in subscribers) {
                if (subscribers[i].id == subscriber.id) {
                    subscribers[i] = subscriber;
                }
            }
        }
    }

    //simply search subscribers list for given id
    //and returns the subscriber object if found
    this.get = function (id) {
        for (i in subscribers) {
            if (subscribers[i].id == id) {
                return subscribers[i];
            }
        }

    }

    //iterate through subscribers list and delete
    //subscriber if found
    this.delete = function (id) {
        for (i in subscribers) {
            if (subscribers[i].id == id) {
                subscribers.splice(i, 1);
            }
        }
    }

    //simply returns the subscribers list
    this.list = function () {
        return subscribers;
    }
});

app.controller('SubscriberController', function ($scope, SubscriberService) {
    $scope.subscribers = SubscriberService.list();

    $scope.saveSubscriber = function () {
        SubscriberService.save($scope.newSubscriber);
        $scope.newSubscriber = {};
    }

    $scope.delete = function (id) {
        SubscriberService.delete(id);
        if ($scope.newSubscriber.id == id) $scope.newSubscriber = {};
    }

    $scope.edit = function (id) {
        $scope.newSubscriber = angular.copy(SubscriberService.get(id));
    }
});
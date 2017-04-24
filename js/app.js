var app = angular.module('Game', ["ngRoute"]);

//těžba
app.controller('miningCtrl', function($scope) {
    $scope.countWood = 0;
    $scope.countStone = 0;
    $scope.countGold = 0;
    $scope.wood = 0;
    $scope.stone = 0;
    $scope.gold = 0;

    $scope.addItem = function () {
        $scope.countWood.push($scope.addMe);
        $scope.countStone.push($scope.addMe);
        $scope.countGold.push($scope.addMe);
    };

});

//přepínání mezi chatem a příběhem
app.config(function($routeProvider) {
$routeProvider
    .when("/chat", {
        templateUrl : "chat.htm"
    })
    .when("/story", {
        templateUrl : "story.htm"
    })
});
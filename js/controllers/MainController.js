// We created a new controller named "MainController". A controller 
// manages the app's data. 
app.controller('MainController', ['$scope', function($scope) { 
    $scope.images = [ { 
        cover: 'img/louvre-image.jpg' },
    {
        cover: 'img/arco-do-triunfo.jpg' },
    {
        cover: 'img/cathedral.jpg' },
    {
        cover: 'img/rio-sena.jpg' }
    ];
}]);

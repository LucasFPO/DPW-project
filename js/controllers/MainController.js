// We created a new controller named "MainController". A controller 
// manages the app's data. 
app.controller('MainController', ['$scope', function($scope) { 
    $scope.images = [ { 
        id: 1,
        cover: 'img/louvre-image.jpg',
        information: 'Tell me Louvre' },
    {
        id: 2,
        cover: 'img/arco-do-triunfo.jpg',
        information: 'tudo sobre o Arco do Triunfo' },
    {
        id: 3,
        cover: 'img/cathedral.jpg' },
    {
        id: 4,
        cover: 'img/rio-sena.jpg' },
    ];
}]);

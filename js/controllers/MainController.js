// We created a new controller named "MainController". A controller 
// manages the app's data. 
app.controller('MainController', ['$scope', function($scope) { 
    $scope.images = [ { 
        cover: 'img/louvre-image.jpg',
        information: 'Tell me Louvre' },
    {
        cover: 'img/arco-do-triunfo.jpg',
        information: 'tudo sobre o Arco do Triunfo' },
    {
        cover: 'img/cathedral.jpg' },
    {
        cover: 'img/rio-sena.jpg' },
    ];
}]);

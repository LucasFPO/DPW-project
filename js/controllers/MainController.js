// We created a new controller named "MainController". A controller 
// manages the app's data. 
app.controller('MainController', ['$scope', function($scope) { 
    $scope.images = [ { 
        cover: 'img/louvre-image.jpg',
        link: 'https://www.louvre.fr/accueil',
        information: 'O maior museu de Paris e um dos maiores do mundo, o Louvre reune ' +
                     'cerca de 35.000 0bras dos mais variados tipos e tempos. ' +
                     'De sala em sala o Louvre é capaz de revelar segredos magníficos. ' +
                     '-- https://www.louvre.fr/accueil'
        },
        {
        cover: 'img/arco-do-triunfo.jpg',
        link: 'http://www.paris-arc-de-triomphe.fr/',
        information: 'Inaugurado em 1836 pelo rei da França, Louis-Phillipe, o Arco do Triunfo, ' +
                     'se localiza no meio da Avenida Champs-Élysées, considerada uma das mais ' +
                     'belas do mundo. No terraço do Arco, é possível ter uma vista incrível ' +
                     'que abraça toda Paris. -- http://www.paris-arc-de-triomphe.fr/'
        },
        {
        cover: 'img/cathedral.jpg',
        link: 'http://www.notredamedeparis.fr/',
        information: 'Mais que um monumento histórico, a Catedral de Notre Dame é um lugar sagrado. ' +
                     'Sua arquitetura seduzente e fascinante, repleta de vitrais e abóbadas, releva ' +
                     'mistérios e segredos de uma época conturbada. -- http://www.notredamedeparis.fr/'
    },
    {
        cover: 'img/rio-sena.jpg',
        link: 'https://pt.wikipedia.org/wiki/Sena', 
        information: 'Nascendo a 470 metros de altitude, na Meseta de Langres, em Côte-dOr, ' +
                     'o Rio Sena faz seu caminho pela cidade de Paris até desaguar no Oceano ' +
                     'Atlântico. Em 1991 as margens do rio foram classificadas como patrimônio ' +
                     'da humanidade pela UNESCO -- https://pt.wikipedia.org/wiki/Sena.'
    },
    ];

    // Quando a página é carregada, ela começa declarando que ng-show="custom" é false.
    // Ao clicar, o ng-click, declarado "custom!=custom" transforma o valor false para true.
    // Clicando novamente, ele transforma para false de novo, e assim vai...
    $scope.custom= false;


    /* $scope.IsVisible = false;

         $scope.ShowHide = function() {       
        $scope.IsVisible = $scope.IsVisible = true;    
    }; */ 

}]);

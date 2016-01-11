/**
 * Created by lucker.xia on 12/16/2015.
 */
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            when('/pagination',{
                templateUrl: 'partials/pagination.html',
                controller: 'paginationController'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);

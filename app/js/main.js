(function(){

  'use strict';

  var myApp = angular.module('myApp', []);

  myApp.controller('Ctrl', ['$scope', function($scope) {
    $scope.authorFirst = 'Chris';
    $scope.authorLast = 'Bustamante';
    $scope.picture = 'https://pbs.twimg.com/profile_images/567733573709357057/fjW08y8z.jpeg';
    $scope.likeCount = 0;
    $scope.likeString = 'Likes';

    $scope.likeClick = function () {
        if ($scope.likeCount === 0) {
            $scope.likeString = 'Like';
            $scope.likeCount += 1;
        } else {
            $scope.likeString = 'Likes';
            $scope.likeCount += 1;
        }
    };

  }]);

}());



// function Ctrl($scope) {
//         }
//     };

// }
// ;(function (){

//   'use strict';

//   angular.module('module', [])

// it('should check ng-click', function() {
//   expect(element(by.binding('count')).getText()).toMatch('0');
//   element(by.css('button')).click();
//   expect(element(by.binding('count')).getText()).toMatch('1');
// });

// });


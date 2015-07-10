// ;(function (){

//   'use strict';

//   angular.module('module', [])
// .controller('Ctrl', ['$scope', function Ctrl($scope) {
//     var hasLiked = false;
//     $scope.likeClick = function () {
//         if (!hasLiked) {
//             hasLiked = true;
//             $scope.liked = 'Unlike';
//             $scope.likeCount += 1;
//         } else {
//             hasLiked = false;
//             $scope.liked = 'Like';
//             $scope.likeCount -= 1;
//         }
//     };
// }});
;(function (){

  'use strict';

  angular.module('module', [])

it('should check ng-click', function() {
  expect(element(by.binding('count')).getText()).toMatch('0');
  element(by.css('button')).click();
  expect(element(by.binding('count')).getText()).toMatch('1');
});

});

// ;(function (){

//   'use strict';

//   angular.module('LikeModule', [])

//   .controller('LikeController', ['$scope', function ($scope) {

//     $scope.leClicks = [];

//     var Count = function (countClicks) {
//       this.countClicks = 0;

//     };

//     $scope.countUp = function () {

//       var c = new Count();

//       c.countClicks = +1;

//       $scope.leClicks.push(c);

//     };

//     $scope.likesCount = function () {


//       if ($scope.leClicks.length === 1) {

//         return "Like: " + $scope.leClicks.length;

//       } else {

//         return "Likes: " + $scope.leClicks.length;
//       }

//     };

//     }]);

// }());
// ;(function () {

//   'use strict';

//   angular.module('LikeModule', [])

//   .controller('LikeController', ['$scope',
//     function($scope) {

//       $scope.likesCount = 0;

//       $scope.countUp = function(increment) {
//         $scope.likesCount += increment;
//       };

//       $scope.likesCount = function() {
//         if ($scope.likesCount === 1) {
//           return 'like';
//         } else {
//           return 'likes';
//         }
//       };
//     }

//   ]);

// }());
// // ;(function (){

// //   'use strict';


// // angular.module('LikeModule', [])

// // .controller('LikeController', ['$scope', function ($scope) {

// //   $scope.likesCount = [];


// // var Liked = function(count) {

// //   this.count = 0;



// // };


// // $scope.countUp = function() {

// //   var l = new Liked();

// //   l.count = +1;

// //     $scope.likesCount.push(l);


// // };



//     $scope.likesCount = function(){
//     if ($scope.likesCount.length === 1) {

//         return "Like: " + $scope.likesCount.length;

//       } else {

//         return "Likes: " + $scope.likesCount.length;
//       }


//     // return $scope.likesCount.length;

//     };

//   }]);




// }());


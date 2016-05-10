(function () {
  'use strict';

  angular
    .module('workflowEditor')
    .directive('source', source);

  function source($document) {
    return {
      restrict: 'A',
      scope: {
        container: '=source'
      },
      link: function (scope, elem, attrs) {
        var startX, startY, x = 0, y = 0;
        var container = scope.container;

        // Bind mousedown event
        elem.on('mousedown', function (e) {
          e.preventDefault();
          e.stopPropagation();
          elem.css({fill: 'black'});
          startX = e.clientX - x;
          startY = e.clientY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        // Handle drag event
        function mousemove(e) {
          e.stopPropagation();
          y = e.clientY - startY;
          x = e.clientX - startX;
          console.log(scope, elem, attrs);
        }

        // Unbind drag events
        function mouseup(e) {
          $document.unbind('mousemove', mousemove);
          $document.unbind('mouseup', mouseup);
          elem.css({fill: 'white'});

        }

        // Move element, within container if provided
        // function setPosition() {
        //   if (container) {
        //     if (x < 0) {
        //       x = 0;
        //     } else if (x > container.right) {
        //       x = container.right;
        //     }
        //     if (y < 0) {
        //       y = 0;
        //     } else if (y > container.bottom) {
        //       y = container.bottom;
        //     }
        //   }
        //   elem.css({
        //     transform: 'translate(' + x + 'px,' + y + 'px)'
        //   });
        //
        //   attrs.x = x;
        //   attrs.y = y;
        //
        // }
      }

    }

  }
})();


//
// link: function (scope, elem, attrs) {
//    (elem);
//   var startX, startY, x = 0, y = 0;
//   var container;
//   var startCallback, dragCallback, stopCallback;
//   if (scope.dragOptions) {
//     container = scope.dragOptions.container;
//     startCallback = scope.dragOptions.startCallback;
//     dragCallback = scope.dragOptions.dragCallback;
//     stopCallback = scope.dragOptions.stopCallback;
//   }
//
//    (elem.children()[0]);
//
//   // Bind mousedown event
//   elem.on('mousedown', function (e) {
//     e.preventDefault();
//     startX = e.clientX - x;
//     startY = e.clientY - y;
//     $document.on('mousemove', mousemove);
//     $document.on('mouseup', mouseup);
//     if (startCallback) startCallback(e);
//   });
//
//   // Handle drag event
//   function mousemove(e) {
//     y = e.clientY - startY;
//     x = e.clientX - startX;
//     setPosition();
//     if (dragCallback) dragCallback(e);
//   }
//
//   // Unbind drag events
//   function mouseup(e) {
//     $document.unbind('mousemove', mousemove);
//     $document.unbind('mouseup', mouseup);
//     if (stopCallback) stopCallback(e);
//   }
//
//   // Move element, within container if provided
//   function setPosition() {
//     if (container) {
//       if (x < container.left) {
//         x = container.left;
//       } else if (x > container.right) {
//         x = container.right;
//       }
//       if (y < container.top) {
//         y = container.top;
//       } else if (y > container.bottom) {
//         y = container.bottom;
//       }
//     }
//     mainCtrl.changeNodePosition(attrs.id, x, y);
//     elem.css({
//       transform: 'translate(' + x + 'px,' + y + 'px)',
//     });
//     attrs.x = x;
//     attrs.y = y;
//     // scope.$apply(function(){
//     //   scope.$eval(attrs.x + '=' + x);
//     //   scope.$eval(attrs.y + '=' + y);
//     // });
//   }


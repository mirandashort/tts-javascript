// 8. Create an array of test scores (anywhere from 0 to 100; sorry, no extra credit was given).
//
//     Now I want a couple things:
//
// Print out the scores in ascending order.
// Find the average of those test scores and print it out.

// var grades = [12, 43, 53, 74, 38]
//
// grades = grades.sort(function(a, b) {
//   return a - b
// });
//
// for (var i = 0; i < grades.length; i++) {
//   const element = i + ": " + grades[i]
//   console.log(element)
// }

document.addEventListener('DOMContentLoaded', function() {
  var element = document.querySelectorAll('p,h1');
  var mark = function(e) {
    e.style.border = "2px red dotted"
  }

  for (var i = 0; i < element.length; i++) {
    mark(element[i])
  }

  var el = document.querySelectorAll('span');
  var clickButton = function(el){
    el.innerHTML = Date();
  }

})

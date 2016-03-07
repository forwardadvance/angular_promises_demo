// Promise
// setTimeout
// then
// passing values
// catch

// $q

// var a = new Promise(function(resolve){
//   setTimeout(function() {
//     resolve('a')
//   }, 1000);
// });

// var b = new Promise(function(resolve){
//   setTimeout(function() {
//     resolve('b')
//   }, 2000);
// });

// Promise.all([a, b])
//   .then(function(a) {
//     console.log(a);
//   })
// console.log('b')

// a
//   .then(function(a) {
//     console.log(a, 'one');
//     return new Promise(function(resolve, reject){
//       setTimeout(function() {
//         reject('failed!');
//       }, 1000);
//     })
//   })
//   .then(function(a) {
//     console.log(a, 'two');
//   })
//   .catch(function(err) {
//     console.log(err, 'error')
//   })
//   .then(function(a) {
//     console.log(a, 'rescuing');
//   })

angular.module('app', [])
  .controller('qController', function($q) {
    $q(function(resolve) {
      resolve();
    }).then(function() {
      console.log('resolved');
    })
  });



















// $q(function(resolve) {
//   resolve('x');
// })
// .then(function(a) {
//   console.log(a)
// })

var myApp=angular.module( 'myApp', [] );

myApp.controller( 'WhereMyPeeps', function( $http ){  // removed: [ '$http',
  var vm = this;

  vm.addRecord = function(){
    var objectToSend ={
      name: vm.nameIn,
      location: vm.locationIn,
    };
    console.log('objectToSend:',objectToSend);
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    }).then (function(response){
      console.log(response.statusText);
      // vm.getRecords();  -->doesn't work when put here...why not?!  Huck and I couldn't figure out.
    });  // end $http
    vm.getRecords();
    vm.nameIn ='';
    vm.locationIn='';
  };  // end addRecord

  vm.getRecords = function(){
    $http({
      method: 'GET',
      url: '/getRecords',
    }).then( function( response ){
      vm.allTheRecords = response.data;
      console.log('vm.allTheRecords:', vm.allTheRecords );
    }, function myError( response ){
      console.log( response.statusText );
    });  // end $http
  };  // end getRecords

  vm.deleteRecord = function(id){
    $http({
      method: 'DELETE',
      url: '/deleteRecord/'+ id,
    }).then (function(response){
      console.log(response.statusText);
    }); // end $http
    vm.getRecords();
  };
});

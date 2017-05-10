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
    });
    vm.nameIn ='';
    vm.locationIn='';
  };

  vm.getRecords = function(){
    $http({
      method: 'GET',
      url: '/getRecords',
    }).then( function( response ){
      vm.allTheRecords = response.data;
      console.log('vm.allTheRecords:', vm.allTheRecords );
    }, function myError( response ){
      console.log( response.statusText );
    });
  };
});

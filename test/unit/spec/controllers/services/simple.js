'use strict';

describe('Controller: simpleServiceCtrl', function () {

  // load the controller's module
  beforeEach(module('proofOfConceptDemos'));

  var displayDataFromAServiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    displayDataFromAServiceCtrl = $controller('simpleServiceCtrl', {
      $scope: scope
    });
  }));


  it('should have injected simpleService', inject(function(simpleService){
    expect(simpleService.all()).toBeDefined();
    expect(simpleService.all().length).toEqual(3);
  }));

  it('should render characters in the scope, that come from simpleService', function(){
    expect(scope.supermanCharacters).toBeDefined();
  });

  it('should have correct copy', function(){
    expect(scope.supermanCharacters[0]).toEqual('Clark Kent');
    expect(scope.supermanCharacters[1]).toEqual('Lois Lane');
    expect(scope.supermanCharacters[2]).toEqual('Lex Luthor');
  });


});

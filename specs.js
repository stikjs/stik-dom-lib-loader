describe("DOM Lib Loader", function(){
  it("should delegate to Mootools", function(){
    var $window = {
      MooTools: {},
      document: {
        id: jasmine.createSpy("MooToolsSelectorMock")
      }
    };

    stik.labs.boundary({
      name: "tpl"
    }).run({
      $template: '',
      $window: $window
    });

    expect($window.document.id).toHaveBeenCalled();
  });

  it("should delegate as jQuery", function(){
    var $window = {
      jQuery: jasmine.createSpy("jQuerySelectorMock")
    };

    stik.labs.boundary({
      name: "tpl"
    }).run({
      $template: '',
      $window: $window
    });

    expect($window.jQuery).toHaveBeenCalled();
  });

  it("should delegate to Zepto", function(){
    var $window = {
      Zepto: jasmine.createSpy("ZeptoSelectorMock")
    };

    stik.labs.boundary({
      name: "tpl"
    }).run({
      $template: '',
      $window: $window
    });

    expect($window.Zepto).toHaveBeenCalled();
  });
});

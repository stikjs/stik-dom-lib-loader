GLOBAL.window = {};
var window = GLOBAL.window;

require("stik-core");
require("stik-labs");
require("./src/tpl_wrapper");
require("./src/tpl");

describe("DOM Lib Loader", function(){
  it("should fail when no DOM lib is found", function(){
    var lab = window.stik.labs.boundary({
      name: "tpl"
    });

    expect(function(){
      lab.run({ $template: "" });
    }).toThrow("no DOM library found");
  });

  it("should delegate to Mootools", function(){
    window.MooTools = {};
    window.document = {
      id: jasmine.createSpy("MooToolsSelectorMock")
    };

    window.stik.labs.boundary({
      name: "tpl"
    }).run({
      $template: ""
    });

    expect(window.document.id).toHaveBeenCalled();

    delete window.MooTools;
  });

  it("should delegate as jQuery", function(){
    window.jQuery = jasmine.createSpy("jQuerySelectorMock");

    window.stik.labs.boundary({
      name: "tpl"
    }).run({
      $template: ""
    });

    expect(window.jQuery).toHaveBeenCalled();

    delete window.jQuery;
  });

  it("should delegate to Zepto", function(){
    window.Zepto = jasmine.createSpy("ZeptoSelectorMock");

    window.stik.labs.boundary({
      name: "tpl"
    }).run({
      $template: ""
    });

    expect(GLOBAL.window.Zepto).toHaveBeenCalled();

    delete window.Zepto;
  });
});

(function( stik ){
  stik.boundary({
    as: "tpl",
    from: "all",
    resolvable: true,
    to: function( $template, tplWrapper ){
      return tplWrapper( $template );
    }
  });
})( window.stik );

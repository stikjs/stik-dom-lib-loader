(function( window, stik ){
  stik.boundary({
    as: "tplWrapper",
    from: "all",
    to: function( $template ){
      if ( window.hasOwnProperty( "MooTools" ) ) {
        return window.document.id( $template );
      } else if( window.hasOwnProperty( "Zepto" ) ) {
        return window.Zepto( $template );
      } else if ( window.hasOwnProperty( "jQuery" ) ) {
        return window.jQuery( $template );
      }
      throw "no DOM library found";
    }
  });
})( window, window.stik );

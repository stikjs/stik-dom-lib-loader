stik.boundary({
  as: "tpl",
  resolvable: true,
  to: function( $template, $window ){
    if ($window.hasOwnProperty("MooTools")) {
      return $window.document.id($template);
    } else if($window.hasOwnProperty("Zepto")) {
      return $window.Zepto($template);
    } else if ($window.hasOwnProperty("jQuery")) {
      return $window.jQuery($template);
    }

    throw "no library found";
  }
});

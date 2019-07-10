// Copyright (c) NAV-X.

$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var replaceLanguage = function replaceLanguage(sTarget, sLocale) {
    var sResult = window.location.origin;
    var sRelative = "";
  
    if (sTarget.startsWith(sResult) || sTarget.length > sResult.length) {
        sRelative = sTarget.slice(sResult.length);

        if (sRelative.substring(3, 4) == '/') {
            sRelative = sRelative.slice(4);
        }
    }

    sResult = sResult + '/' + sLocale + '/' + sRelative;
    sResult = sResult.replace(new RegExp("[/]+$"), "");
    if (sResult.indexOf('.') < 0) { 
        sResult = sResult + '/';
    }

    return sResult;
};

(function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
        links[i].target = '_blank';
      }
    }

    var target = getUrlParameter('target');

    if (target == null || target == "") {
        target = window.location.origin + '/';
    }
    $('.select-locale-content > li > a').each(function() {
        $(this).attr('href', replaceLanguage(target, $(this).attr('locale')));
    });
})();

  $("#localesearch").keyup(function(e) {
      var searchString = e.target.value;
      $('.select-locale-content > li:not(:contains(' + searchString + '))').hide();
      $('.select-locale-content > li:contains(' + searchString + ')').show();
  })
var $, fill;

$ = require('jquery');

(fill = (function(_this) {
  return function(item) {
    return $('.tagline').append("" + {
      item: item
    });
  };
})(this))('The most creative minds in Art');

fill;

/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#C5CAE9',
    lineColor: '#C5CAE9'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
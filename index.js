$(document).scroll(function() {
  if (window.pageYOffset > 100) {
    $(".navbar").addClass("trans");
  } else {
    $(".navbar").removeClass("trans");
  }
});

$(document).scroll(function() {
  if (window.pageYOffset > 570) {
    $("h2").addClass("animation");
  } else {
    $("h2").removeClass("animation");
  }
});
$(document).scroll(function() {
  if (window.pageYOffset > 600 && window.pageYOffset < 1250) {
    $(".aboutDecor").addClass("textDecor");
  } else {
    $(".aboutDecor").removeClass("textDecor");
  }
});
$(document).scroll(function() {
  if (window.pageYOffset > 1270 && window.pageYOffset < 1900) {
    $(".donateDecor").addClass("textDecor");
  } else {
    $(".donateDecor").removeClass("textDecor");
  }
});
$(document).scroll(function() {
  if (window.pageYOffset > 1920) {
    $(".contactDecor").addClass("textDecor");
  } else {
    $(".contactDecor").removeClass("textDecor");
  }
});

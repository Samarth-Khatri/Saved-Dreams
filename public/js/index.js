$(document).scroll(function() {
  if (window.scrollY > 100) {
    $(".navbar").addClass("trans");
  } else {
    $(".navbar").removeClass("trans");
  }
});
$(document).scroll(function() {
  if (window.scrollY > 570) {
    $("h2").addClass("animation");
  } else {
    $("h2").removeClass("animation");
  }
});
$(document).scroll(function() {
  if (window.scrollY > 600 && window.scrollY < 1250) {
    $(".aboutDecor").addClass("textDecor");
  } else {
    $(".aboutDecor").removeClass("textDecor");
  }
});
$(document).scroll(function() {
  if (window.scrollY > 1270 && window.scrollY < 1900) {
    $(".donateDecor").addClass("textDecor");
  } else {
    $(".donateDecor").removeClass("textDecor");
  }
});
$(document).scroll(function() {
  if (window.scrollY > 1920) {
    $(".contactDecor").addClass("textDecor");
  } else {
    $(".contactDecor").removeClass("textDecor");
  }
});

$(document).ready(function() {
  $("select.selectVal").change(function() {
      let selectedItem = $(this).children("option:selected").val();
      console.log(selectedItem)
    });
});
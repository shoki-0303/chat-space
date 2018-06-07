$(function() {
  $("#js-form").on('submit', function(e) {
    e.preventDefault();
    var input = $("#js-textfield").val();
    console.log(input);
  });
})


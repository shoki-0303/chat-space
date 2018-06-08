$(function() {

  function append_message(message) {
    var html =    `<div data-id="${message.id}">
                    <p class="content__middle__message__name">
                     ${ message.user_name }
                    </p>
                    <p class="content__middle__message__time">
                     ${ message.created_at }
                    </p>
                    <p class="content__middle__message__text">
                     ${ message.content }
                    </p>
                   </div>`
    $('.content__middle__message').append(html);
  }


  $("#js-form").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      append_message(data);
      $('#js-form')[0].reset();
      $('.content__middle').animate({scrollTop: $('.content__middle')[0].scrollHeight});
      $('.form__submit').prop("disabled", false);
    })
  });
});


$(function() {
  function append_message(message) {
    var image_html = (message.image_url) ? `<li class="image"><img src=${message.image_url} class="lower-message__image"></li>` : ""
    var html =   `<ul class="message">
                    <li class="content__middle__message__name">
                     ${ message.user_name }
                    </li>
                    <li class="content__middle__message__time">
                     ${ message.created_at }
                    </li>
                    <li class="content__middle__message__text">
                     ${ message.content }
                    </li>
                    ${ image_html }
                  </ul>`
    $('.content__middle__message').append(html);
  }

  $("#new_message").on('submit', function(e) {
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
      $('#new_message')[0].reset();
      $('.content__middle').animate({scrollTop: $('.content__middle')[0].scrollHeight});
      $('.form__submit').prop("disabled", false);
    })
    .fail(function(){
      alert('error');
    })
  });
});


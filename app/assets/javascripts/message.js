$(function() {
  function append_message(message) {
    var image_html = (message.image_url) ? `<li class="image"><img src=${message.image_url} class="lower-message__image"></li>` : ""
    var html =   `<ul class="message" data-id="${message.id}">
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

  function updateHTML(new_message) {
    var image_url = ""
    if (new_message.image_url != null) {
      var image_url = `<li class="image"><img src=${new_message.image_url} class="lower-message__image"></li>`
    }
    var html =   `<ul class="message" data-id="${new_message.id}">
                    <li class="content__middle__message__name">
                     ${ new_message.user_name }
                    </li>
                    <li class="content__middle__message__time">
                     ${ new_message.created_at }
                    </li>
                    <li class="content__middle__message__text">
                     ${ new_message.content }
                    </li>
                    ${ image_url }
                  </ul>`
    $('.content__middle__message').append(html);
  }

  $(function() {
    setInterval(update, 5000);
  });

  function update() {
    var message_id = $('.message:last').data('id');
    if (location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {id: message_id},
        dataType: 'json'
      })
      .done(function(data){
        data.forEach(function(data) {
          updateHTML(data);
        });
      })
      .fail(function(){
        alert('自動更新に失敗しました');
      })
      $('.content__middle').animate({scrollTop: $('.content__middle')[0].scrollHeight});
    }
  }
});


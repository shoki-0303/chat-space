$(function() {

  function append_message(message) {
    var html =    `<div data-id="${message.id}">
                    <p class="content__middle__message__name">
                     ${ message.user.name }
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
    var url = $(this).attr("action");

    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      data: 'formData',
      processData: false,
      contentType: false
    })

    .done(function(date) {
      append_message(data.message);
      $(".content__middle__message").animate({scrollTop:$('.content__buttom').offset().top});
      $('#js-form')[0].reset();
    })
  });
})


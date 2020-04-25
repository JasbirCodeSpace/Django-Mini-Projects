$(document).ready(function(){

$.ajaxSetup({
  beforeSend: function (xhr, settings) {
    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
    if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
      // Only send the token to relative URLs i.e. locally.
      xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
  }
});

$('form').submit(function(event){
let formData = $('form').serializeArray();
let formated_data = {};
$.each(formData,function(i,key){
formated_data[key.name] = key.value;
})
	$.ajax({
		type:'POST',
		url:'SendMail',
		data:formated_data,
		success:function(response){
			if(response.status==1){
			$('.alert').text("Successfully sent mail");
			$('.alert').removeClass("alert-danger");
			$('.alert').addClass("alert-success");
			}else{
			$('.alert').text("Error while sending mail");
			$('.alert').removeClass("alert-success");
			$('.alert').addClass("alert-danger");
			}
		},
		error:function(error){
			$('.alert').text("Error while sending mail");
			$('.alert').removeClass("alert-success");
			$('.alert').addClass("alert-danger");

		}
	})
	event.preventDefault();
})
})
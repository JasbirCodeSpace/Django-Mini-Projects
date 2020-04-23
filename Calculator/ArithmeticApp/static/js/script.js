// UI
const uiCalc = document.querySelector(".ks-calculator");
const uiDisplay = document.querySelector(".ks-calculator_item--display");
var input1 = 0;
var input2 = 0;
var operator = "";
var available_operators = ['+','-','/','*'];

$.ajaxSetup({ 
     beforeSend: function(xhr, settings) {
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

function calcEventListeners() {
  uiCalc.addEventListener("click", function (event) {
    // check for tagName button to ensure that button tag is used for buttons and not divs
    // TO DO: change the icons in the buttons to be in the CSS so that event fires even when the icons are clicked
    if (event.target.tagName === "BUTTON") {
      // TO DO: change name val to use template string in order to be able to type out double digit numbers for calculation
      const nameVal = event.target.name;
      const convertedNum = parseInt(nameVal, 10);

      if (event.target.classList.contains("ks-calculator_item--num")) {
        if(uiDisplay.innerText.length==1 && uiDisplay.innerText=='0')
          uiDisplay.innerText = '';
        if(uiDisplay.innerText.length==9)
          return;
        uiDisplay.innerText = uiDisplay.innerText + convertedNum;
      }else{

      if (available_operators.indexOf(event.target.name)!==-1){
        operator= event.target.name;
        uiDisplay.innerText='0';
        
      }else if (event.target.name === "equals" && operator!='') {
        $.ajax({
        type: "POST",
        url: '/ArithmeticCalc',   
        data: {
              input1:input1,
              input2:input2,
              operator:operator},
        success:  function(response){
               alert(response);
               input1=0;
               input2=0;
               operator='';
           }
    });
      } else if(event.target.name === "clear"){
        input1=0;
        input2=0;
        operator='';
        uiDisplay.innerText='';
      }
    }
    }
  });
}

calcEventListeners();
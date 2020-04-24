// UI
const uiCalc = document.querySelector(".ks-calculator");
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
var input1 = 0;
var input2 = 0;
var operator = "";
var available_operators = ['+', '-', '/', '*'];

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

function calcEventListeners() {
  uiCalc.addEventListener("click", function (event) {
    if (operator != '') {
      uiDisplay = display2;
    } else {
      uiDisplay = display1;
    }
    // check for tagName button to ensure that button tag is used for buttons and not divs
    // TO DO: change the icons in the buttons to be in the CSS so that event fires even when the icons are clicked
    let check1 = event.target.tagName == "BUTTON";
    let check2 = event.target.parentElement.nodeName == "BUTTON";

    if (check1 || check2) {
      let new_event = check1 == true ? event.target : event.target.parentElement;
      // TO DO: change name val to use template string in order to be able to type out double digit numbers for calculation
      const nameVal = new_event.name;
      const convertedNum = parseInt(nameVal, 10);

      if (event.target.classList.contains("ks-calculator_item--num")) {
        if (uiDisplay.innerText.length == 1 && uiDisplay.innerText == '0') {
          uiDisplay.innerText = '';
        }
        if (uiDisplay.innerText.length == 9) {
          return;
        }
        uiDisplay.innerText = uiDisplay.innerText + convertedNum;
      } else {
        if (available_operators.indexOf(new_event.name) !== -1) {
          operator = new_event.name;
          display2.innerText = operator;
          display1.style.position = "absolute";
          display1.style.top = '10px';
          display1.style.fontSize = "3rem";
          // uiDisplay.innerText='0'

        } else if (new_event.name === "equals" && operator != '') {
          input1 = display1.innerText;
          input2 = display2.innerText.substring(1, display2.innerText.length);
          if (input2 == '') return;

          $.ajax({
            type: "POST",
            url: '/ArithmeticCalc',
            data: {
              input1: input1,
              input2: input2,
              oper: operator
            },
            success: function (response) {
              input1 = response;
              input2 = 0;
              operator = '';
              display1.innerText = response;
              display2.innerText = '';
            }
          });
        } else if (new_event.name === "clear") {
          input1 = 0;
          input2 = 0;
          operator = '';
          display1.innerText = '0';
          display2.innerText = '';
          display1.style.position = '';
          display1.style.top = '';
          display1.style.fontSize = '5rem';
          uiDisplay = display1;
        } else if (new_event.name == "delete") {

          if (uiDisplay.innerText != '') {
            // console.log('1');
            if (uiDisplay.id == "display2") {
              // console.log('2');
              uiDisplay.innerText = uiDisplay.innerText.substring(0, uiDisplay.innerText.length - 1);
              if (uiDisplay.innerText.length == 0) {
                // console.log('3');
                display1.style.position = '';
                display1.style.top = '';
                display1.style.fontSize = '5rem';
                operator = '';
                input2 = '';
              }
            } else {
              display1.style.position = '';
              display1.style.top = '';
              display1.style.fontSize = '5rem';
              operator = '';
              input2 = '';
              // console.log('4');
              uiDisplay.innerText = uiDisplay.innerText.substring(0, uiDisplay.innerText.length - 1);
              if (uiDisplay.innerText.length == 0) {
                // console.log('5');
                uiDisplay.innerText = '0';
                input1 = 0;
              }
            }
          } else {
            // console.log('6');
            if (uiDisplay.id == "display2") {
              // console.log('7');
              display1.style.position = '';
              display1.style.top = '';
              display1.style.fontSize = '5rem';
              operator = '';
              input2 = '';
            } else {
              // console.log('8');
              if (display1.innerText.length == 0 || display1.innerText.length == 1) {
                // console.log('9');
                display1.innerText = '0';
              } else {
                // console.log('10');
                display1.innerText = display1.innerText.substring(0, display1.innerText.length - 1);
              }
            }

          }


        }
      }
    }
  });
}

calcEventListeners();
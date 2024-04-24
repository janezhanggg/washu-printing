var money = 1.00;
var cyan = false;
var magenta = false;
var yellow = false;
var black = false;

$(document).ready(function() {
    var currentDialog=null;


    $('input[type="checkbox"]').prop('checked', false);
    $('input[type="checkbox"]').click(function() {
        var isChecked = $(this).is(":checked");
        var inputValue = $(this).val();
        if (isChecked && currentDialog) {
            $('img[id^="' + currentDialog + '"]').css("display", "none");
        }
        $("#" + inputValue).toggle(isChecked);
        if($(this).attr("name") == "checkC"){
            cyan = isChecked;
        }
        else if($(this).attr("name") == "checkM"){
            magenta = isChecked;
        }
        else if($(this).attr("name") == "checkY"){
            yellow = isChecked;
        }
        else if($(this).attr("name") == "checkK"){
            black = isChecked;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Show the element on page load
    document.getElementById("introScreen").style.display = "flex";
    $("#introScreen").css("display", "flex").animate({ opacity: 1 }, 0);
    
    document.getElementById("mail").addEventListener("click", function() {
        $("#introScreen").css("display", "flex").animate({ opacity: 0 }, 1000);
        document.getElementById("introScreen").style.display = "none";

        $("#email").css("display", "block").delay(2000).animate({ opacity: 1 }, 1000);
    });
});

function closeMail() {
    document.getElementById("email").style.display = "none";
}

function open1() {
    console.log("clicked open 1");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form1").style.display = "block";
    document.getElementById("dialog1").style.display = "block";
    currentDialog = dialog1;
  }
  function open2() {
    console.log("clicked open 2");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("dialog2").style.display = "block";
    currentDialog = dialog2;
  }
  function open3() {
    console.log("clicked open 3");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form3").style.display = "block";
    document.getElementById("dialog3").style.display = "block";
    currentDialog = dialog3;
  }
  function open4() {
    console.log("clicked open 4");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form4").style.display = "block";
    document.getElementById("dialog4").style.display = "block";
    currentDialog = dialog4;
  }
  function open5() {
    console.log("clicked open 5");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form5").style.display = "block";
    document.getElementById("dialog5").style.display = "block";
    currentDialog = dialog5;
  }
  function open6() {
    console.log("clicked open 6");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form6").style.display = "block";
    document.getElementById("dialog6").style.display = "block";
    currentDialog = dialog6;
  }
  function open7() {
    console.log("clicked open 7");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form7").style.display = "block";
    document.getElementById("dialog7").style.display = "block";
    currentDialog = dialog7;
  }
  function open8() {
    console.log("clicked open 8");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form8").style.display = "block";
    document.getElementById("dialog8").style.display = "block";
    currentDialog = dialog8;
  }
  function open9() {
    console.log("clicked open 9");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form9").style.display = "block";
    document.getElementById("dialog9").style.display = "block";
    currentDialog = dialog9;
  }
  function open10() {
    console.log("clicked open 10");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form10").style.display = "block";
    document.getElementById("dialog10").style.display = "block";
    currentDialog = dialog10;
  }
  function open11() {
    console.log("clicked open 11");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form11").style.display = "block";
    document.getElementById("dialog11").style.display = "block";
    currentDialog = dialog11;
  }
  function open12() {
    console.log("clicked open 12");
    document.getElementById("overlay").style.display = "block";
    document.getElementById("form12").style.display = "block";
    document.getElementById("dialog12").style.display = "block";
    currentDialog = dialog12;
  }
  
  function cancel1() {
    console.log("Cancel 1 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="1"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog1").style.display = "none";
    currentDialog = null;
}
function cancel2() {
    console.log("Cancel 2 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="2"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog2").style.display = "none";
    currentDialog = null;
}
function cancel3() {
    console.log("Cancel 3 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="3"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog3").style.display = "none";
    currentDialog = null;
}
function cancel4() {
    console.log("Cancel 4 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="4"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog4").style.display = "none";
    currentDialog = null;
}
function cancel5() {
    console.log("Cancel 5 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="5"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog5").style.display = "none";
    currentDialog = null;
}
function cancel6() {
    console.log("Cancel 6 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="6"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog6").style.display = "none";
    currentDialog = null;
}
function cancel7() {
    console.log("Cancel 7 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="7"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog7").style.display = "none";
    currentDialog = null;
}
function cancel8() {
    console.log("Cancel 8 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="8"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog8").style.display = "none";
    currentDialog = null;
}
function cancel9() {
    console.log("Cancel 9 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="9"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog9").style.display = "none";
    currentDialog = null;
}
function cancel10() {
    console.log("Cancel 10 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="10"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog10").style.display = "none";
    currentDialog = null;
}
function cancel11() {
    console.log("Cancel 11 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="11"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog11").style.display = "none";
    currentDialog = null;
}
function cancel12() {
    console.log("Cancel 12 button clicked");
    $('input[type="checkbox"]').prop('checked', false);
    $('img[id^="12"]').css("display", "none");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog12").style.display = "none";
    currentDialog = null;
}

  function submitPrint1() {
    console.log("Submit print 1 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print1").style.display = "none";
    document.getElementById("dialog1").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint2() {
    console.log("Submit print 2 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print2").style.display = "none";
    document.getElementById("dialog2").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint3() {
    console.log("Submit print 3 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print3").style.display = "none";
    document.getElementById("dialog3").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint4() {
    console.log("Submit print 4 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print4").style.display = "none";
    document.getElementById("dialog4").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint5() {
    console.log("Submit print 5 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print5").style.display = "none";
    document.getElementById("dialog5").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint6() {
    console.log("Submit print 6 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print6").style.display = "none";
    document.getElementById("dialog6").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint7() {
    console.log("Submit print 7 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print7").style.display = "none";
    document.getElementById("dialog7").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint8() {
    console.log("Submit print 8 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print8").style.display = "none";
    document.getElementById("dialog8").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint9() {
    console.log("Submit print 9 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print9").style.display = "none";
    document.getElementById("dialog9").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint10() {
    console.log("Submit print 10 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print10").style.display = "none";
    document.getElementById("dialog10").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint11() {
    console.log("Submit print 11 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print11").style.display = "none";
    document.getElementById("dialog11").style.display = "none";
    deduct();
    currentDialog = null;
  } 
  function submitPrint12() {
    console.log("Submit print 12 clicked");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("print12").style.display = "none";
    document.getElementById("dialog12").style.display = "none";
    deduct();
    currentDialog = null;
  } 

function deduct() {
    amtDeducted = 0.00;
    if(cyan){
        amtDeducted = amtDeducted + .07;
    }
    if(magenta){
        amtDeducted = amtDeducted + .07;
    }
    if(yellow){
        amtDeducted = amtDeducted + .07;
    }
    if(black){
        amtDeducted = amtDeducted + .04;
    }
    
    if (amtDeducted > money) {
        document.getElementById("error").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
    if (money < 0) {
        document.getElementById("arrest").style.display = "block";
        return;
    }

    money = money - amtDeducted;
    money = money.toFixed(2);
    cyan = false;
    magenta = false;
    yellow = false;
    black = false;

    console.log("Money remaining = " + money);
    
    updateMoney();
  }
  
function updateMoney() {
    $('#money').text('$' + money);
}

  function closeError() {
    document.getElementById("error").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  function closeArrest() {
    console.log("Close Arrest called");
    $("#blackScreen").css("display", "flex").animate({ opacity: 1 }, 3000);

    $("#badText").css("display", "block").delay(2000).animate({ opacity: 1 }, 1000);
  }

function restart() {
    location.reload();
}

function reset() {
    $("#resetScreen").css("display", "flex").animate({ opacity: 1 }, 1000);
    $("#resetText").css("display", "block").delay(2000).animate({ opacity: 1 }, 1000);
}

function stay() {
    document.getElementById("resetScreen").style.display = "none";
    document.getElementById("resetText").style.display = "none";
}
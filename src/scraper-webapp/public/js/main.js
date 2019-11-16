//This function disables/enables select inputs according to auto checkbox
function AutoScrap() {
  var checkBox = document.getElementById("autoScrap");
  var text = document.getElementsByClassName("inputfields");
  var select = document.getElementsByClassName("select");
  var daily = text[0];
  var weekly = text[1];
  var datePicker = document.getElementById("txtDate");

  if (checkBox.checked) {
    daily.disabled = false;
    weekly.disabled = false;
    datePicker.disabled = false;
  } else {
    daily.disabled = true;
    weekly.disabled = true;
    datePicker.disabled = true;
    select[0].disabled = true;
    select[1].disabled = true;
  }
}

//This function disables/enables dropdown of day pick according to select input
function dayPick() {
  var checkBox = document.getElementsByClassName("inputfields")[0];
  console.log(checkBox);
  var text = document.getElementsByClassName("select")[0];
  console.log(text);

  if (checkBox.checked) {
    text.disabled = false;
    document.getElementsByClassName("select")[1].disabled = true;
  } else {
    text.disabled = true;
  }
}

//This function disables/enables dropdown of week pick according to select input
function weekPick() {
  var checkBox = document.getElementsByClassName("inputfields")[1];
  console.log(checkBox);
  var text = document.getElementsByClassName("select")[1];
  console.log(text);

  if (checkBox.checked) {
    text.disabled = false;
    document.getElementsByClassName("select")[0].disabled = true;
  } else {
    text.disabled = true;
  }
}

//functions for input field- add file in addition to normal text input field
function HandleBrowseClick() {
  var fileinput = document.getElementById("browse");
  fileinput.click();
}

function Handlechange() {
  var fileinput = document.getElementById("browse");
  var textinput = document.getElementById("filename");
  textinput.value = fileinput.value;
}

// Function to restrict calender(for future dates only and one year limit!)
$(function() {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  var nextYear = dtToday.getFullYear() + 1;
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var minDate = year + "-" + month + "-" + day;
  var maxDate = nextYear + "-" + month + "-" + day;

  $("#txtDate").attr("min", minDate);
  $("#txtDate").attr("max", maxDate);
});

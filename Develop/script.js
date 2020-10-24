var crtDate = moment().format("MMMM Do YYYY, h:mm:ss a");

$("#currentDay").append(crtDate);
console.log(crtDate);

//targeting the hour block text area
$("#9hour .description").val(localStorage.getItem("9hour"));
$("#10hour .description").val(localStorage.getItem("10hour"));
$("#11hour .description").val(localStorage.getItem("11hour"));
$("#12hour .description").val(localStorage.getItem("12hour"));
$("#1hour .description").val(localStorage.getItem("1hour"));
$("#2hour .description").val(localStorage.getItem("2hour"));
$("#3hour .description").val(localStorage.getItem("3hour"));
$("#4hour .description").val(localStorage.getItem("4hour"));
$("#5hour .description").val(localStorage.getItem("5hour"));

//1. on click for save button
//1a. in on click this where you set local storage
//3. for each separate time block, getitem local storage
$(".saveBtn").on("click", function () {
  var dayDesc = $(this).siblings(".description").val();
  var dayHour = $(this).parent().attr("id");
  localStorage.setItem(dayHour, dayDesc);
});

// var momentTime = moment().format("LT");
// var currentTime = document.getElementById("9hour").innerText;

$(".hour").each(function () {
  var momentTime = moment().format("LT");
  var currentTime = parseInt($(".hour").text());
  console.log(momentTime);
  console.log(currentTime);
  console.log(typeof currentTime);
  if (currentTime < momentTime) {
    $(this).addClass("past");
  } else if (currentTime > momentTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
});

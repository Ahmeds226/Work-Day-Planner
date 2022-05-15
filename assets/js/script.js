// Jquery and Jumbotron now has current day implemented into it
$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMM Do"));

  // Sets the text and the hour into a local storage
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function () {
    var btn = $(this).parent().attr("id");
    console.log("btn", btn);

    var text = $(this).siblings(".description").val();
    console.log("text", text);

    localStorage.setItem(btn, text);
  });

  // Displayed the text from the local storage onto the screen via description
  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12am .description").val(localStorage.getItem("12am"));
  $("#1pm .description").val(localStorage.getItem("1pm"));
  $("#2pm .description").val(localStorage.getItem("2pm"));
  $("#3pm .description").val(localStorage.getItem("3pm"));
  $("#4pm .description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));

  // Current time
  $(".description").each(function (calender) {
    let currentTime = moment().hours();
    console.log(currentTime);

    // Past color = grey
    if (currentTime > calender + 9) {
      $(this).addClass("past");
    }
    // Present color = red
    if (currentTime == calender + 9) {
      $(this).addClass("present");
    }
    // Future color = green
    if (currentTime < calender + 9) {
      $(this).addClass("future");
    }
  });
});

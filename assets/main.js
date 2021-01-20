$(document).ready(function () {

// now variable returns formatted date in Jan-Dec 01-31 20XX
var nowFormatted = dayjs().format("MMM DD YYYY");

var currentTime = dayjs().format("h:mm A") // Current time returns clock time in XX:XX AM/PM
console.log(dayjs())

var workdayHoursArray = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']; // Array containing all the hours in workday. Used to create the number of rows and display time.
// 
$("#currentDay").text(currentTime + " on: " + nowFormatted); // currentDay div text

//

function createTable() {
    
    var container = $(".container"); // variable for main content container

    // repeat this function for a total of 8 times (num hours in workday)
    for (var i = 0; i < workdayHoursArray.length; i++) {
        // Each row's div container
        var divRow = $("<div>").addClass("row time-block").appendTo(container);

        // Hour count div on left hand side of row
        var timeDiv = $("<div>").addClass("col-md-1 hour").appendTo(divRow); 
        timeDiv.text(workdayHoursArray[i]);

        // Textarea in middle of row
        var textAreaInput = $("<textarea>").addClass("col-md-10 description").appendTo(divRow);
        textAreaInput.text("");

        // Save button on right hand side of row
        var saveButton = $("<button>").addClass("col-md-1 saveBtn").appendTo(divRow);
        saveButton.attr("type", "submit");
        // button image found on button
        var buttonImg = $("<i>").addClass("fas fa-save").appendTo(saveButton);
    }

}
createTable() // Calling create table when page first loads

// Function used to check current time and color each row depending on past, present, or future
function checkTime() {
    
}

})    

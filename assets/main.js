$(document).ready(function () {

// now variable returns formatted date in Jan-Dec 01-31 20XX
var nowFormatted = dayjs().format("MMM DD YYYY");

var currentTimeHeader = dayjs().format("h:mm A") // returns header clock time in XX:XX AM/PM
var currentTime = dayjs().format("h:mm"); // returns current time in XX:XX 

console.log(dayjs())

var workdayHoursArray = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']; // Array containing all the hours in workday. Used to create the number of rows and display time.
// 
$("#currentDay").text(currentTimeHeader + " on: " + nowFormatted); // currentDay div text

//

function createTable() {
    
    var container = $(".container"); // variable for main content container

    // repeat this function for a total of 8 times (num hours in workday)
    for (var i = 0; i < workdayHoursArray.length; i++) {
        // Each row's div container
        var divRow = $("<div>").addClass("row time-block").appendTo(container);
        // Adding ID attribute to each row to parse the int in the checkTime func
        divRow.attr("id", [i + 8])

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
    // Checks each time-block div 
    $(".time-block").each(function() {
        // variable to parse the int of the time block ID
        var timeParse = parseInt($(this).attr("id"));

        // If rows times are in the future
        if (timeParse > currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        // If current time equals the row time
        } else if (timeParse == currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");

        // If rows times are in the past
        } else {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
    })
}
checkTime() //Calls checkTime function

// Button click event for the save button
$(".saveBtn").on("click", function() {

})

})    

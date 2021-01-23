$(document).ready(function () {

// now variable returns formatted date in Jan-Dec 01-31 20XX
var nowFormatted = dayjs().format("MMM DD YYYY");

// returns header clock time in XX:XX AM/PM
var currentTimeHeader = dayjs().format("h:mm A") 
console.log(dayjs())

// Array containing all the hours in workday. Used to create the number of rows and display time.
var workdayHoursArray = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']; 

// Array containing all workday ours in military time. Used to compare to actual time and show past/present/future
var workdayHoursMilitaryTimeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

 // currentDay div text
$("#currentDay").text(currentTimeHeader + " on: " + nowFormatted);

// Function that dynamically creates the html content and attributes
function createTable() {
    
    // variable for main content container
    var container = $(".container"); 

    // repeat this function for a total of 8 times (num hours in workday)
    for (var i = 0; i < workdayHoursArray.length; i++) {

        // Each row's div container
        var divRow = $("<div>").addClass("row time-block").appendTo(container);
        // Adding ID attribute to each row to parse the int in the checkTime func
        divRow.attr("id", (workdayHoursMilitaryTimeArray[i]));

        // Hour count div on left hand side of row
        var timeDiv = $("<div>").addClass("col-md-1 hour").appendTo(divRow); 
        timeDiv.text(workdayHoursArray[i]);

        // Textarea in middle of row
        var textAreaInput = $("<textarea>").addClass("col-md-10 description").appendTo(divRow);
        textAreaInput.attr("id", "description" + workdayHoursMilitaryTimeArray[i]);

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

    var currentTimeHour = dayjs().format("H"); // Turns current time to number

    // Checks each time-block div 
    $(".time-block").each(function() {
        // variable to parse the int of the time block ID
        var timeParse = Number($(this).attr("id"));

        // If rows times are in the future
        if (timeParse > currentTimeHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        // If current time equals the row time
        } else if (timeParse == currentTimeHour) {
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

// function below is called and run when the page loads
function init() {
    retrieveTodos();
}

// function that retrieves data from localStorage
function retrieveTodos() {

    // retrieves our stored text and stored time from localStorage and display it onto our page.
    $("#description9").val(localStorage.getItem("description9"));
    $("#description10").val(localStorage.getItem("description10"));
    $("#description11").val(localStorage.getItem("description11"));
    $("#description12").val(localStorage.getItem("description12"));
    $("#description13").val(localStorage.getItem("description13"));
    $("#description14").val(localStorage.getItem("description14"));
    $("#description15").val(localStorage.getItem("description15"));
    $("#description16").val(localStorage.getItem("description16"));
    $("#description17").val(localStorage.getItem("description17"));

}

// Button click event for the save button
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    // stores the values of the user's text area input and it's ID into variables 
    var todoText = $(this).siblings(".description").val();
    var todoTime = $(this).siblings(".description").attr("id");

    // Stores todoTime as the key, todoText as the value
    localStorage.setItem(todoTime, todoText)
    retrieveTodos();
})

// Calls init function on page load
init();

})    

$(document).ready(function(){  

    // display current date
    $('#currentDay').append(moment().format('dddd MMMM Do, YYYY, LT')); 

    // use 24 hour time for past, present, future
    var time24Hr = moment().format("HH"); 
    
    // set 24 hour time as work hours for each time block
    var times = [9, 10, 11, 12, 13, 14, 15, 16, 17]; 
 
        times.forEach((time, i) => {
            workTime = moment(time.toString(), "LT").format("hh:mm A"); 
                $("#time-"+ i).text(workTime); 
        
            var workTime24Hr = moment(time.toString(), "LT").format("HH"); 

            if(time24Hr === workTime24Hr) {
                $("#text-" + i).css({"background-color":"#ff6961", "color":"white"})
            } else if (time24Hr < workTime24Hr) {
                $("#text-" + i).css({"background-color":"#77dd77", "color":"white"})
            } else if (time24Hr > workTime24Hr) {
                $("#text-" + i).css({"background-color":"#d3d3d3", "color":"white"})
            }   
        });

    $(".saveBtn").on("click", function(event){ 
        event.preventDefault(); 
        // data number same as var times - key
        var toDoId = $(this).data("number");
        // get value of text area - value
        var toDoVal = $(this).parent().children("textarea").val();
        // save key value pairs to storage
        localStorage.setItem(toDoId, toDoVal);   
    }); 

    // get local storage
    for (var i = 0; i < localStorage.length; i++) { 
        // convert string value of the key index to a number
        var hour = parseInt(localStorage.key(i));
        // get index number for each times in array
        var hourIndex = times.indexOf(hour);
        // retrieve each index with its corresponding text  value
        var details = localStorage.getItem(hour);
        // join text and index
        $("#text-" + hourIndex).val(details);
    }
});  

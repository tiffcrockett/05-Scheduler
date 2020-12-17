$(document).ready(function(){  

    // display current date
    $('#currentDay').append(moment().format('dddd MMMM Do, YYYY, LT')); 

    // use 24 hour time for past, present, future
    var time24Hr = moment().format("HH"); 
    
    // set 12 hour time as work hours for each time block
    var numbers = [9, 10, 11, 12, 13, 14, 15, 16, 17]; 

        numbers.forEach((number, i) => { 
             workTime = moment(number.toString(), "LT").format("hh:mm A"); 
                $("#time-"+ i).text(workTime); 
                console.log(workTime);

            var workTime24Hr = moment(number.toString(), "LT").format("HH"); 
                console.log(workTime24Hr); 
                console.log(time24Hr);

            if(time24Hr === workTime24Hr) {
                $("#text-" + i).css({"background-color":"#ff6961", "color":"white"})
            } else if (time24Hr < workTime24Hr) {
                $("#text-" + i).css({"background-color":"#77dd77", "color":"white"})
            } else if (time24Hr > workTime24Hr) {
                $("#text-" + i).css({"background-color":"#d3d3d3", "color":"white"})
            }   
        }); 

    var workHour = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    // key, each work hour  val, input text - combine to local storage
    for(var i = 0; i < workHour.length; i++) {
        var hourInput = $("#text-"+i).val();
        localStorage.getItem("hourInput");

          // check local storage??
        if(localStorage.getItem("hourInput") === null) {
            $(this).push($("#text-").val());
        } 
    }
 
    // bind the save button to the work hour and val of the textarea  
    $(".saveBtn").on("click", function(event){ 
        event.preventDefault();
        var toDoId = $(this).data("number");
        var index = items.filter(".active").index();
        var toDoVal = $("#text-".val(), toDoId);
        hourInput = toDoId, toDoVal;
        $(this).push($("#text-"+ index );

        localStorage.setItem(toDoId, toDoVal);   
     
        console.log(toDoId, toDoVal);
    }) 

    window.onload = function() { 
       for(var i = 0; i < localStorage.length; i++){
           $("body").append(localStorage.getItem("hourInput"));
       }
    }
});  


$(document).ready(function(){ 

    // display current date
    $('#currentDay').append(moment().format('dddd MMMM Do, YYYY, LT')); 

    // use 24 hour time for past, present, future
    var time24Hr = moment().format("HH"); 
    
    // set 12 hour time as work hours for each time block
    var numbers = [9, 10, 11, 12, 13, 14, 15, 16, 17]; 

        numbers.forEach((number, i) => { 
            workTime = moment(number.toString(), "LT").format("hh:mm A"); 
                console.log("#time-"+i);
                $("#time-"+ i).text(workTime); 

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

            // var toDos = localStorage.getItem("toDos");
            
                 
            $(".saveBtn").on("click", function(event){ 
                var toDoId = $(this).data("number");
                var toDoVal = $("#"+toDoId).val();
                localStorage.setItem("toDos", toDoVal);   

                console.log(toDoId, toDoVal);

            })  
        }
    )}         
);  
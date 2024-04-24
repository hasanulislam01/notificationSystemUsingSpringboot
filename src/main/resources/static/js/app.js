var ws;
var count = 0;
var checkConn = 0;
var isMute = 0;




 function setConnected(connected){
     $("#connect").prop("disabled", connected);
     $("#disconnect").prop("disabled", !connected);
 }

function connect(){
    ws = new WebSocket('ws://localhost:8080/user');
    ws.onmessage = function(data){
        helloWorld(data.data);
//        console.log(helloWorld(data.data));
    }
     setConnected(true);
    console.log("WebSocket Connection Successfull");
    checkConn = 1;
    console.log("Check "+checkConn);
}

 function disconnect(){
     if(ws!= null){
         ws.close();
     }
     setConnected(false);
     console.log("WebSocket Disconnected");
     checkConn = 0;
     console.log("Check "+checkConn);
 }

//function sendData(){
//    var data = JSON.stringify({
//        'user' : $("#user").val()
//    });
//    console.log(data);
//    ws.send(data);
//    notification();
//
//
////    count++;
////    console.log(count);
////    notification(count);
//    // document.getElementById("")
//
//}


//function sendData(){
//    var data = JSON.stringify({
//        'user' : $("#user").val()
//    });
//
//    console.log(data);
//
//    if (!data) {
//            console.log("Data is empty");
//            return; // Exit the function if data is empty
//        }
//    else{
//        ws.send(data);
//        notification();
//    }
//}


function sendData(){
    var userValue = $("#user").val();

    if (!userValue) {
        console.log("User value is empty");
        return; // Exit the function if user value is empty
    }

    var data = JSON.stringify({
        'user' : userValue
    });

    console.log(data);

    if (data === '{}') {
        console.log("Data is empty");
        return; // Exit the function if data is empty
    }

    ws.send(data);
//    sendDataToServer(data);
    notification();
}





function helloWorld(message){
    $("#helloworldmessage").append(" "+message+" ");
    // $("#notification-count").append(message);
//    $("#helloworldmessage").html("<li>" +message+ "</li>");

    // Create an "li" node:
    const node = document.createElement("li");

    //var message = "Hello";
    // Create a text node:
    const textnode = document.createTextNode(message);

    // Append the text node to the "li" node:
    node.appendChild(textnode);

    // Append the "li" node to the list:
//    document.getElementById("myList").appendChild(node);
//    count++;
//    console.log(count);
//    notification(count);
const firstChild = document.getElementById("myList").firstChild;

    // Insert the new list item before the first child of the list
    document.getElementById("myList").insertBefore(node, firstChild);

}

function notification(){
//   $("#notification-count").append(notification);
    // $("#notification-count").append("<span>" + notification + "</span>");
//    if(checkConn==1){
//        $("#notification-count").html(""+notification+"");
//    }
//    else{
//        console.log("WebSocket is disconnected!")
//    }
//    $("#notification-count").html(""+notification+"");

//$("#notification-count").html(""+notification+"");

    if(checkConn==1){
            count++;
            console.log(count);
            $("#notification-count").html(""+count+"");
            if(isMute==0){
                play();
            }
            
        }
        else{
            console.log("WebSocket is disconnected! . print from checing")
        }

}

function setMuteValue(){
    isMute = 0;
}

// Notification Mute
function muteState(){
    // console.log("This is from Mute State!");
    //  disconnect();
     isMute = 1;
//    setTimeout(connect, 10000);
    console.log("Mute Successfully!");
}

// Notification Unmute
function unMuteState(){
    connect();
    isMute = 0;
    console.log("This is Unmute State!")
}

function notificationCountHide(){
    $("#notification-count").html("");
    count = 0;
}

function checkAutoFunctionCall(){
    console.log("Automatically Function Called!");
}

function muteFor1Minute(){
    // disconnect();
    isMute = 1
    setTimeout(setMuteValue, 60000);
    
    console.log("Mute Successfull for 1 minute!");
}

function muteFor1Hour(){
    // disconnect();
    isMute = 1;
    setTimeout(setMuteValue, 3600000);
    console.log("Mute Successfull for 1 hour!");
}

function muteFor6Hour(){
    // disconnect();
    isMute = 1;
    setTimeout(setMuteValue, 21600000);
    console.log("Mute Successfull for 6 hour!");
}

function play() { 
    var audio = new Audio( 
'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'); 
    audio.play(); 
} 



function sendDataToServer() {

    var formData = $("form").serialize();
    // Make an AJAX POST request
    $.ajax({
        type: "POST",
        url: "/insertion", // Your endpoint URL
        data: formData,
        success: function(response) {
            // Handle success response if needed
            console.log("Data inserted successfully!");
        },
        error: function(xhr, status, error) {
            // Handle error response if needed
            console.error("Error occurred while inserting data:", error);
        }
    });

}









$(function(){
    connect();

    $("form").on('submit', function(e){
        e.preventDefault();
        sendDataToServer();

    });
    

    // $("#connect").click(function(){
    //     connect();
    // });

    //  $("#disconnect").click(function(){
    //      disconnect();
    //  });

    $("#connect").hide();
    $("#disconnect").hide();

    $("#send").click(function(){
        sendData();
    });

    // $("#mute-btn").click(function(){
    //     muteState();
    // });

    $("#unmute-btn").click(function(){
        unMuteState();
    });

    $("#notification-count-hide").click(function(){
        notificationCountHide();
    });

    $("#mute-for-1-minute").click(function(){
        muteFor1Minute();
    });

    $("#mute-for-1-hour").click(function(){
        muteFor1Hour();
    });

    $("#mute-for-6-hour").click(function(){
        muteFor6Hour();
    });

    $("#mute-for-until").click(function(){
        muteState();
    });



    checkAutoFunctionCall();

});


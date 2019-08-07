var firebaseConfig = {
    apiKey: "AIzaSyAdg1CWCCX2VuRDQuOxSwSUrQws-IIitGc",
    authDomain: "hunters-homework-project.firebaseapp.com",
    databaseURL: "https://hunters-homework-project.firebaseio.com",
    projectId: "hunters-homework-project",
    storageBucket: "",
    messagingSenderId: "923461931032",
    appId: "1:923461931032:web:db1ca4532f7e9e2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

// $(document).on("click", ".search", function() {
//     let splitDate = $(".startDate").val().split("/");
//     pushToDataBase($(".name").val(), $(".role").val(), new Date(parseInt(splitDate[2]), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])), $(".rate").val());
//     $(".trainName").val("");
//     $(".").val("");
//     $(".startDate").val("");
//     $(".rate").val("");
// });

// button for adding trains
$(".add-train-button").on("click", function (event) {
    event.preventDefault();

    //grabs user input
    var trainName = $(".trainName")
        .val()
        .trim();
    var destination = $(".destination")
        .val()
        .trim();
    var firstTime = moment(
        $(".firstTime")
            .val()
            .trim(),
        "HH:mm"
    ).format("X");
    var freq = $(".freq")
        .val()
        .trim();


    //create local "temporary" objects for holding employee data
    var newTrain = {
        train: trainName,
        dest: destination,
        time: firstTime,
        freq: freq,
    }

    console.log(newTrain.train);
    console.log(newTrain.dest);
    console.log(newTrain.time);
    console.log(newTrain.freq);

    alert("Train successfully added");

    $(".trainName").val("");
    $(".destination").val("");
    $(".firstTime").val("");
    $(".freq").val("");


    var nextArrival = 

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        // $("<td>").text(nextArrival),
        // $("<td>").text(minAway),
    );
    
    $(".results-titles > tbody").append(newRow);
})

// var nextArrival = 





// Returns months from seconds
// function calculateMonthsWorked(seconds) {
//     return Math.round(seconds / 60 / 60 / 24 / 30);
// }

// function calculatePaid(rate, months) {
//     return Math.round(rate * months);
// }




var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var firstTime = moment($("#firstTime").val(), "hh:mm").subtract(1, "years").format("X");

var frequency = $("#freq").val();

//current time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


// database.ref().on("child_added", function (snapshot) {
//     displayTrains(snapshot.val());
// });

// function displayTrains(trains) {
//     console.log(train.train);
//     let $tableRow = $("<tr>");
//     let $dataTrainName = $("<td>").html(train.train.name);
//     let $dataDestination = $("<td>").html(train.train.role);
//     let $dataFrequency = $("<td>").html(train.train.startDate);
//     let $dataArrival = $("<td>").html(calculateNextArrivals(train.train.minutesArrival));
//     // let $dataRate = $("<td>").html(employee.employee.rate);
//     let $dataMinAway = $("<td>").html(calculateMinAway(employee.employee.rate, calculateNextArrival(employee.employee.secondsWorked)));
//     $tableRow.append($dataTrainName, $dataDestination, $dataFrequency, $dataArrival, $dataMinAway, $("<hr>"));
//     $(".employees").append($tableRow);
// }

// function pushToDataBase(name, role, startDate, rate) {
//     database.ref().push({
//         employee: {
//             name: name,
//             role: role,
//             startDate: startDate.toDateString(),
//             secondsWorked: (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay()).getTime() - startDate.getTime()) / 1000,
//             rate: rate
//         }
//     });

// }
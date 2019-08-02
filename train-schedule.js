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
//     $(".name").val("");
//     $(".role").val("");
//     $(".startDate").val("");
//     $(".rate").val("");
// });

database.ref().on("child_added", function (snapshot) {
    displayEmployees(snapshot.val());
});

function displayEmployees(employee) {
    console.log(employee.employee);
    let $tableRow = $("<tr>");
    let $dataTrainName = $("<td>").html(employee.employee.name);
    let $dataDestination = $("<td>").html(employee.employee.role);
    let $dataFrequency = $("<td>").html(employee.employee.startDate);
    let $dataArrival = $("<td>").html(calculateNextArrivals(employee.employee.secondsWorked));
    // let $dataRate = $("<td>").html(employee.employee.rate);
    let $dataMinAway = $("<td>").html(calculateMinAway(employee.employee.rate, calculateNextArrival(employee.employee.secondsWorked)));
    $tableRow.append($dataTrainName, $dataDestination, $dataFrequency, $dataArrival, $dataMinAway, $("<hr>"));
    $(".employees").append($tableRow);
}

function pushToDataBase(name, role, startDate, rate) {
    database.ref().push({
        employee: {
            name: name,
            role: role,
            startDate: startDate.toDateString(),
            secondsWorked: (new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay()).getTime() - startDate.getTime()) / 1000,
            rate: rate
        }
    });

}

// Returns months from seconds
// function calculateMonthsWorked(seconds) {
//     return Math.round(seconds / 60 / 60 / 24 / 30);
// }

// function calculatePaid(rate, months) {
//     return Math.round(rate * months);
// }
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var firstTime = moment($("#firstTime").val().trim(), "hh:mm").subtract(1, "years").format("X");

var frequency = $("#freq").val().trim();

//current time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
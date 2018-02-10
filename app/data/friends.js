var userEntry = {};

$("#submit").on("click", function(event) {
    event.preventDefault();

    var newUserEntry = {
        name: $("#nameInput").val(),
        photo: $("#imgLinkInput").val(),
        scores: [
            $("#questionOneInput").val(),
            $("#questionTwoInput").val(),
            $("#questionThreeInput").val(),
            $("#questionFourInput").val(),
            $("#questionFiveInput").val(),
            $("#questionSixInput").val(),
            $("#questionSevenInput").val(),
            $("#questionEightInput").val(),
            $("#questionNineInput").val(),
            $("#questionTenInput").val()
        ]
    };
    
    console.log(newUserEntry);

    $.post("/api/friends"), newUserEntry, function(req, res) {
        (userEntry).push(newUserEntry);
        res.json(newUserEntry);
    };

    // Compare the difference between current user's scores against those from other users

    var userScores = newUserEntry.scores;
    console.log(userScores[1]);

    for (var i = 0; i < userScores.length; i++) {
        console.log(userScores[0]);
        
    }
    // Add up the differences to calculate the totalDifference.

    // Use the absolute value of the differences

    // Display image of closest match

});

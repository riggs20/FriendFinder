/* 
You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}

1.Determine the user's most compatible friend using the following as a guide:

    *Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    
    *With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

        Example: 
        -User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        -User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        -Total Difference: 2 + 1 + 2 = 5

    Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 

    The closest match will be the user with the least amount of difference.

2. Once you've found the current user's most compatible friend, display the result as a modal pop-up.

    *The modal should display both the name and picture of the closest match.
*/

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

    var userScores = newUserEntry.scores;
    console.log(userScores[1]);



    // for (var i = 0; i < userScores.length; i++) {
    //     console.log(userScores[0]);
        
    // }


});

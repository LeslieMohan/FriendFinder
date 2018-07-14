var friends = require('../data/friends.js');

module.exports = function(app) {
    // API GET Request
    app.get("/api/friends", function(request, response) {
      response.json(friends);
    });
  
  
    // API POST Requests
    //when user submits their answers this sends data to the server, then the server saves data
    app.post("/api/friends", function(request, response) {
    
     var userInput = request.body;
        var userSelections = userInput.scores;
        var match = {
          name: "",
          photo: "",
          difference: 500
        };
  
        for (var i = 0; i < friends.length; i++) {
          var totalDifference = 0;
          for (var j = 0; j < userSelections.length; j++) {
            totalDifference += Math.abs(friends[i].scores[j] - userResponse[j]);
            
            if (totalDifference <= match.difference){
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.difference = totalDifference;
            }
          }
        }
  
        friends.push(userInput);
  
        response.json(match);
  
      });
    };
  
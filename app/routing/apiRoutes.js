var friends = require('../data/friends.js');
var path = require("path");

module.exports = function(app) {
    // API GET Request
    app.get("/api/friends", function(request, response) {
      response.json(friends);
    });
  
  
    app.post("/api/new", function(request, response) {
      //make variables to find a new match 
        var newMatch = request.body;
        var newScore = newMatch.scores;
        var total = 0;
        var bestMatch = 100;
        var index = -1;

        for(var i = 0; i < friends.length; i++){
            //Go through list of friends in db
            total = 0;
            console.log("for loop with i: " +total)
            
            for(var j = 0; j < newScore.length; j++){
                // calculate total value of each friend
                var diff = Math.abs(newScore[j] - friends[i].scores[j]);
                total += diff;
                console.log("for loop with j: " +total)
            }
            if(total < bestMatch){
                bestMatch = total;
                index = i;
                console.log("best match total: " +total)
            }
        }
        console.log('Best Match:', friends[index]);
        
        friends.push(newMatch);
        response.json(friends[index]);
    });
};
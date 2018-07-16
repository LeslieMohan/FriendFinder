var friends = require('../data/friends.js');
var path = require("path");

module.exports = function(app) {
    // API GET Request
    app.get("/api/friends", function(request, response) {
      response.json(friends);
    });
  
  
    app.post("/api/new", function(request, response) {
      //make variables to find match
        var newFriend = request.body;
        var newScore = newFriend.scores;
        var total = 0;
        var bestMatch = 1000;
        var index = -1;

        for(var i = 0; i < friends.length; i++){
            //Go through list of friends in db
            total = 0;

            for(var j = 0; j < newScore.length; j++){
                // calculate total value of each friend
                var diff = Math.abs(newScore[j] - friends[i].scores[j]);
                total += diff;
            }
            if(total < bestMatch){
                bestMatch = total;
                index = i;
            }
        }
        console.log('Best Match:', friends[index]);
        
        friends.push(newFriend);
        response.json(friends[index]);
    });
};
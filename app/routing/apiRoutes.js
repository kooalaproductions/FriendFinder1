var friends = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function (req, res) {


		var match = {
			name: "",
			photo: "",
			checkDif: 50
		};

		var userInfo = req.body;
		var userName = userInfo.name;
		var userPic = userInfo.photo;
		var userTotal = userInfo.scores;
		var totalDifference = 0;

		//loop through the friends
		for (var i = 0; i < friends.length; i++) {

			console.log(friends[i].name);
			totalDifference = 0;

			for (var j = 0; j < friends[i].scores[j]; j++) {
				totalDifference += Math.abs(parseInt(userTotal[j]) - parseInt(friends[i].scores[j]));
				if (totalDifference <= match.checkDif) {
					match.name = friends[i].name;
					match.photo = friends[i].photo;
					match.checkDif = totalDifference;
				}
			}
		}

		friends.push(userInfo);

		res.json(match);

	});

}
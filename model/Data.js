/**
 * Created by Daniel on 20/06/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

var leaderboardSchema = new Schema ({
    id: Schema.Types.ObjectId,
    userId : Schema.Types.ObjectId,
    rank : Number,
    win: Number,
    games: Number
});

var User = mongoose.model('User', userSchema);
var Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports.User = User;
module.exports.Leaderboard = Leaderboard;

//on peut ici mettre des helpers pour faciliter les requêtes avec la BDD
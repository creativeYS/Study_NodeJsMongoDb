var express = require('express'),
config = require('./server/configure'),
app = express();
mongoose = require('mongoose');

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

mongoose.connect('mongodb://localhost/imgPloadr');
mongoose.connection.on('open', function() {
    console.log('Mongoose conected.');
});

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});





/* monggodb test
var MongoClient = require('mongodb').MongoClient;

var sampleDb = 'mongotest';
var sampleCollection = 'testing';

MongoClient.connect('mongodb://localhost:27017/mongotest', function(err, client) {
    if(err) {
        console.log('Fail to connect');
        return
    }
    var db = client.db(sampleDb)
    if(!db) console.log('Fail to use DB ' + sampleDb);

    var collection = db.collection(sampleCollection);
    if(!collection) console.log('Fail to use Collection' + sampleCollection);

    console.log('Connected to mongodb!!');

    var items = [ {
        'title' : 'Snow Crash',
        'author' : 'Neal Stephenson'
    }, {
        'title' : 'Snow Crash',
        'author' : 'Neal Stephenson'
    }, {
        'title' : 'Hidden',
        'author' : 'YS. Kim'
    }];
    
    collection.insert(items, function(err, result) {
    
        if(err) {
            console.log('Fail to Insert');
            return;
        }
    
        console.log(result.ops.length + ' record inserted.');
        console.log(result.ops[0]._id + ' - ' + result.ops[0].title + ', ' + result.ops[0].author);
    
        collection.findOne({title:'Snow Crash'}, function(err, doc) {
    
            console.log(doc._id + ' - ' + doc.title + ', ' + doc.author);
            client.close();
        });
    });
});
// test end */

/* mongoose test
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mongotest',);
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

var Account = new Schema( {
    firstname: {type:String},
    lastname: {type:String},
    date_created: {type:Date, default:Date.now},
    visits: {type:Number, default:0},
    active:{type:Boolean, default:false},
    age:{type:Number, required:true, min:13, max:120}
});

Account.statics.findByAgeRange = function(min, max, callback) {
    this.find({ age : {$gt : min, $lte : max}}, callback);
};

Account.virtual('fullname').get(function() {
    return this.firstname + ' ' + this.lastname;
}).set(function(fullname){
    var parts = fullname.split(' ');
    this.firstname = parts[0];
    this.lastname = parts[1];
});

var AccountModel = mongoose.model('Account', Account);

AccountModel.findByAgeRange(18,30, function(err, accounts) {
    console.log(accounts.lnegth);
});

var newUser = new AccountModel({firstname:'kim', lastname:'yongsu'});

console.log(newUser.firstname);
console.log(newUser.lastname);
console.log(newUser.fullname);
console.log(newUser.date_created);
console.log(newUser.visits);
console.log(newUser.active);
console.log(newUser.age);
//newUser.age = 20;
newUser.fullname = 'jang daesung';
console.log(newUser.age);
//newUser.save();

AccountModel.find({age:{$gt : 18, $lt : 30}}, function(err, accounts) {
    console.log(accounts.length);
    mongoose.connection.close();
});
// test end
*/



    
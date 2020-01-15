var express = require('express'),
config = require('./server/configure'),
app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

/*
app.get('/', function(req, res) {
    res.send('Hello World');
});
*/

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

// mongoose test
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema( {
    username: {type:String},
    data_created: {type:Date, default:Date.now},
    visits: {type:Number, default:0},
    active:{type:Boolean, default:false}
});
// test end

console.log('End');
/*
var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
*/




    
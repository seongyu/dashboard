var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//var s3 = require('s3');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//var client = s3.createClient({
//  maxAsyncS3: 20,     // this is the default
//  s3RetryCount: 3,    // this is the default
//  s3RetryDelay: 1000, // this is the default
//  multipartUploadThreshold: 20971520, // this is the default (20 MB)
//  multipartUploadSize: 15728640, // this is the default (15 MB)
//  s3Options: {
//    accessKeyId: "AKIAJWD5UMP7UAN4RLXQ",
//    secretAccessKey: "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",
//    region: "ap-northeast-1"
//  }
//});
//
//var params = {
//  localFile: "/Users/LeonKim/mServer/dashboard/public/images/ic_in.png",
//
//  s3Params: {
//    Bucket: "parkingtalk",
//    Key: "parkingtalk/10/ic_in.png",
//    ACL : "public-read-write"
//  }
//};
//var uploader = client.uploadFile(params);
//uploader.on('error', function(err) {
//  console.error("unable to upload:", err.stack);
//});
//uploader.on('progress', function() {
//  console.log("progress", uploader.progressMd5Amount,
//      uploader.progressAmount, uploader.progressTotal);
//});
//uploader.on('end', function() {
//  console.log("done uploading");
//});



app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000,function(){
  console.log('app response...')
});
//module.exports = app;

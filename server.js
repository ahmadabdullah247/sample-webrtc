// require modules =============================================================================================
const express = require('express');
const path = require('path');
const cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;

// app middleware configuration ================================================================================
app.use(cors());
// Run the app by serving the static files in the dist directory
app.use('/audio',express.static(__dirname + '/samples/webrtc/audio'));
app.use('/images',express.static(__dirname + '/samples/webrtc/images'));
app.use('/libs',express.static(__dirname + '/samples/webrtc/libs'));
app.use('/js',express.static(__dirname + '/samples/webrtc/js'));
app.use('/css',express.static(__dirname + '/samples/webrtc/css'));



// routes ======================================================================================================
app.use('/', (req, res) => res.sendFile(path.join(__dirname + '/samples/webrtc/index.html')));

// start server ======================================================================================================
app.listen(port, () => console.log('Server is live on port : ', port));
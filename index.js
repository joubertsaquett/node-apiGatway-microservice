var http          = require('http');
const express     = require('express');
const httpProxy   = require('express-http-proxy');
const app         = express();
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
const helmet      = require('helmet');
const cors        = require('cors');

const userServiceProxy = httpProxy('http://localhost:3001');
const tServiceProxy = httpProxy('http://localhost:3002');

// Proxy request
app.all('/api1*', (req, res, next) => {
  userServiceProxy(req, res, next);
});

app.all('/api2*', (req, res, next) => {
  tServiceProxy(req, res, next);
});

app.use(cors());
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);

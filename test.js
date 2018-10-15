const crypto = require('crypto');
myhash = require('crypto').createHash('md5').update('jonnyhayes@gmail.com').digest('hex');
var sys = require("util");
console.log(myhash);

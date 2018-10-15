'use strict';

const crypto = require('crypto');
//const crypto  =  import crypto from 'crypto';
module.exports.submit = (event, context, callback) => {

  const requestBody = JSON.parse(event.body);
  const email = requestBody.email;
  const response = {

    statusCode: 200,
    body: JSON.stringify({

      md5email: crypto.createHash('md5').update(email).digest('hex'),

    }),
  };
  callback(null, response);
};

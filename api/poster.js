
'use strict';

module.exports.submit = (event, context, callback) => {
  let dynamicHtml = '<p>Hey Unknown!</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.emaily) {

    // myhash = crypto.createHash('md5').update('m@m.com').digest('hex');
  //  var hashe = crypto.md5.encrypt('mo@mo.com','asdasd1');
    // myhash = hash.update('m@m.com');
    dynamicHtml = `<p>Hey ${event.queryStringParameters.emaily}!</p> `;
  }

  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
    </style>
    <body>
      <h1>Landing Page</h1>
      ${dynamicHtml}<br>

    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  // callback is sending HTML back
  callback(null, response);
};

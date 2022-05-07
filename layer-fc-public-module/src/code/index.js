const getRawBody = require('raw-body');
const _ = require('lodash');

exports.handler = (req, resp, context) => {
  getRawBody(req, function(err, body) {
    resp.send(`layer is worked: ${_.isEmpty('hello')}`);
  });
}
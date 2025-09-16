
const timeout = require('connect-timeout');
timeout('5s')
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: 'Err 111',
  };
}
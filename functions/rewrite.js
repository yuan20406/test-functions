exports.handler = async function(event, context) {
  if (event.rawPath === '/old-path') {
    return {
      statusCode: 200,
      body: 'Rewritten',
    };
  } else {
    return {
      statusCode: 200,
      body: 'Normal Path',
    };
  }
}
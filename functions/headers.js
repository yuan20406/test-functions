exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'X-Custom-Header': 'Netlify-Test',
    },
    body: 'Headers Set',
  };
}
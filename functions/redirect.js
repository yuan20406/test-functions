exports.handler = async function(event, context) {
  return {
    statusCode: 301,
    headers: {
      Location: 'https://www.example.com',
    },
    body: '',
  };
}
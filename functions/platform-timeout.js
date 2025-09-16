exports.handler = async function(event, context) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 35000));
  
    return {
      statusCode: 200,
      body: 'Task Completed',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
}
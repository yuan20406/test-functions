exports.handler = async function(event, context) {
  const timeout = setTimeout(() => {
    return {
      statusCode: 200,
      body: 'Request Timeout',
    };
  }, 5000); // 设置5秒超时

  try {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    clearTimeout(timeout); // 清除超时
    return {
      statusCode: 200,
      body: 'Task Completed',
    };
  } catch (error) {
    clearTimeout(timeout);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
}

export default async function onRequest(context) {
  const timeout = setTimeout(() => {
    return new Response('Request Timeout',{
      status: 200
    })
  }, 5000)

  try {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    clearTimeout(timeout); // 清除超时
    return new Response ('Task Completed', {
      status: 200    
    })
  } catch (error) {
    clearTimeout(timeout);
    return new Response ('Internal Server Error', {
      status: 500    
    })
  }

}

export default async function onRequest(context) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 35000));
    return new Response ('Task Completed', {
      status: 200    
    });
  } catch (error) {
    return new Response ('Internal Server Error', {
      status: 500    
    });
  }
}
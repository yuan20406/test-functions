
export default async function onRequest(context) {
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Response('Request Timeout', { status: 408 })); // 用 408 更贴近超时语义
    }, 5000);
  });

  const taskPromise = (async () => {
    await new Promise((resolve) => setTimeout(resolve, 6000)); // 模拟长任务
    return new Response('Task Completed', { status: 200 });
  })();

  try {
    // 谁先完成就用谁
    return await Promise.race([timeoutPromise, taskPromise]);
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
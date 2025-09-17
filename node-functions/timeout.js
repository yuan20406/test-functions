
export default async function onRequest(context) {
  const timeoutPromise = new Promise((resolve) =>
    setTimeout(() => resolve(new Response('Request Timeout', { status: 408 })), 5000)
  );

  const taskPromise = new Promise((resolve) =>
    setTimeout(() => resolve(new Response('Task Completed', { status: 200 })), 6000)
  );

  return Promise.race([timeoutPromise, taskPromise]);
}
export default async function handler(req, res) {
  const timeout = setTimeout(() => {
    res.status(200).send('Request Timeout');
  }, 5000);

  try {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    clearTimeout(timeout); // 清除超时
    res.status(200).send('Task Completed');
  } catch (error) {
    clearTimeout(timeout);
    res.status(500).send('Internal Server Error');
  }
}
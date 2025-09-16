
export default async function handler(req, res) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 65000));
    res.status(200).send('Task Completed');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
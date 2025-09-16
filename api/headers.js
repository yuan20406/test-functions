export default function handler(req, res) {
  res.setHeader('X-Custom-Header', 'Vercel-Test');
  res.status(200).send('Headers Set');
}
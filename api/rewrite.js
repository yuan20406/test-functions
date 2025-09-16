export default function handler(req, res) {
  if (req.url === '/old-path') {
    req.url = '/new-path';
    res.status(200).send('Rewritten');
  } else {
    res.status(200).send('Normal Path');
  }
}
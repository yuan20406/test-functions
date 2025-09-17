
export default function onRequest(context) {
  return new Response ('Headers Set', {
    status: 200,
    headers: {
      'X-Custom-Header': 'Edgeone-Test',
    }
  })
}
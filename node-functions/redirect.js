
export default async function onRequest(context) {
  return new Response ('redirect', {
    status: 301,
    headers: {
      Location: 'https://www.example.com',
    } 
  })
}
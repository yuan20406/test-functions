
export default async function onRequest(context) {

  if (context.request.rawPath === '/old-path') {
    return new Response('Rewritten', {
      status: 200
    })
  } else {
    return new Response ('Normal Path', {
      statusCode: 200
    })
  }

}
export default {
  async fetch(request) {
    const res = await fetch('https://quge5.com/88/tag.min.js', {
      headers: { 'User-Agent': request.headers.get('User-Agent') }
    });
    const body = await res.text();
    return new Response(body, {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}


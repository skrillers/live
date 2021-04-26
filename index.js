addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  
  
   //const userAgent = request.headers.get("User-Agent") || ""
    // if (!userAgent.includes("fuckyouflixtvplayer")) {
   //          let url = `https://cdn.movieforu.workers.dev/v.m3u8?file_code=fkuiyu09trij&q=n`;
   //          return Response.redirect(url, 302);
   //      }
 
  let URLT = new URL(request.url);
  let file_code = URLT.searchParams.get("channel")
  let q = URLT.searchParams.get("q")
  let url = "http://livetvkyte.herokuapp.com/"+file_code

  let res = await fetch(url);
  let obj = await res.json(); 

  var finalURL = obj[q].url;
  return Response.redirect(finalURL, 301);
}
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`server start on ${PORT}`));

//* Early redirects
let params = new URLSearchParams(document.location.search);
// By id (faster)
let redirectById = params.get("i");
if(redirectById != null) {
  // Stop page from showing anything
  document.body.innerHTML = "";
  // Wait for get() to resolve
  get(redirectById).then(res => {
    let redirect = JSON.parse(res).oldUrl;
    console.log(`Redirect by id - (${redirectById}) to ${redirect}`);
    if(redirect != "") window.location.href = redirect;
  });
} 
// By name (readable)
let redirectByName = params.get("u");
if(redirectByName != null) {
  // Stop page from showing anything
  document.body.innerHTML = "";
  getAll().then(res => {
    let redirects = JSON.parse(res);
    for(let i = 0; i < redirects.length; i++) {
      if(redirects[i].newUrl == "https://url.cait.moe/?u="+redirectByName) {
        let redirect = redirects[i].oldUrl;
        console.log(`Redirect by name - (${redirectByName}) to ${redirect}`);
        if(redirect != "") window.location.href = redirect;
      }
    }
  });
}
//* Early redirects

//* HTTP
async function get(id) {
  let headersList = {
    "Accept": "*/*"
  }
  let response = await fetch("https://api.cait.moe/v1/url/shorturl/"+id, { 
    method: "GET",
    headers: headersList
  });
  
  let data = await response.text();
  return data;
}

async function getAll() {
  let headersList = {
    "Accept": "*/*"
  }
  let response = await fetch("https://api.cait.moe/v1/url/shorturl", { 
    method: "GET",
    headers: headersList
  });

  let data = await response.text();
  return data;
}
//*
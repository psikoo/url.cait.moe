let baseURL = "https://api.cait.moe/api/shorturl/urls";

export async function getAll() {
  let headersList = {
    "Accept": "*/*"
  }
  let response = await fetch(baseURL, { 
    method: "GET",
    headers: headersList
  });

  let data = await response.text();
  return data;
}

export async function get(id) {
  let headersList = {
    "Accept": "*/*"
  }
  let response = await fetch(baseURL+"/"+id, { 
    method: "GET",
    headers: headersList
  });
  
  let data = await response.text();
  return data;
}

export async function post() {
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "apikey": document.getElementById("api").value+""
  }
  let body = {
    "oldUrl": ""+document.getElementById("old").value,
    "newUrl": "https://url.cait.moe/?u="+document.getElementById("new").value
  }
  let response = await fetch(baseURL, { 
    method: "POST",
    headers: headersList,
    body: JSON.stringify(body)
  });

  let data = await response.text();
  return data;
}

export async function patch(id, oldUrl, newUrl) {
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "apikey": document.getElementById("api").value+""
  }
  let body = {
    "oldUrl": oldUrl,
    "newUrl": "https://url.cait.moe/?u="+newUrl
  }
  let response = await fetch(baseURL+"/"+id, { 
    method: "PATCH",
    headers: headersList,
    body: JSON.stringify(body)
  });

  let data = await response.text();
  return data;
}

export async function del(id) {
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "apikey": document.getElementById("api").value+""
  }
  let response = await fetch(baseURL+"/"+id, { 
    method: "DELETE",
    headers: headersList,
  });

  let data = await response.text();
  return data;
}
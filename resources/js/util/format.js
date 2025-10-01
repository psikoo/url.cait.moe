import { getAll } from "./http.js";
import { addEvents } from "./events.js";

export function processRes(res, method) {
  res = JSON.parse(res);
  let string = `<div class="response `;
  if(res.Error) string += `error">Error: ${res.Error}</div>`;
  else if(res.error) string += `error">Error: ${res.message}</div>`;
  else string += `success">Successful (${method})!</div>`;
  return string;
}

export async function formatUrls() {
  let urls = JSON.parse(await getAll()); console.log(urls);
  let urlsDiv = document.getElementById("urls");
  urlsDiv.innerHTML = "";
  for (let i = 0; i < urls.length; i++) {
    urlsDiv.innerHTML += `
    <div class="url">
      <div class="info">
        <div class="urlId">${urls[i].id}</div>
        <div class="urlBox">
          <div class="newUrl">
            <a href="${urls[i].newUrl}" target="_blank">${urls[i].newUrl}</a>
          </div>
          <div class="oldUrl">
            (<a href="${urls[i].oldUrl}" target="_blank">${urls[i].oldUrl}</a>)
          </div>
        </div>
      </div>
      <div class="manage">
        <div class="modify" id="modify"><img src="./resources/svg/edit.svg" alt="M"></div>
        <div class="delete" id="delete"><img src="./resources/svg/delete.svg" alt="D"></div>
      </div>
    </div>
    `; 
  }
  addEvents();
}
import { patch, del } from "./http.js";
import { processRes, formatUrls } from "./format.js";

export function addEvents() {
  let delDiv = document.getElementsByClassName("delete");
  for(let i = 0; i < delDiv.length; i++) {
    delDiv[i].addEventListener("click", async function () {
      let urlId = this.parentElement.parentElement.childNodes[1].childNodes[1].innerText;
      console.log(`> Sent DELETE - ${document.getElementById("api").value} {${urlId}} `);
      res.innerHTML = processRes(await del(urlId), "DELETE");
      formatUrls();
    });
  }

  let modDiv = document.getElementsByClassName("modify");
  for(let i = 0; i < modDiv.length; i++) {
    modDiv[i].addEventListener("click", async function () {
      let urlId = this.parentElement.parentElement.childNodes[1].childNodes[1].innerText;
      let oldUrl = document.getElementById("old").value;
      let newUrl = document.getElementById("new").value;
      console.log(`> Sent PATCH - ${document.getElementById("api").value} {${urlId}} `);
      res.innerHTML = processRes(await patch(urlId, oldUrl, newUrl), "PATCH");
      formatUrls();
    });
  }
}

import { post } from "./util/http.js";
import { processRes, formatUrls } from "./util/format.js";

let params = new URLSearchParams(document.location.search);
if(params.get("i") == null && params.get("u") == null ) {
  let show = document.getElementById("show");
  let api = document.getElementById("api");
  let passwordCounter = 0;
  show.addEventListener("click", function () {
    if(passwordCounter%2 == 0) {
      api.type="text";
      show.innerHTML = "<img src='./resources/svg/hide.svg' alt='hide'>";
    } else {
      api.type="password";
      show.innerHTML = "<img src='./resources/svg/show.svg' alt='show'>";
    }
    passwordCounter++;
  });
  
  let resDiv = document.getElementById("res");
  let postDiv = document.getElementById("post");
  postDiv.addEventListener("click", async function () {
    console.log(`> Sent POST - {oldUrl = ${document.getElementById("old").value} > ${document.getElementById("new").value}}`);
    resDiv.innerHTML = processRes(await post(), "POST");
    formatUrls();
  });
  let reloadDiv = document.getElementById("reload");
  reloadDiv.addEventListener("click", async function () {
    formatUrls();
  });
}

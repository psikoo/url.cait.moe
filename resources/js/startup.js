import { formatUrls } from "./util/format.js";

let params = new URLSearchParams(document.location.search);
if(params.get("i") == null && params.get("u") == null ) formatUrls();

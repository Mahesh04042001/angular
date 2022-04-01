import { move, store } from "./move.js";
import { myFunction } from "./myfunction.js";
import { reset } from "./reset.js";

document.getElementById("btn").addEventListener("onclick", move);
document.getElementById("submit").addEventListener("onclick", myFunction);
document.getElementById("find").addEventListener("onkeyup", reset);

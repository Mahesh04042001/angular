import { add } from "./add.js";
import { search } from "./search.js";
import { reset } from "./reset.js";
import { push } from "./push.js";
var obj = document.getElementById("btn").addEventListener("click", add);
push(obj);
document.getElementById("submit").addEventListener("click", search);
document.getElementById("find").addEventListener("keyup", reset);

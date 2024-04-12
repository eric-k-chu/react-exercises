import Ansi from "../ansi/Ansi.js";
import Store from "./Store.js";

const store = new Store([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
]);

Ansi.log(store.values());

Ansi.log(store.keys());

Ansi.log(store.get("a"));

store.set("f", 6);

Ansi.log(store.values());

console.log(store.delete("f"));

Ansi.log(store.values());

Ansi.log(store.random());

store.clear();

Ansi.log(store.values());

Ansi.log(store.keys());

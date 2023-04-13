import menu from "./sections/menu.js";
import tailwind from "./util/tailwind.js";
import cesta from "./views/cesta.js";

(function () {
  //call functions from modules imported
  menu.init();
  tailwind.init();
  cesta.init();
})();

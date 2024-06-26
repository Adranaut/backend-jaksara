import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor({ button, drawer, content, body }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._body = body;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      body: this._body,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector(".skip-link");
    skipLinkElem.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#maincontent").focus();
    });

    const inputContainer = document.querySelector(".input-container");
    const closeButton = document.querySelector("#closeButton");
    closeButton.addEventListener("click", () => {
      document.querySelector(".input-content").innerHTML = "";
      inputContainer.style.display = "none";
    });

    const drawer = document.querySelector("#drawer");
    const navLinks = drawer.querySelectorAll("ul > li > a");

    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        navLinks.forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }
}

export default App;

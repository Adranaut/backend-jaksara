const DrawerInitiator = {
  init({ button, drawer, content, body }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    body.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
      event.stopPropagation();
    });

    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      const st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        if (drawer.classList.contains("open")) {
          drawer.classList.remove("open");
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default DrawerInitiator;

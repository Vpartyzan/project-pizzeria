import {templates, select, classNames} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.selectPage();
  }

  render(element) {
    const thisHome = this;

    const generateHTML = templates.homePage();

    thisHome.dom = {};

    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);

    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generateHTML;
    thisHome.dom.order = thisHome.dom.wrapper.querySelector(select.home.order);
    thisHome.dom.booking = thisHome.dom.wrapper.querySelector(select.home.booking);
  }

  selectPage() {
    const thisHome = this;

    thisHome.dom.order.addEventListener('click', function (event) {
      event.preventDefault();

      window.location.hash = '#/order';

      for(let page of thisHome.pages) {

        page.classList.toggle(classNames.pages.active, page.id == 'order');
      }

      for(let link of thisHome.navLinks) {
        link.classList.toggle(
          classNames.nav.active,
          link.getAttribute('href') == '#' + 'order'
        );
      }
    });

    thisHome.dom.booking.addEventListener('click', function (event) {
      event.preventDefault();

      window.location.hash = '#/booking';

      for(let page of thisHome.pages) {

        page.classList.toggle(classNames.pages.active, page.id == 'booking');
      }

      for(let link of thisHome.navLinks) {
        link.classList.toggle(
          classNames.nav.active,
          link.getAttribute('href') == '#' + 'booking'
        );
      }
    });
  }


}

export default Home;

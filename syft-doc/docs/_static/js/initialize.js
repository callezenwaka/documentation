// Site URL
const { origin, pathname } = location;
var { host, hostname, port } = new URL(origin);
console.log('origin, pathname: ', origin, pathname);
// const PROD_SITE_URL = `https://syftbook.readthedocs.io`
// const DEV_SITE_URL = `http://${host}/docs/_build/html`
// Create a URL object
// Access the host property
// var { hostname } = url;
// const pathSplit = pathname.split("/");
// const rootPath = origin.includes(SITE_URL) && pathSplit.length > 3 ? pathSplit.splice(1, 2).join("/") : ''
const SITE_URL = hostname === 'localhost'? `http://${host}/docs/_build/html`: `${origin}/en/latest`;
const ROOT_URL = SITE_URL? `${SITE_URL}` : `${origin}/${rootPath}`;
console.log('root: ', ROOT_URL);
console.log('SITE_URL: ', SITE_URL);
// console.log('rootPath: ', rootPath);

function buildNavigation() {
  // 
  const nodeList = document.querySelectorAll(".nav-item .nav-link.nav-internal");
  const links = Array.from(nodeList);
  // baseURI: "http://localhost:5501/docs/_build/html/"

  // const linkElements = 
  links.map( link => {
    const { href } = link;
    var { pathname } = new URL(href);
    // const link = document.createElement("a");
    // link.classList.add("nav-link");
    link.setAttribute("href", SITE_URL + pathname);
    // link.setAttribute("href", href);
    // link.setAttribute("aria-label", name);
    // if (href === FORUM_URL) {
    //   link.classList.add("forum-link");
    //   link.setAttribute("target", "_blank");
    //   link.setAttribute("rel", "noopener noreferrer");
    // }
    // link.innerText = name;
    return link;
  });

};

document.addEventListener("locationchange", buildNavigation);


document.addEventListener("DOMContentLoaded", buildNavigation);
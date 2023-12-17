// Site URL
const PROD_SITE_URL = "https://syftbook.readthedocs.io/"
const DEV_SITE_URL = "http://localhost:5501/docs/_build/html/"
const { origin, pathname } = location;
// Create a URL object
var { host, hostname, port } = new URL(origin);
// Access the host property
// var { hostname } = url;
const SITE_URL = hostname === 'localhost'? `${DEV_SITE_URL}`: `${PROD_SITE_URL}`;
const pathSplit = pathname.split("/");
const rootPath = origin.includes(SITE_URL) && pathSplit.length > 3 ? pathSplit.splice(1, 2).join("/") : ''
const ROOT_URL = SITE_URL? `${SITE_URL}` : `${origin}/${rootPath}`;
console.log('root: ', ROOT_URL);
console.log('SITE_URL: ', SITE_URL);
console.log('rootPath: ', rootPath);
console.log('origin, pathname: ', origin, pathname);
// root:  http://localhost:5501/
// origin, pathname:  http://localhost:5501 /docs/_build/html/

// Color mode constants
// const [DARK, LIGHT] = ["dark", "light"];
// const LIGHT_LOGO_PATH = `${ROOT_URL}/_static/img/logo.svg`;
// const DARK_LOGO_PATH = `${ROOT_URL}/_static/img/logo-dark.svg`;
// const SUN_ICON_PATH = `${ROOT_URL}/_static/img/sun.svg`;
// const MOON_ICON_PATH = `${ROOT_URL}/_static/img/moon.svg`;
// const LIGHT_HAMBURGER_PATH = `${ROOT_URL}/_static/img/hamburger-light.svg`;
// const DARK_HAMBURGER_PATH = `${ROOT_URL}/_static/img/hamburger-dark.svg`;
// const COLOR_TOGGLE_ICON_CLASS = "color-toggle-icon";
// const SOLIDITY_LOGO_CLASS = "solidity-logo";
// const LS_COLOR_SCHEME = "color-scheme";

// Solidity navigation constants
// const SOLIDITY_HOME_URL = "https://soliditylang.org";
// const BLOG_URL = `${SOLIDITY_HOME_URL}/blog`;
// const DOCS_URL = "/";
// const USE_CASES_PATH = `${SOLIDITY_HOME_URL}/use-cases`;
// const CONTRIBUTE_PATH = `/en/latest/contributing.html`;
// const ABOUT_PATH = `${SOLIDITY_HOME_URL}/about`;
// const FORUM_URL = "https://forum.soliditylang.org/";
// const NAV_LINKS = [
//   { name: "Blog", href: BLOG_URL },
//   { name: "Documentation", href: DOCS_URL },
//   { name: "Use cases", href: USE_CASES_PATH },
//   { name: "Contribute", href: CONTRIBUTE_PATH },
//   { name: "About", href: ABOUT_PATH },
//   { name: "Forum", href: FORUM_URL },
// ];

// const MOBILE_MENU_TOGGLE_CLASS = "shift";
// const WRAPPER_CLASS = "unified-wrapper";

function buildNavigation() {
  // const isDarkMode = localStorage.getItem(LS_COLOR_SCHEME) == DARK;

  // const header = document.createElement("div");
  // header.classList.add("unified-header");
  // document.querySelector(`.${WRAPPER_CLASS}`).prepend(header);

  // const innerHeader = document.createElement("div");
  // innerHeader.classList.add("inner-header");
  // header.appendChild(innerHeader);

  // const homeLink = document.createElement("a");
  // homeLink.classList.add("home-link");
  // homeLink.href = SOLIDITY_HOME_URL;
  // homeLink.ariaLabel = "Solidity home";
  // innerHeader.appendChild(homeLink);

  // const logo = document.createElement("img");
  // logo.classList.add(SOLIDITY_LOGO_CLASS);
  // logo.src = getLogoSrc(isDarkMode);
  // logo.alt = "Solidity logo";
  // homeLink.appendChild(logo);

  // const skipToContent = document.createElement("a");
  // skipToContent.classList.add("skip-to-content");
  // skipToContent.href = "#content";
  // skipToContent.innerText = "{skip to content}";
  // innerHeader.appendChild(skipToContent);

  // const navBar = document.createElement("nav");
  // navBar.classList.add("nav-bar");
  // innerHeader.appendChild(navBar);
  // const links = document.querySelectorAll(".unified-header .nav-link");
  const links = document.querySelectorAll(".nav-item .nav-link.nav-internal");
  // baseURI: "http://localhost:5501/docs/_build/html/"

  // const linkElements = 
  links.map((link, { name, href, baseURI }) => {
    // const link = document.createElement("a");
    // link.classList.add("nav-link");
    link.setAttribute("baseURI", SITE_URL);
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
  // linkElements.forEach((link) => navBar.appendChild(link));

  // Flex wrapper for color mode and mobile menu buttons
  // const navButtonContainer = document.createElement("div");
  // navButtonContainer.classList.add("nav-button-container");
  // navBar.appendChild(navButtonContainer);

  // Build color toggle
  // const toggleIcon = document.createElement("img");
  // toggleIcon.classList.add(COLOR_TOGGLE_ICON_CLASS);
  // toggleIcon.src = getModeIconSrc(isDarkMode);
  // toggleIcon.alt = "Color mode toggle icon";
  // toggleIcon.setAttribute("aria-hidden", "true");
  // toggleIcon.setAttribute("key", "toggle icon");
  // const colorModeButton = document.createElement("button");
  // colorModeButton.classList.add("color-toggle");
  // colorModeButton.setAttribute("type", "button");
  // colorModeButton.setAttribute("aria-label", "Toggle light dark mode");
  // colorModeButton.setAttribute("key", "color mode button");
  // colorModeButton.addEventListener("click", toggleColorMode);
  // colorModeButton.appendChild(toggleIcon);
  // navButtonContainer.appendChild(colorModeButton);

  // Build mobile hamburger menu
  // const menuIcon = document.createElement("img");
  // menuIcon.classList.add(COLOR_TOGGLE_ICON_CLASS);
  // menuIcon.src = getMenuIconSrc(isDarkMode);
  // menuIcon.alt = "Toggle menu";
  // menuIcon.setAttribute("aria-hidden", "true");
  // menuIcon.setAttribute("key", "menu icon");
  // const menuButton = document.createElement("button");
  // menuButton.classList.add("color-toggle");
  // menuButton.classList.add("mobile-menu-button");
  // menuButton.setAttribute("type", "button");
  // menuButton.setAttribute("aria-label", "Toggle menu");
  // menuButton.setAttribute("key", "menu button");
  // menuButton.addEventListener("click", toggleMenu);
  // menuButton.appendChild(menuIcon);
  // navButtonContainer.appendChild(menuButton);
};

// document.addEventListener("locationchange", buildNavigation);


document.addEventListener("DOMContentLoaded", buildNavigation);
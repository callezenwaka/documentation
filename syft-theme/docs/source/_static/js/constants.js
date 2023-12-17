// Site URL
const SITE_URL = "https://docs.soliditylang.org"
// const SITE_URL = "http://localhost:5500"
// http://127.0.0.1:5500/syftdoc/docs/build/html/_static/img/logo.svg
const { origin, pathname } = location;
const pathSplit = pathname.split("/");
const rootPath = origin.includes(SITE_URL) && pathSplit.length > 3 ? pathSplit.splice(1, 2).join("/") : ''
// const ROOT_URL = `${origin}/${rootPath}`;
const ROOT_URL = `http://127.0.0.1:5500/syftdoc/docs/build/html`;
console.log('root: ', ROOT_URL)
// Color mode constants
const [DARK, LIGHT] = ["dark", "light"];
const LIGHT_LOGO_PATH = `${ROOT_URL}/_static/img/logo-light.svg`;
const DARK_LOGO_PATH = `${ROOT_URL}/_static/img/logo-dark.svg`;
const SUN_ICON_PATH = `${ROOT_URL}/_static/img/sun.svg`;
const MOON_ICON_PATH = `${ROOT_URL}/_static/img/moon.svg`;
const LIGHT_HAMBURGER_PATH = `${ROOT_URL}/_static/img/hamburger-light.svg`;
const DARK_HAMBURGER_PATH = `${ROOT_URL}/_static/img/hamburger-dark.svg`;
const COLOR_TOGGLE_ICON_CLASS = "color-toggle-icon";
const SOLIDITY_LOGO_CLASS = "solidity-logo";
const LS_COLOR_SCHEME = "color-scheme";

// Solidity navigation constants
const SOLIDITY_HOME_URL = `${ROOT_URL}`;
const BLOG_URL = `https://blog.openmined.org/`;
const DOCS_URL = `${ROOT_URL}`;
const USE_CASES_PATH = `${ROOT_URL}/usage.html`;
const CONTRIBUTE_PATH = `${ROOT_URL}/contributing.html`;
const PARTNERS_PATH = `${ROOT_URL}/partners.html`;
const FORUM_URL = "https://slack.openmined.org/";
const NAV_LINKS = [
  { name: "Blog", href: BLOG_URL },
  { name: "Documentation", href: DOCS_URL },
  { name: "Use cases", href: USE_CASES_PATH },
  { name: "Contribute", href: CONTRIBUTE_PATH },
  { name: "Partners", href: PARTNERS_PATH },
  { name: "Forum", href: FORUM_URL },
];

const MOBILE_MENU_TOGGLE_CLASS = "shift";
const WRAPPER_CLASS = "unified-wrapper";

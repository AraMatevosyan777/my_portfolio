import Home from '../Pages/Home';
import AboutMe from '../Pages/AboutMe';
import Skills from '../Pages/Skills';
import Portfolio from '../Pages/Portfolio';
import ContactMe from '../Pages/ContactMe';

const HOME = {
  path: '/home',
  exact: true,
  component: Home,
};
const ABOUT_ME = {
  path: '/about-me',
  exact: true,
  component: AboutMe,
};
const SKILLS = {
  path: '/skills',
  exact: true,
  component: Skills,
};
const PORTFOLIO = {
  path: '/portfolio',
  exact: true,
  component: Portfolio,
};
const CONTACT_ME = {
  path: '/contact-me',
  exact: true,
  component: ContactMe,
};

export default [HOME, ABOUT_ME, SKILLS, PORTFOLIO, CONTACT_ME];

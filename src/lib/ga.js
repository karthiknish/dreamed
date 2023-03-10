import ReactGA from "react-ga";

export const initGA = () => {

  ReactGA.initialize("G-X04QHP0X03");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

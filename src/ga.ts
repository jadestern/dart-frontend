import ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_GA || '');
ReactGA.pageview(window.location.pathname + window.location.search);

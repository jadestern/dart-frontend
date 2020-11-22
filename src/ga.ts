import ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_GA || '');
console.log('process.env.REACT_APP_GA', process.env.REACT_APP_GA);

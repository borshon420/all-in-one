import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(()=> import('./components/Home'))
const CountryInfo = lazy(()=> import('./components/CountryInfo'))
const Exam = lazy(()=> import('./components/Exam'))
const Result = lazy(()=> import('./components/Result'))
const Pagenation = lazy(()=> import('./components/Pagenation'))
const Details = lazy(()=> import('./components/Details'))

const App: React.FC = () => {
  return (
    <div className="App" data-testid="app">
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/country" component={CountryInfo}/>
            <Route exact path="/exam" component={Exam}/>
            <Route exact path="/result" component={Result}/>
            <Route exact path="/pagenation" component={Pagenation}/>
            <Route exact path="/details" component={Details}/>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

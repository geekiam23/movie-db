import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Landing from './components/Landing';
import MovieCardGroup from './components/MovieCardGroup';
import MovieDetail from './components/MovieDetail';
import TvCardGroup from './components/TvCardGroup';
import TvDetail from './components/TvDetail';
import './App.css';

const App = () => (
  <div className='App'>
    <Menu/>
    <main>
      <Route exact path="/" component={Landing} />  
      <Route path="/movies/:id" component={MovieDetail} />
      <Route exact path="/movies/" component={MovieCardGroup} />
      <Route path="/tv/:id" component={TvDetail} />
      <Route exact path="/tv/" component={TvCardGroup} />
      <Footer/>
    </main>
  </div>
);

export default App;
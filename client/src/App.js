import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Landing from './components/Landing';
import MovieCardGroup from './components/MovieCardGroup';
import MovieDetail from './components/MovieDetail';
import TvCardGroup from './components/TvCardGroup';
import TvDetail from './components/TvDetail';
import PeopleCardGroup from './components/PeopleCardGroup';
import PeopleDetail from './components/PeopleDetail';
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
      <Route exact path="/people/" component={PeopleCardGroup} />
      <Route path="/people/:id" component={PeopleDetail} />
      <Footer/>
    </main>
  </div>
);

export default App;
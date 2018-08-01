import React from 'react';
import { Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Search from './components/Search';
import MovieCardGroup from './components/MovieCardGroup';
import MovieDetail from './components/MovieDetail';
import TvCardGroup from './components/TvCardGroup';
import TvDetail from './components/TvDetail';
import './App.css';

const App = () => (
  <div className='App'>
    <div className="mdl-layout">
      <div className="">
        <header>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/movies'>Popular Movies</Link>
            <Link to='/tv'>Popular Tv</Link>
          </nav>
          <h1>Movie Review</h1>
          <Search />
        </header>
        <main>
          <Route exact path="/" component={Landing} />  
          <Route path="/movies/:id" component={MovieDetail} />
          <Route exact path="/movies/" component={MovieCardGroup} />
          <Route path="/tv/:id" component={TvDetail} />
          <Route exact path="/tv/" component={TvCardGroup} />
        </main>
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;
import React from 'react';
import { Route, Link } from 'react-router-dom';
import MovieCardGroup from './components/MovieCardGroup';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Search from './components/Search';
import MovieDetail from './components/MovieDetail';
import './App.css';

const App = () => (
  <div className='App'>
    <div className="mdl-layout">
      <div className="">
        <header>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/movies'>Popular Movies</Link>
          </nav>
          <h1>Movie Review</h1>
          <Search />
        </header>
        <main>
          <Route exact path="/" component={Landing} />  
          <Route path="/movies/:id" component={MovieDetail} />
          <Route exact path="/movies/" component={MovieCardGroup} />
        </main>
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;
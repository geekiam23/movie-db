import React, { Component } from 'react';
import MovieCardGroup from './components/MovieCardGroup';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MuiThemeProvider>
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <div className="mdl-layout__content">
              <MenuBar/>
              <main>
                <MovieCardGroup />
              </main>
              <Footer/>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import MovieCardGroup from '../components/MovieCardGroup';
import movieExample from './movieExample';
import fakeCall from './call';
import gettingMovies from './call';


describe('MovieCardGroup', function() {
  let movieCardGroup;
  let promise;
  let sandbox;
  let teesting;
  let timeoutStub;
  let fetchStub;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    // sandbox.stub(gettingMovies, 'getMovies').resolves(movieExample);
    movieCardGroup = mount(<MovieCardGroup />, {disableLifeCycleMethods: true});
    // fetchStub = this.sandbox.stub(movieCardGroup.instance(), 'fetch').resolves();
    // this.sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves(movieExample);
    // promise = movieCardGroup.instance().getMovies();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render', function() {
    expect(movieCardGroup).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    let timeoutStub;

    it('should call autoRefreshData to trigger the polling', function() {
      sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves({});
      timeoutStub = sandbox.stub(movieCardGroup.instance(), 'fetch');
console.log(movieCardGroup.instance().wrappedMethod);
// console.log(timeoutStub);

      // return movieCardGroup.instance().componentDidMount()
        // .then(() => {
          expect(timeoutStub).to.be.calledOnce;
        // });
    });
  });

  // describe('constructor', function() {
  //   it('should properly set my starting state', function() {
      
  //     return promise.then(() => {
  //       console.log(movieCardGroup.instance().state);

  //       expect(movieCardGroup.state('movies')).length.to.equal(2);
  //       // expect(fetchStub.calledOnce).to.be.true;
  //     });
  //   });
  // });

  describe.skip('componentDidMount', function() {
    it('should call fetch to trigger the polling', function() {
      timeoutStub = this.sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves();
      movieCardGroup.instance().componentDidMount();
      expect(timeoutStub).should.have.been.called();
      // expect(timeoutStub.calledOnce);
    });
  });

  // it('should render', function() {
  //   // fetchStub = this.sandbox.spy(movieCardGroup, 'fetch');
  //   expect(fetchStub).to.have.been.calledOnce;
  // });



  // describe('componentDidMount', function() {
  //   let fetchStub;

  //   it('should call getMovieDetail', function() {
  //     // timeoutStub = this.sandbox.stub(ind.instance(), 'autoRefreshData');
  //           // return movieCardGroup.instance().componentDidMount()
  //       // .then(() => {
  //         // expect(fetchStub).to.be.calledOnce;
  //       // });
  //   });
  // });

  describe.skip('constructor', function() {
    it('should properly set my starting state', function() {
      // promise.then(() => {
        return promise.then(() => {
          expect(movieCardGroup.state().movies).to.include(movieExample);
        });
        // console.log(movieCardGroup.state('movies'));
        
        // expect(movieCardGroup.state('movies').length).to.equal(110);
      });
    // });
  });
});

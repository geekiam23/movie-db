import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import MovieCardGroup from '../components/MovieCardGroup';
import movieExample from './movieExample';

describe('MovieCardGroup', function() {
  let movieCardGroup;
  let promise;
  let sandbox;
  let teesting;
  let timeoutStub;
  let fetchStub;

  beforeEach(function() {
    this.sandbox = sinon.createSandbox();
    movieCardGroup = shallow(<MovieCardGroup />, {disableLifeCycleMethods: true});
    fetchStub = this.sandbox.stub(movieCardGroup.instance(), 'fetch').resolves();
    // this.sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves(movieExample);
    promise = movieCardGroup.instance().getMovies();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  it('should render', function() {
    expect(movieCardGroup).to.not.be.empty;
  });

  describe('constructor', function() {
    it('should properly set my starting state', function() {
      return movieCardGroup.instance().getMovies().then(() => {
        expect(movieCardGroup.state().movies).length.to.equal(110);
        // expect(fetchStub.calledOnce).to.be.true;
      });
    });
  });

  describe('componentDidMount', function() {
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

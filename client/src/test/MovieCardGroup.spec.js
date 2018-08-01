import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import MovieCardGroup from '../components/MovieCardGroup';
import movieExample from './movieExample';

describe('MovieCardGroup', function() {
  let movieCardGroup;
  let retrieveData;
  let sandbox;

  beforeEach(function() {
    this.sandbox = sinon.createSandbox();
    movieCardGroup = shallow(<MovieCardGroup />, {disableLifeCycleMethods: false});
    this.sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves(movieExample);
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  it('should render', function() {
    expect(movieCardGroup).to.not.be.empty;
  });

  it('should render', function() {
    // fetchStub = this.sandbox.spy(movieCardGroup, 'fetch');
    expect(fetchStub).to.have.been.calledOnce;
  });



  describe('componentDidMount', function() {
    let fetchStub;

    it('should call getMovieDetail', function() {
      fetchStub = this.sandbox.stub(movieCardGroup.instance(), 'fetch');
      // return movieCardGroup.instance().componentDidMount()
        // .then(() => {
          expect(fetchStub).to.be.calledOnce;
        // });
    });
  });

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

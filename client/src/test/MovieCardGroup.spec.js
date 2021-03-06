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
  let getMoviesStub;
  let fetchStub;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    movieCardGroup = shallow(<MovieCardGroup />, {disableLifeCycleMethods: true});
    fetchStub = sandbox.stub(movieCardGroup.instance(), 'fetch').resolves();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render', function() {
    expect(movieCardGroup).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    it('should call fetch', function() {
      movieCardGroup.instance().componentDidMount();
      getMoviesStub = sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves(movieExample);
      
      expect(fetchStub.calledOnce).eq(true);
    });
  });

  describe('getMovies', function() {
    it('should call fetch and return data', function() {
      sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves(movieExample);
      promise = movieCardGroup.instance().getMovies();

      return promise.then((resp) => {          
        expect(resp).to.eq(movieExample);
      });
    });

    it('should return the correct data structure', function() {
      sandbox.stub(movieCardGroup.instance(), 'getMovies').resolves(movieExample);
      promise = movieCardGroup.instance().getMovies();

      return promise.then((resp) => {
        expect(resp).to.be.an('array');       
      });
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import MovieDetail from '../components/MovieDetail';
import movieExample from './movieExample';

describe('movieDetail', function() {
  let movieDetail;
  let promise;
  let sandbox;
  let getMoviesDetailStub;
  let fetchStub;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    movieDetail = shallow(<MovieDetail location="pathname"/>, {disableLifeCycleMethods: true});
    fetchStub = sandbox.stub(movieDetail.instance(), 'fetch').resolves();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render', function() {
    expect(movieDetail).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    it('should call fetch', function() {
      movieDetail.instance().componentDidMount();
      getMoviesDetailStub = sandbox.stub(movieDetail.instance(), 'getMoviesDetail').resolves(movieExample);
      
      expect(fetchStub.calledOnce).eq(true);
    });
  });

  describe('getMoviesDetail', function() {
    it('should call fetch and return data', function() {
      sandbox.stub(movieDetail.instance(), 'getMoviesDetail').resolves(movieExample);
      promise = movieDetail.instance().getMoviesDetail();

      return promise.then((resp) => {          
        expect(resp).to.eq(movieExample);
      });
    });

    it('should return the correct data structure', function() {
      sandbox.stub(movieDetail.instance(), 'getMoviesDetail').resolves(movieExample);
      promise = movieDetail.instance().getMoviesDetail();

      return promise.then((resp) => {
        expect(resp).to.be.an('array');       
      });
    });
  });
});

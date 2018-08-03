import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import TvDetail from '../components/TvDetail';
import movieExample from './movieExample';

describe('TvDetail', function() {
  let tvDetail;
  let promise;
  let sandbox;
  let getTvDetailStub;
  let fetchStub;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    tvDetail = shallow(<TvDetail location="pathname"/>, {disableLifeCycleMethods: true});
    fetchStub = sandbox.stub(tvDetail.instance(), 'fetch').resolves();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render', function() {
    expect(tvDetail).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    it('should call fetch', function() {
      tvDetail.instance().componentDidMount();
      getTvDetailStub = sandbox.stub(tvDetail.instance(), 'getTvDetail').resolves(movieExample);
      
      expect(fetchStub.calledOnce).eq(true);
    });
  });

  describe('getTvDetail', function() {
    it('should call fetch and return data', function() {
      sandbox.stub(tvDetail.instance(), 'getTvDetail').resolves(movieExample);
      promise = tvDetail.instance().getTvDetail();

      return promise.then((resp) => {          
        expect(resp).to.eq(movieExample);
      });
    });

    it('should return the correct data structure', function() {
      sandbox.stub(tvDetail.instance(), 'getTvDetail').resolves(movieExample);
      promise = tvDetail.instance().getTvDetail();

      return promise.then((resp) => {
        expect(resp).to.be.an('array');       
      });
    });
  });
});

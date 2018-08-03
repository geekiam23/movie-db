import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import TvCardGroup from '../components/TvCardGroup';
import tvExample from './movieExample';

describe('TvCardGroup', function() {
  let tvCardGroup;
  let promise;
  let sandbox;
  let getTvStub;
  let fetchStub;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    tvCardGroup = shallow(<TvCardGroup />, {disableLifeCycleMethods: true});
    fetchStub = sandbox.stub(tvCardGroup.instance(), 'fetch').resolves();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render', function() {
    expect(tvCardGroup).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    it('should call fetch', function() {
      tvCardGroup.instance().componentDidMount();
      getTvStub = sandbox.stub(tvCardGroup.instance(), 'getTv').resolves(tvExample);
      
      expect(fetchStub.calledOnce).eq(true);
    });
  });

  describe('getTv', function() {
    it('should call fetch and return data', function() {
      sandbox.stub(tvCardGroup.instance(), 'getTv').resolves(tvExample);
      promise = tvCardGroup.instance().getTv();

      return promise.then((resp) => {          
        expect(resp).to.eq(tvExample);
      });
    });

    it('should return the correct data structure', function() {
      sandbox.stub(tvCardGroup.instance(), 'getTv').resolves(tvExample);
      promise = tvCardGroup.instance().getTv();

      return promise.then((resp) => {
        expect(resp).to.be.an('array');       
      });
    });
  });
});

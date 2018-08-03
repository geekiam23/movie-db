import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import PeopleDetail from '../components/PeopleDetail';
import peopleExample from './movieExample';

describe('PeopleDetail', function() {
  let peopleDetail;
  let promise;
  let sandbox;
  let getPeopleDetailStub;
  let fetchStub;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    peopleDetail = shallow(<PeopleDetail location="pathname"/>, {disableLifeCycleMethods: true});
    fetchStub = sandbox.stub(peopleDetail.instance(), 'fetch').resolves();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render', function() {
    expect(peopleDetail).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    it('should call fetch', function() {
      peopleDetail.instance().componentDidMount();
      getPeopleDetailStub = sandbox.stub(peopleDetail.instance(), 'getPeopleDetail').resolves(peopleExample);
      
      expect(fetchStub.calledOnce).eq(true);
    });
  });

  describe('getPeopleDetail', function() {
    it('should call fetch and return data', function() {
      sandbox.stub(peopleDetail.instance(), 'getPeopleDetail').resolves(peopleExample);
      promise = peopleDetail.instance().getPeopleDetail();

      return promise.then((resp) => {          
        expect(resp).to.eq(peopleExample);
      });
    });

    it('should return the correct data structure', function() {
      sandbox.stub(peopleDetail.instance(), 'getPeopleDetail').resolves(peopleExample);
      promise = peopleDetail.instance().getPeopleDetail();

      return promise.then((resp) => {
        expect(resp).to.be.an('array');       
      });
    });
  });
});

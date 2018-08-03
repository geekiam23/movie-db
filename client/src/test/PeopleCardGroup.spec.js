import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import PeopleCardGroup from '../components/PeopleCardGroup';
import peopleExample from './movieExample';

describe('PeopleCardGroup', function() {
  let peopleCardGroup;
  let promise;
  let sandbox;
  let getPeopleStub;
  let fetchStub;

  before(function() {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(function() {
    peopleCardGroup = shallow(<PeopleCardGroup />, {disableLifeCycleMethods: true});
    fetchStub = sandbox.stub(peopleCardGroup.instance(), 'fetch').resolves();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render', function() {
    expect(peopleCardGroup).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    it('should call fetch', function() {
      peopleCardGroup.instance().componentDidMount();
      getPeopleStub = sandbox.stub(peopleCardGroup.instance(), 'getPeople').resolves(peopleExample);
      
      expect(fetchStub.calledOnce).eq(true);
    });
  });

  describe('getPeople', function() {
    it('should call fetch and return data', function() {
      sandbox.stub(peopleCardGroup.instance(), 'getPeople').resolves(peopleExample);
      promise = peopleCardGroup.instance().getPeople();

      return promise.then((resp) => {          
        expect(resp).to.eq(peopleExample);
      });
    });

    it('should return the correct data structure', function() {
      sandbox.stub(peopleCardGroup.instance(), 'getPeople').resolves(peopleExample);
      promise = peopleCardGroup.instance().getPeople();

      return promise.then((resp) => {
        expect(resp).to.be.an('array');       
      });
    });
  });
});

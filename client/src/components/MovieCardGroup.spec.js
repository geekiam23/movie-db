import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MovieCardGroup from './MovieCardGroup';

describe('MovieCardGroup', function() {
  let movieCardGroup;

  beforeEach(function() {
    this.sandbox = sinon.createSandbox();
    movieCardGroup = shallow(<MovieCardGroup />, {disableLifeCycleMethods: true});
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  it('should render', function() {
    expect(movieCardGroup).to.not.be.empty;
  });

  describe('componentDidMount', function() {
    let timeoutStub;

    it('should call getMovieDetail', function() {
      this.sandbox.stub(movieCardGroup.instance(), 'updateData').resolves({});
      return index.instance().componentDidMount()
        .then(() => {
          expect(timeoutStub).to.be.calledOnce;
        });
    });
  });

  // describe('retrieveData', function() {
  //   let stub;
  //   let promise;

  //   beforeEach(function() {
  //     stub = this.sandbox
  //       .stub(contxtService.dashboard, 'getDashboard')
  //       .resolves({ id: faker.random.uuid() });

  //     promise = index.instance().retrieveData();
  //   });

  //   it('should call the getDashboard function', function() {
  //     return promise.then(() => {
  //       expect(stub.calledOnce).to.be.true;
  //     });
  //   });
  // });
});

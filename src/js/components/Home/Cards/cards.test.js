import React from 'react';
import { mount } from 'enzyme';
import { Cards } from '.';

const props = {
  getIncidentTotalsAction: jest.fn(),
  redflagTotals: {
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  },
  interventionTotals: {
    pending: 0,
    rejected: 0,
    resolved: 0,
    investigation: 0,
    total: 0,
  },
};
const wrapper = mount(<Cards {...props} />);
const wrapperInstance = wrapper.instance();
console.log(wrapperInstance);

it('should fetch incident totals on mounting', () => {
  const spied = jest.spyOn(wrapperInstance.props, 'getIncidentTotalsAction');
  expect(spied).toHaveBeenCalledTimes(1);
});

it('should render a redFlagCard on mounting', () => {
  const redFlagCardWrapper = wrapper.find('RedFlagCard');
  expect(redFlagCardWrapper.length).toBe(1);
});

it('should render an interventionCard on mounting', () => {
  const interventionWrapper = wrapper.find('InterventionCard');
  expect(interventionWrapper.length).toBe(1);
});

it('should draw a red flag pending bar', () => {
  const pendingRendFlagBar = wrapper.find('#pending-redflags');
  expect(pendingRendFlagBar.prop('style').height).toBe(0);
});

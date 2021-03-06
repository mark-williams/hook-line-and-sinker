import React from 'react';
import { mount } from 'enzyme';
import Counter from './counter';

const getDisplayedCount = wrapper => wrapper.find('Button').text();

describe('counter', () => {
  describe('when initially rendered', () => {
    const wrapper = mount(<Counter />);
    it('should display count of zero', () => {
      expect(getDisplayedCount(wrapper)).toContain('0');
    });
  });

  describe('when clicked', () => {
    const wrapper = mount(<Counter />);
    it(' displays incremented count', () => {
      const button = wrapper.find('Button');
      expect(getDisplayedCount(wrapper)).toContain('0');

      button.simulate('click');

      expect(getDisplayedCount(wrapper)).toContain('1');
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Root from './root';

describe('root', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<Root />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

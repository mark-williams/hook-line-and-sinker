import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('root', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

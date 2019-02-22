import React from 'react';
import { shallow } from 'enzyme';
import Form from './complex-form';

describe('complex-form', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

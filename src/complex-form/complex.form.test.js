import React from 'react';
import { mount } from 'enzyme';
import Form from './complex-form';
import { getWrapperByName, getValueOfInput } from '../utils/test-utils';

describe('complex-form', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = mount(<Form />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('controlled inputs', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Form />);
    });

    describe('firstName', () => {
      it('should render what it typed', () => {
        getWrapperByName(wrapper, 'firstName').simulate('change', {
          target: { name: 'firstName', value: 'Freddie' }
        });

        expect(getValueOfInput(wrapper, 'firstName')).toBe('Freddie');
      });
    });

    describe('secondName', () => {
      it('should render what it typed', () => {
        getWrapperByName(wrapper, 'secondName').simulate('change', {
          target: { name: 'secondName', value: 'Smith' }
        });

        expect(getValueOfInput(wrapper, 'secondName')).toBe('Smith');
      });
    });

    describe('email', () => {
      it('should render what it typed', () => {
        getWrapperByName(wrapper, 'email').simulate('change', {
          target: { name: 'email', value: 'fred@email.com' }
        });

        expect(getValueOfInput(wrapper, 'email')).toBe('fred@email.com');
      });
    });
  });
});

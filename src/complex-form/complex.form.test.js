import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './complex-form';
import { getWrapperByName, getValueOfInput } from '../utils/test-utils';

describe('complex-form', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<Form />);
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

  describe('validates on blur', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Form />);
    });
    describe('when I touch and leave an input with an invalid value', () => {
      it('should display the validation error', () => {
        const firstNameWrapper = wrapper.find('#first-name');
        firstNameWrapper.simulate('change', {
          target: { name: 'firstName', value: '' }
        });
        firstNameWrapper.simulate('blur');
        expect(
          wrapper
            .find('ValidationError')
            .first()
            .text()
        ).toContain('You must enter a first name');
      });
    });
  });

  describe('submission', () => {
    let wrapper;
    let submitHandlerMock = jest.fn();
    beforeEach(() => {
      wrapper = mount(<Form />);
      window.alert = submitHandlerMock;
      submitHandlerMock.mockClear();
    });

    describe('when valid', () => {
      it('should submit the form', () => {
        wrapper
          .find('#first-name')
          .simulate('change', { target: { name: 'firstName', value: 'Fred' } });
        wrapper.find('#second-name').simulate('change', {
          target: { name: 'secondName', value: 'Bloggs' }
        });
        wrapper.find('#email').simulate('change', {
          target: { name: 'email', value: 'fred@bloggs.com' }
        });

        wrapper.find('form').simulate('submit');
        expect(submitHandlerMock).toBeCalled();
      });
    });

    describe('when invalid', () => {
      beforeEach(() => {
        wrapper.find('form').simulate('submit');
      });
      it('should not submit the form', () => {
        expect(submitHandlerMock).not.toBeCalled();
      });

      it('should display validation errors', () => {
        expect(
          wrapper
            .find('ValidationError')
            .at(1)
            .text()
        ).toContain('You must enter a last name');
      });
    });
  });
});

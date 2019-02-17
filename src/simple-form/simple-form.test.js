import React from 'react';
import { mount } from 'enzyme';
import SimpleForm from './simple-form';

describe('simple-form', () => {
  const getWrapperByName = (wrapper, name) => wrapper.find(`[name='${name}']`);
  const getValueOfInput = (wrapper, name) => {
    return wrapper.find(`[name='${name}']`).props().value;
  };

  describe('renders input', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<SimpleForm />);
    });
    describe('first name', () => {
      it('should initially render blank', () => {
        expect(getValueOfInput(wrapper, 'firstName')).toBe('');
      });

      it('when text input this should be rendered', () => {
        getWrapperByName(wrapper, 'firstName').simulate('change', {
          target: { name: 'firstName', value: 'John' }
        });
        expect(getValueOfInput(wrapper, 'firstName')).toBe('John');
      });
    });

    describe('first name', () => {
      it('should initially render blank', () => {
        expect(getValueOfInput(wrapper, 'secondName')).toBe('');
      });

      it('when text input this should be rendered', () => {
        getWrapperByName(wrapper, 'secondName').simulate('change', {
          target: { name: 'secondName', value: 'Liverpool' }
        });
        console.log(wrapper.html());
        expect(getValueOfInput(wrapper, 'secondName')).toBe('Liverpool');
      });
    });
  });
});

import React from 'react';
import { mount } from 'enzyme';
import ErrorMessage from './error-message';

describe('ErrorMessage', () => {
  const props = {
    errors: { field: 'An error' },
    name: 'field',
    isSubmitting: false
  };

  describe('when an error exists for the field', () => {
    it('if field touched should display the error', () => {
      const wrapper = mount(
        <ErrorMessage {...props} touched={{ field: true }} />
      );
      expect(wrapper.text()).toContain('An error');
    });

    it('if field not touched should not display the error', () => {
      const wrapper = mount(<ErrorMessage {...props} touched={{}} />);
      expect(wrapper.html()).toBeNull();
    });
  });

  describe('when submitting', () => {
    describe('and an error exists and not touched', () => {
      const wrapper = mount(
        <ErrorMessage {...props} touched={{}} isSubmitting />
      );
      it('should show error', () => {
        expect(wrapper.text()).toContain('An error');
      });
    });
  });
});

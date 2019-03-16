import React from 'react';
import { shallow } from 'enzyme';
import ArticleSearch from './article-search';

describe('article-search', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<ArticleSearch />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import ArticleSearch from './article-search';

describe('article-search', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<ArticleSearch />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe.only('when loaded', () => {
    let wrapper;
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ok: true, CorrelationId: '123' })
      );
    beforeEach(() => {
      // NB have to render twice (see https://github.com/kentcdodds/react-testing-library/issues/215)
      wrapper = mount(<ArticleSearch />);
      wrapper = mount(<ArticleSearch />);
    });

    it('retrieves data', async () => {
      await expect(global.fetch).toBeCalledWith(
        'https://hn.algolia.com/api/v1/search?query=Liverpool'
      );
    });
  });
});

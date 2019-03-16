import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import ArticleSearch from './article-search';

describe('article-search', () => {
  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<ArticleSearch />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when loaded', () => {
    let wrapper;
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            hits: [
              { objectID: 1000, title: 'Article 1' },
              { objectID: 1001, title: 'Article 2' },
              { objectID: 1002, title: 'Article 3' }
            ]
          })
      })
    );
    beforeEach(() => {
      // NB have to render twice (see https://github.com/kentcdodds/react-testing-library/issues/215)
      mount(<ArticleSearch />);
      wrapper = mount(<ArticleSearch />);
    });

    it('retrieves data', async () => {
      await expect(global.fetch).toBeCalledWith(
        'https://hn.algolia.com/api/v1/search?query=Liverpool'
      );
    });

    it('renders retrieved data', () => {
      act(() => {
        const articles = wrapper.find('.articles');
        expect(articles.text()).toContain('Article 2');
      });
    });
  });
});

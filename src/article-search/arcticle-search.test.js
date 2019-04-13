import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import ArticleSearch from './article-search';

describe('article-search', () => {
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

  describe('snapshot', () => {
    it('renders', () => {
      const wrapper = shallow(<ArticleSearch />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when loaded', () => {
    let wrapper;

    beforeEach(() => {
      global.fetch.mockClear();
      act(() => {
        wrapper = mount(<ArticleSearch />);
      });
    });

    afterEach(() => {
      act(() => {
        wrapper.unmount();
      });
    });

    it('retrieves data', () => {
      expect(global.fetch).toBeCalledWith(
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

  describe('querying', () => {
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
      global.fetch.mockClear();
      act(() => {
        wrapper = mount(<ArticleSearch />);
      });
    });

    afterEach(() => {
      act(() => {
        wrapper.unmount();
      });
    });

    describe.only('when user enters a search term and clicks the button', () => {
      it('should perform the search using the specified search', () => {
        act(() => {
          wrapper
            .find('#searchTerm')
            .at(0)
            .simulate('change', { name: 'searchTerm', value: 'Fred' });

          // {
          //   target: { name: 'searchTerm', value: 'Fred' }
          // });

          wrapper.find('button').simulate('click');
          wrapper.update();
        });

        expect(global.fetch).toBeCalledWith(
          'https://hn.algolia.com/api/v1/search?query=Fred'
        );
      });
    });
  });
});

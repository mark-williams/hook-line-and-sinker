import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, cleanup } from 'react-testing-library';
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
      const { container } = render(<ArticleSearch />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('when loaded', () => {
    let utils;

    beforeEach(() => {
      global.fetch.mockClear();
      act(() => {
        utils = render(<ArticleSearch />);
      });
    });

    afterEach(() => {
      cleanup();
    });

    it('retrieves data', () => {
      expect(global.fetch).toBeCalledWith(
        'https://hn.algolia.com/api/v1/search?query=Liverpool'
      );
    });

    it('renders retrieved data', () => {
      act(() => {
        expect(utils.getByText('Article 1')).toBeDefined();
        expect(utils.getByText('Article 2')).toBeDefined();
        expect(utils.getByText('Article 3')).toBeDefined();
      });
    });
  });

  describe('querying', () => {
    describe('when user enters a search term and clicks the button', () => {
      let searchButton;
      let searchInput;

      beforeEach(() => {
        global.fetch.mockClear();
        const utils = render(<ArticleSearch />);
        searchButton = utils.getByText('Search');
        searchInput = utils.getByLabelText('Search for:');
      });

      it('should perform the search using the specified search', () => {
        act(() => {
          searchInput.value = 'Fred';
          fireEvent.click(searchButton);
        });
        expect(global.fetch).toBeCalledWith(
          'https://hn.algolia.com/api/v1/search?query=Fred'
        );
      });
    });
  });
});

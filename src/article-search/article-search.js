import React, { Fragment, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, SearchText, SearchContainer } from './style';

const Article = styled.div`
  margin-bottom: 0.4rem;
`;
Article.displayName = 'Article';

const DEFAULT_SEARCH = 'Liverpool';

const ArticleSearch = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(DEFAULT_SEARCH);
  const inputRef = useRef();
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
        .then(response => response.json())
        .then(data => safelySetArticles(data.hits));
    };

    if (inputRef.current.value === '') {
      inputRef.current.value = DEFAULT_SEARCH;
    }
    fetchData();
  }, [query]);

  const safelySetArticles = data => {
    if (isMountedRef.current) {
      setArticles(data);
    }
  };

  const setQueryCall = () => {
    setQuery(inputRef.current.value);
  };

  return (
    <Fragment>
      <h1>Article Search</h1>
      <SearchContainer>
        <label htmlFor="searchTerm">Search for:</label>
        <SearchText
          id="searchTerm"
          name="searchTerm"
          type="text"
          ref={inputRef}
        />
        <Button onClick={setQueryCall}>Search</Button>
      </SearchContainer>
      <h3>Here are a list of articles matching your search:</h3>
      <div className="articles">
        {articles.map(a => (
          <Article className="art" key={a.objectID}>
            {a.title}
          </Article>
        ))}
      </div>
    </Fragment>
  );
};

export default ArticleSearch;

import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, SearchText, SearchContainer } from './style';

const Article = styled.div`
  margin-bottom: 0.4rem;
`;
Article.displayName = 'Article';

const ArticleSearch = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Liverpool');
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log('Fetching: ' + searchTerm);
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      .then(response => response.json())
      .then(data => setArticles(data.hits));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const setTerm = e => setSearchTerm(e.target.value);
  const setQueryCall = () => setQuery(searchTerm);

  return (
    <Fragment>
      <h1>Article Search</h1>
      <SearchContainer>
        <label htmlFor="searchTerm">Search for:</label>
        <SearchText
          id="searchTerm"
          type="text"
          value={searchTerm}
          onChange={setTerm}
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

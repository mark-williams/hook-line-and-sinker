import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

const Article = styled.div`
  margin-bottom: 0.4rem;
`;
Article.displayName = 'Article';

const ArticleSearch = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=Liverpool')
      .then(response => {
        response.json();
      })
      .then(data => {
        setArticles(data.hits);
      });
  }, []);

  return (
    <Fragment>
      <h1>Article Search</h1>
      <h3>Here are a list of articles matching your search:</h3>
      <div>
        {articles.map(a => (
          <Article key={a.objectID}>{a.title}</Article>
        ))}
      </div>
    </Fragment>
  );
};

export default ArticleSearch;

import React from 'react';
import newsData from '../data/news';

function News() {
  return (
    <div>
      <h1>News</h1>
      <ul>
        {newsData.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default News;
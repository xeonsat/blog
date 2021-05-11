import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
    <React.Fragment>
        
        <h1>Articles</h1>
        <ArticlesList articles={articleContent} />

    </React.Fragment>
);

export default ArticlesListPage;

// Shortcut: we can write <> ... </> instead of <React.Fragment> ... </React.Fragment>
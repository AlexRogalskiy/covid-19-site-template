import React from 'react'
import FeaturedArticleLink from '../components/featuredArticleLink'

export default ({ children, featuredArticles }) => (
  <section className="mt-8 min-h-full">
    <h3 className="uppercase text-xl semi-bold">Featured Articles</h3>
    <div className="mt-6">
      <ul>
        {
          featuredArticles.map(featuredArticle => <li key={featuredArticle.contentful_id}><FeaturedArticleLink featuredArticle={featuredArticle} key={featuredArticle.contentful_id} /></li>)
        }
      </ul>
    </div>
  </section>
)
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export const Topic = ({
  title,
  slug,
  date,
  tags
}) => (
  <Link to={`/blog/${slug}/`}>
      <div>
      {date}
      <h3>{title}</h3>
      {tags.toString()}
    </div>
  </Link>
)

Topic.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.array
}

class NewsFeed extends React.Component {
  createNewsFeed = () => {
    const cmpArr = [];
    this.props.newsList.forEach(news =>{console.log(news)
      cmpArr.push(
          <Topic
            key={news.node.id}
            title={news.node.frontmatter.title}
            slug={news.node.frontmatter.slug}
            date={news.node.frontmatter.date}
            tags={news.node.frontmatter.tags}
          />
      );
    });
    console.log(this.props.newsList[0].node.frontmatter.date);
    return cmpArr;
  }

  render() {
    return (
      <div>
        <section className='section section--gradient'>
          <div className='container'>
            <div className='section'>
              <div className='columns is-centered'>
                <div className='column is-10 is-offset-1'>
                  <div className='content'>
                    {this.createNewsFeed()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default NewsFeed

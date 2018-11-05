import React from 'react'
import PropTypes from 'prop-types'

export const Topic = ({
  title,
  date,
  tags
}) => (
  <div>
    {date}
    <h3>{title}</h3>
    {tags.toString()}
  </div>
  
)

Topic.propTypes = {
  title: PropTypes.string,
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

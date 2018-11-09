/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NewsFeed from '../components/NewsFeed'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  newsList,
  imgUrl
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold' style={{width: "100%", paddingTop:"60%", backgroundImage: `url(${imgUrl})`, color:"black"}}>
      {/*<div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='title has-text-weight-semibold is-size-2'>
                    NEWS
                  </h3>
                </div>
                <NewsFeed newsList={newsList}/>
                {/*<Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='columns is-centered'>
          <div className='column is-10 is-offset-1'>
            <div className='content'>
              <div>
                <h3 className='title has-text-weight-semibold is-size-2'>
                  SERVICE
                </h3>
              </div>
              <ul>
                <li>経営コンサルタント事業</li>
                <li>マーケティングコンサルタント事業</li>
                <li>インフルエンサーマーケティング事業</li>
                <li>レコード事業</li>
                <li>映像制作事業</li>
                <li>グッズ制作事業</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  newsList: PropTypes.array,
  imgUrl: PropTypes.string,
}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
      newsList={data.allMarkdownRemark.edges}
      imgUrl={data.file.childImageSharp.original.src}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
    allMarkdownRemark(
      limit: 20
      filter: {frontmatter: {tags: {ne: null}}}
      sort: {fields: [frontmatter___date], order: DESC }
    ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            tags
          }
        }
      }
    }
    file(relativePath: { eq: "057.jpg" }) {
      childImageSharp{
        original {
          width
          height
          src
        }
      }
    }
  }
`

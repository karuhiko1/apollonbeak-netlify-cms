/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'

export const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
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
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-half is-offset-1'>
              <form name="contactform" method="post" action="/" data-netlify="true">
                <input type="hidden" name="form-name" value="contactform" />
                <input className="input" name="name" type="text" placeholder="Your Name" />
                <input className="input" name="email" type="email" placeholder="Your Email" />
                <textarea className="textarea" name="message" placeholder="Message"></textarea>
                <button type="submit" className='button is-primary'>送信</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <ContactPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      contacts={frontmatter.contacts}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        contacts {
          email
          description
        }
      }
    }
  }
`

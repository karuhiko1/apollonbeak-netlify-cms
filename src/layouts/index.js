/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './styles.sass'
import config from '../../meta/config'

export default class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {

    return(
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        <NavBar logoImg={this.props.data.file.childImageSharp.original.src}/>
        <div>{this.props.children()}</div>
        <Footer />
      </div>
    )
  }   
}

export const layoutQuery = graphql`
  query layoutQuery {
    file(relativePath: { eq: "apobi.png" }) {
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

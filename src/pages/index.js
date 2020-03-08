import { Link } from 'gatsby'
import React from 'react'
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'






class HomeIndex extends React.Component {

  render() {
    return (
      <Layout>
        <Helmet
          title="Julien Sauvan - Data Scientist"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="two">
            
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/blog"
                className="link primary"
              >
                <header className="major">
                  <h3>Blog</h3>
                  <p>articles about data science</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/datascientist"
                className="link primary"
              >
                <header className="major">
                  <h3>Data Scientist</h3>
                  <p>background and experiences</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/projects"
                className="link primary"
              >
                <header className="major">
                  <h3>Projects</h3>
                  <p>data science & machine learning portfolio</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <a href="https://500px.com/juliensauvan"
                className="link primary"
              >
                <header className="major">
                  <h3>Photography</h3>
                 
                </header>
              </a>
            </article>
            
          </section>


        </div>
      </Layout>
    )
  }
}

export default HomeIndex



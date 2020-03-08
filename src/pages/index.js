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
            <div className="inner">
              <header className="major">
                <h2>Welcome on my Internet space</h2>
              </header>
              <ul className="icons">
        <li>
          <a href="https://twitter.com/JulienSauvan" aria-label="Twitter" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Juls3" aria-label="GitHub" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/julien-sauvan-b5a40982/" aria-label="LinkedIn" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
              <p>
               You'll find articles about data science on my blog abd my data science portfolio. I'm also a photographer on my spare time. Feel free to reach me !
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Landing Page"
                    to="/projects"
                    className="button next"
                  >
                    Check my projects
                  </Link>
                </li>
              </ul>
            </div>
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



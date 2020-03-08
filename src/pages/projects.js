import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Projects - Julien Sauvan</title>
            <meta name="description" content="Projects" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">

            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.capgemini.com/fr-fr/cas-client/ia-traumatrix/" className="image">
                        <img src={pic08} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>TrauMatrix</h3>
                            </header>
                            <p>TrauMatrix is a multi-disciplinary ambitious project gathering traumatologists, researchers, consultants and data scientists to build a decision support tool to better handle trauma patients with traumatic brain injuries and hemorrhagic shock.
                            <br />
                            <br />
                            I specifically worked on a new brain injuries classification with Pr. Jean-Denis Moyer. Our work will be published soon.</p>
                            <ul className="actions">
                                <li><a href="https://www.capgemini.com/fr-fr/cas-client/ia-traumatrix/" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://mariekhater.github.io/Dataviz_bibli/" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>BibliParis</h3>
                            </header>
                            <p>BibliParis was a school project for a data storytelling class given by <a href="https://toucantoco.com/">Toucan Toco</a>, where we built a small website hosting an interactive book with data visualizations about culture in Paris.</p>
                            <ul className="actions">
                                <li><a href="https://mariekhater.github.io/Dataviz_bibli/" className="button">Read the book</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.youtube.com/watch?v=xOtyLS9at7Y" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>AB-Bot</h3>
                                <h4>Prototype developed during ENSAE's Hackathon</h4>
                            </header>
                            <p>AB-Bot was a prototype developed for <a href="https://www.label-emmaus.co/fr/">Label Emmaüs</a> during the 2017 edition of <a href="http://www.hackathon-geniusensae.fr/">ENSAE Paris' Hackathon</a>. The goal was to help volunteers to better recognize and classify random objects sold on Emmaüs' marketplace. Wih my team, we built the underlying algorithms using state-of-the-art Computer Vision methods (fine-tuning Google's Inception) and designed the solution in 24h.
                            <br />
                            We won the <b>2nd prize</b> of the deep learning challenge.</p>
                            <ul className="actions">
                                <li><a href="https://www.youtube.com/watch?v=xOtyLS9at7Y" className="button">View the pitch</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is Julien</h1>
      </header>
      <div className="content">
        <p>
          I'm a french Data Scientist working in Paris.
          <br /> 
          I help to deliver values and insights from data using machine learning. 
          <br />
          I work on several projects in healthcare, industry, public sector and sustainability. 
          <br />
          My main interests are Computer Vision, Reinforcement Learning and more broadly Machine Learning with a focus on models' interpretability.
  <br />
  <br />
Member of the <a href="https://www.capgemini.com/fr-fr/cas-client/ia-traumatrix/">TrauMatrix project</a>, a multi-disciplinary ambitious project gathering traumatologists, researchers, consultants and data scientists to build a decision support tool to better handle trauma patients with traumatic brain injuries and hemorrhagic shock.
        </p>
        <ul className="actions">
          <li>
            <a href="/blog" name="Check my blog" className="button next scrolly">
              Check my blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner

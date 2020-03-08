import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is Julien</h1>
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
            <a href="/projects" name="Check my projects" className="button next scrolly">
              Check my projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner

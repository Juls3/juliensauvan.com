import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Julien Sauvan - Data Scientist</title>
            <meta name="description" content="Julien Sauvan, french data scientist" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Data Scientist</h1>
                        <h3> About me</h3>
                    </header>
                    I work in Paris, France.
                    <br />
                    I help to deliver values and insights from data using machine learning.
                    <br />
                    I work on several projects in healthcare, industry, public sector and sustainability.
                    <br />
                    My main interests are Causal ML, Reinforcement Learning and more broadly Machine Learning with a focus on models' interpretability. I also like Computer Vision and GANs.
                    <br /><br />

                    <h4>Studies</h4>
                                        <ul>
                                            <li>Graduated from <a href="https://www.ensae.fr/">ENSAE Paris</a> (Msc in Data Science, economist & statistical engineer) in 2018</li>
                                            <li>Entrepreneurial student experience during my final year of studies</li>
                                            <li>Attended the <a href="https://www.oxfordml.school/oxml2020">Oxford Machine Learning Summer School 2020</a> covering various fields in the machine learning domain such as Gaussian Processes, Reinforcement Learning, Computer Vision and XAI, etc in detail, with an emphasis on healthcare applications.</li>
                                        </ul>


<h4>Data Scientist Consultant since December 2018 @ <u><a href="https://www.capgemini.com/service/invent/"> Capgemini Invent</a></u></h4>

<li>French regional health agency<dl><dd> Prediction of hospital beds occupancy rates to manage changes in activity volume regarding the Covid-19 crisis (Markov chains and time series modelling).<br />
<code>Python (Flask, Dash, pandas, Prophet, sk-learn).</code></dd></dl></li>

<li>Member of the TrauMatrix project <dl><dd>Development of an algorithm to predict early stages of intracranial hypertension using a new medical classification of intracranial lesions - paper soon to be published. Development of a deep learning demonstrator detecting intracranial haemorrhage in CT-Scans with an interpretablity layer.<br />
 <code>Python (pandas, Flask, PyTorch), R</code></dd></dl></li>

<li>Public sector<dl><dd> Prototyping in Agile mode a search engine for internal regulatory notes, with AI-powered cross reference functionnalities.<br />
<code>Spark, SQL, Elasticsearch, Neo4J, Python (Flask, Tesseract).</code></dd></dl></li>

<li>Hotel industry<dl><dd>  Forecasting of occupancy rates.</dd></dl></li>

<h4> MOOC Certificates </h4>
<dl>
    <dt>Coursera</dt>
    <dd>
        <p><a href="https://www.coursera.org/account/accomplishments/verify/TYJHY2B64RSD">Neural Networks and Deep Learning</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/verify/AUGCN38TQTZC">Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/certificate/QGTY5XC96EHT">Convolutional Neural Networks</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/verify/8MKSN9KBF4PL">Structuring Machine Learning Projects</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/verify/6UKEJ7UM48ZK">Fundamentals of Reinforcement Learning</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/certificate/T7RMPAJXDE6R">Introduction to Neurohacking in R</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/certificate/77YHPPTBSFAT">Drug Development</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/certificate/FDYSW7PWTLSL">AI for Medical Treatment</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/certificate/KG47YQGVGSL9">Build Basic Generative Adversarial Networks</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/certificate/C4ADAELKEYVV">Apply Generative Adversarial Networks</a>
        <br />
        <a href="https://www.coursera.org/account/accomplishments/certificate/SVN5SKF6AEGM">Build Better Generative Adversarial Networks</a>
        <br /></p>
    </dd>
    <dt>Udemy</dt>
    <dd>
        <p><a href="https://www.udemy.com/certificate/UC-3750CEIW/">Spark and Python for Big Data </a></p>
    </dd></dl><ul className="actions">
        {/*<li><a href="#" className="button special">Download my resume</a></li>*/}
        <li><a href="#contact" className="button">Contact me</a></li>
    </ul>
    <br />
                 </div>

            </section>
        </div>

    </Layout>
)

export default Generic

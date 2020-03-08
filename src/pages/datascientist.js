import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Julien Sauvan - Data Scientist</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Data Scientist</h1>
                    </header>
                    <h4>Studies</h4>
                                        <ul>
                                            <li>Graduated from ENSAE Paris (Msc in Data Science, economist & statistical engineer) in 2018</li>
                                            <li>Entrepreneurial experience during my final year of studies</li>
                                        </ul>


<h4>Data Scientist Consultant since December 2018</h4>

<li>Member of the TrauMatrix project: development of an algorithm to predict early stages of intracranial hypertension using a new medical classification of intracranial lesions - paper soon to be published. Development of a deep learning demonstrator detecting intracranial haemorrhage in CT-Scans with an interpretablity layer.
 <blockquote>Stack: Python (pandas, Flask, PyTorch), R</blockquote></li>

<li>Public sector: prototyping in Agile mode a search engine for internal regulatory notes, with AI-powered cross reference functionnalities.
<blockquote>Stack: Spark, SQL, Elasticsearch, Neo4J, Python (Flask, Tesseract).</blockquote></li>

<li>Industry: forecasting of occupancy rates.</li>
                 </div>
            </section>
        </div>

    </Layout>
)

export default Generic
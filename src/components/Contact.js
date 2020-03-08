import React from 'react'
import { Timeline } from 'react-twitter-widgets'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">

            <section><h2> Feel free to contact me</h2>
                <form method="post" action="https://formspree.io/xyyjaojn">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-user"></span>
                        <h3>Information</h3>
                        <p>Julien Sauvan
                        <br />
                        Data Scientist Consultant @ <a href="https://www.capgemini.com/service/invent/">Capgemini Invent</a></p>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-twitter"></span>
                        <h3>Tweets</h3>

                    </div>
                    <Timeline
                      dataSource={{
                        sourceType: 'profile',
                        screenName: 'juliensauvan'
                      }}
                      options={{
                        username: 'JulienSauvan',
                        height: '300',
                        theme:'dark',
                      }}
                      onLoad={() => console.log('Timeline is loaded!')}
                    />
                </section>


            </section>
        </div>
    </section>
)

export default Contact

import React from "react"
import "./contact.scss"

const Contact = () => {
    return (
        <section id="contact-me" className="scrollto">
            <div className="contact">
                <h1 className="contact-me_title">Want to work together?</h1>

                <p className="contact-me__text">
                    I’m currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.
                </p>

                <form name="contact-me"
                  method="post"
                  action="/success"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="bot-field"/>

                    <div className="name-field-container">
                        <input
                           required="required"
                           maxLength="20"
                           minLength="2"
                           type="text"
                           name="name"
                           size="40"
                           className="wpcf7-form-control-wrap__input"
                           id="your-name"
                           placeholder="Name"
                           autoComplete="off"
                           aria-label="Name"
                        />
                    </div>

                    <div className="email-field-container">
                        <input
                           required="required"
                           type="email"
                           name="email"
                           size="40"
                           className="wpcf7-form-control-wrap__input"
                           id="email"
                           placeholder="Email"
                           autoComplete="off"
                           aria-label="Email"
                        />
                    </div>

                    <div className="subject-field-container">
                        <input
                            required="required"
                            maxLength="20"
                            minLength="2"
                            type="text"
                            name="subject"
                            size="40"
                            className="wpcf7-form-control-wrap__input"
                            id="subject"
                            placeholder="Subject"
                            autoComplete="off"
                            aria-label="Subject"
                         />

                    </div>

                    <div className="textarea-field-container">
                        <textarea
                          minLength="20"
                          required="required"
                          id="area" name="area"
                          cols="40"
                          rows="10"
                          className="wpcf7-form-control-wrap__text-area"
                          placeholder="Let's Talk! Tell me about your project..."
                          autoComplete="off"
                          aria-label="Enter your comment"
                        >
                        </textarea>
                    </div>

                    <div className="submit-field-container">
                        <input id="submit" type="submit" value="Send It!" className="wpcf7-form-control-wrap__submit"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

import * as React from "react"
import Layout from '../components/Partials/Layout'

const ContactPage = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in Touch?</h3>

            <p>
              Mollit esse aliquip enim enim. In aliqua
              in nulla ad. Cillum non deserunt nostrud consectetur
            </p>

            <p>Aute amet est ipsum exercitation exercitation occaecat sit 
              irure Lorem sunt fugiat voluptate.Dolor id labore eiusmod excepteur 
              nostrud tempor et.Do in enim non culpa cillum id laborum aliqua deserunt 
              deserunt laborum reprehenderit velit
            </p>

            <p>Minim elit incididunt sint in tempor. Anim anim proident quis 
            sunt ut dolor anim nulla. </p>
          </article>
          <article className="form contact-form">
            <div className="form-row">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
              <textarea name="text" id="message" rows="3" />
            </div>
            <input type="submit" className="btn" />
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Contact | Angel Mas</title>

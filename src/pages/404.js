import * as React from "react"
import Layout from "../components/Partials/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
        <main>
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

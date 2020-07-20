import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../Seo"

export default () => {
  return (
    <Layout>
      <SEO title="Sponsors" />
      <h1>Sponsors</h1>
      <p>
        The Hackathon wouldn't be possible without our sponsors helping us out.
        <strong>
          If you are interested in sponsorship, you can reach out at{" "}
          <Link to="mailto:root@thehackathon.dev">root@thehackathon.dev</Link>.
        </strong>
      </p>
      <p>
        We're not currently funded by any company and we're committed to
        remaining so. We're not accepting monetary sponsorships.{" "}
        <strong>
          If your company wants to sponsor The Hackathon through monetary means,
          consider making a donation to a charitable institution instead.
        </strong>{" "}
        If you email us a donation proof,{" "}
        <strong>we'll list your company in the sponsorship section</strong>, in
        equal terms to existing sponsors.
      </p>
      <p>
        We are also committed to transparency. This is the list of sponsors and
        how they helped The Hackathon become real.
      </p>
      <p>
        <strong>
          <Link target="_blank" to="https://subvisual.com">
            Subvisual
          </Link>
        </strong>{" "}
        - gifted the domain, email and GSuite, provided us paid time off to work
        on The Hackathon.
      </p>
      <p>
        <strong>
          <Link target="_blank" to="https://gorails.com/">
            Go Rails
          </Link>
        </strong>{" "}
        - gifted 6-month subscription for the winning team's Hacker Kit.
      </p>
      <p>
        <strong>
          <Link target="_blank" to="https://tuple.app">
            Tuple
          </Link>
        </strong>{" "}
        - gifted three free months of Tuple for the winning team's Hacker Kit.
      </p>
      <p>
        <strong>
          <Link target="_blank" to="https://www.stickermule.com/">
            Sticker Mule
          </Link>
        </strong>{" "}
        - gifted $20 discount voucher for the winning team's Hacker Kit.
      </p>
    </Layout>
  )
}

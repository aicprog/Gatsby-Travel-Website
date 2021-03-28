import * as React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Trips heading="Our Favorite Destinations"/>
    <Testimonials />
    <Stats/>
    <Email/>
  
  </Layout>
)

export default IndexPage

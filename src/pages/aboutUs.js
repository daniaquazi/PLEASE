import * as React from "react"

import ValueProposition from "../components/ValueProposition"

import HeroImage from "../components/HeroImage"
import ContentFeature5 from "../components/ContentFeature5"
import ContentFeature4 from "../components/ContentFeature4"
import BigTitleBodyContent1 from "../components/BigTitleBodyContent1"
import InBodyNavigation from "../components/InBodyNavigation"
import Layout from "../components/Layout"
import Quote2 from "../components/Quote2"
import TheTeam from "../components/TheTeam"

function aboutUsPage({ data }) {
  return (
        <Layout>
          <HeroImage />
          <TheTeam />
          <ValueProposition />
          <Quote2 />

          <ContentFeature4 />
          <InBodyNavigation />
          <Quote2 />
          <ContentFeature5 />
        </Layout>
  )
}

export default aboutUsPage

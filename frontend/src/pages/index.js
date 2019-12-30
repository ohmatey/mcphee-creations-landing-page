import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import HomeHero from '../components/HomeHero'
import WorkTogether from '../components/WorkTogether'
import HomeServices from '../components/HomeServices'
import IdeationPlanning from '../components/IdeationPlanning'

const homeKeywords = [
  'McPhee Creations',
  'Web Development',
  'Design Sprint',
  'Full stack',
  'javascript',
  'Web Idea'
]

const IndexPage = _ => (
  <Layout>
    <SEO title='Home' keywords={homeKeywords} />

    <section style={{ minHeight: '100vh' }}>
      <HomeHero />
    </section>

    <HomeServices />

    <IdeationPlanning />

    <WorkTogether />
  </Layout>
)

export default IndexPage

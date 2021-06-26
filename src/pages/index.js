import * as React from 'react'
import Layout from '@components/home/layout'
import Welcome from '@components/home/welcome'
import About from "@components/home/about"
import Reseach from '../components/home/reseach'
import ReseachImages from '../components/home/reseach/test'
import MySkill from '../components/home/skill'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Welcome/>
      <About />
      <MySkill/>
      <Reseach/>
      {/* <p>I'm making this by following the Gatsby Tutorial.</p> */}
    </Layout>
  )
}
export default IndexPage
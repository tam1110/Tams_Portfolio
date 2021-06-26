import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro";
import SectionTitle from "@components/atoms/section_title";
import ReseachImages from '@components/home/reseach/test'

const Section = styled.section`
  ${tw`w-full pb-5 bg-white`};
  `

const Reseach = () => (
    <Section>
      <SectionTitle title="Research"/>
      <ReseachImages/>
    </Section>
  )
  
  export default Reseach
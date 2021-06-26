import React from "react"
import styled from "styled-components"
import json from "@contents/jsons/skills";
import tw from "tailwind.macro";
import SectionTitle from "@components/atoms/section_title";
import './style.css'

const Section = styled.section`
  ${tw`w-full pb-10 bg-white`};
`
const backgroundColors = ["#6495ed","#72a0a4", "#447854", "#d1741a",  "#C41E3A","#32474c", "cornflowerblue", "cornflowerblue", "cornflowerblue", "cornflowerblue"]


function SkillItem(props) {
    return (
      <div className="skillItem" style={{backgroundColor: props.color}}>
        <div className="skill_h3">
            <h3>{props.name}</h3>
        </div>
        <div className="skill_p">
            <p>{props.description}</p>
        </div>
       
      </div>
    )
  }

function Skill(props) {
    return (
      <div> 
        {props.skills.map((value, index) => {
            return <SkillItem color = {backgroundColors[index]} name={value.name} description={value.description} />
      })}
      </div>
    )
  }

const MySkill = () =>(
    <Section>
        <SectionTitle title = "SKILLS" />
        <div>
        <Skill skills = {json.mySkill.skills}/>
        </div>
    </Section>
)

export default MySkill



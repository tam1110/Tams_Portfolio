import React from "react"
import styled from "styled-components"
import json from "@contents/jsons/skills";
import tw from "tailwind.macro";
import SectionTitle from "@components/atoms/section_title";
// import './style.css'

const Section = styled.section`
  ${tw`w-full bg-white`};
`

const skillItem_style = {
    backgroundColor: "cornflowerblue",
    backgroundSize: "cover",
    margin: "10px",
    width: "90%",
    height: "cover",
    borderRadius: "5px",
    boxShadow: "2px 2px 4px -2px"
  }
  
  const h3_style = {
    color: "white",
    paddingTop: "20px",
    paddingLeft: "20px",
    fontFamily: 'Benne',
    /* margin: 20px; */
    fontSize: "24px"
  }
  
  const p_style = {
    color: "white",
    paddingBottom: "20px",
    paddingLeft: "20px"
    /* margin: 20px; */
  }


function SkillItem(props) {
    return (
      <div className="skillItem" style={skillItem_style}>
        <div className="skill_h3" style={h3_style}>
            <h3>{props.name}</h3>
        </div>
        <div className="skill_p" style={p_style}>
            <p>{props.description}</p>
        </div>
       
      </div>
    )
  }

function Skill(props) {
    return (
      <div> 
        {props.skills.map((value, index) => {
          return <SkillItem key={index} name={value.name} description={value.description} />
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



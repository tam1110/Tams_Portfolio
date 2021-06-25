import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import json from "@contents/jsons/about";
import SectionTitle from "@components/atoms/section_title";
import "./style.css"

const Section = styled.section`
  ${tw`w-full bg-white`};
`

const ProfileBlock = styled.div`
  ${tw`py-2 lg:mb-5 leading-loose`};
  
  & > h3 {
    ${tw`my-3`};
  }

  & > p {
    ${tw`mb-5 text-grey-darkest text-sm`};
  }

  & > dl > dt {
    ${tw`lg:float-left lg:w-2/5 font-bold`};
  }

  & > dl > dd {
    ${tw`lg:float-right lg:w-4/5 text-grey-darkest`};
  }
`

const EducationBlock= styled.div`
  ${tw`my-2  py-5 lg:mb-5 leading-loose`}; 

  & > h3 {
    ${tw`mt-3 pt-5 h-500`};
  }

  & > p {
    ${tw`mb-5 text-grey-darkest text-sm`};
  }
`

const tableColStyle = {
  marginLeft: '40px',
};

const tableStyle = {
  textDecoration: 'underline'
}

function ProfileItem(props) {
  return <><dt>{props.name}</dt><dd>{props.value}</dd></>
}

function Profile(props) {
  return (
    <dl>
      {Object.keys(props.profiles).map(key => {
        return <ProfileItem key={key} name={key} value={props.profiles[key]} />
      })}
    </dl>
  )
}

function EducationItem(props) { 
  return (
  <>
    <tr>
      <div style = {tableStyle}><td>{props.period}</td></div>
      <div style = {tableColStyle}><td>{props.school}</td></div>
    </tr>
  </>
  
  )
}

function Education(props) {
  return (
    <table>
      <tbody>
        {Object.keys(props.educations).map(key =>{
          return <EducationItem key={key} period={key} school={props.educations[key]}/>
        })}
      </tbody>
    </table>
  )
}

const About = () => (
  <div className="Section">
    <InViewMonitor
      classNameNotInView='inview-section-hidden'
      classNameInView='inview-section-active'
    >
      <div className="mx-auto mt-20">
        <SectionTitle title="ABOUT" />
        <div className="lg:flex w-full my-6">
          <div className="flex-1 px-2">
            <div className="Profile">
              <h3>MY PROFILE</h3>
              <p>{json.myProfile.description}</p>
              <Profile profiles={json.myProfile.profiles} />
            </div>
          </div>
        </div>
        <div className="lg:flex w-full my-6"></div>
          <div className="flex-1 px-2">
              <div className="Education">
                <h3>My Education</h3>
                <Education educations={json.myEducation.educations} />
              </div>
            </div>
          </div>
    </InViewMonitor>
  </div>
)

export default About

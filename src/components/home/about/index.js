import React from "react"
import InViewMonitor from 'react-inview-monitor';
import json from "@contents/jsons/about";
import SectionTitle from "@components/atoms/section_title";
import "./style.css"


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

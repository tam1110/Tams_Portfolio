import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import heroImage from "@contents/images/gatsby-browser.jpeg"
// import TwitterIcon from "@components/atoms/icon/twitter"
// import GithubIcon from "@components/atoms/icon/github"
// import EnvelopeSolidIcon from "@components/atoms/icon/envelope-solid"

const SectionStyled = styled.section`
  ${tw`w-full`};
  background-image: url(${heroImage});
  &::before {
    background-size: 100%;
    background-position: center;
    content: "";
    z-index: -1;    
    ${tw`h-full w-full absolute opacity-200`};
  }
`

const TitleStyled = styled.h1`
  ${tw`text-white text-center font-bold my-5 pt-10 text-5xl leading-loose`};
`

const SubStyled = styled.h3`
 ${tw`text-white text-center font-bold my-5 pb-20 text-1xl leading-loose`};
`

const Welcome = () => (
  <SectionStyled>
    { <div className="mx-auto my-20">
      <div>
          <div class="text-center w-full">
            <TitleStyled>Naoki Tamura</TitleStyled>
            <SubStyled>Graduate School of Engineering, Nagoya University Nobuo Kawaguchi Lab</SubStyled>
            <div className="my-10">

            </div>
          </div>
      </div>
    </div> }
  </SectionStyled>
)

export default Welcome

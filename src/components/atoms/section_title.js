import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

const TitleStyled = styled.h2`
  ${tw`text-center w-full font-bold mb-10 text-4xl relative inline-block `};
  &:before {
    content: "";
    -webkit-transform: translateY(50%) translateX(-50%);
    transform: translateY(50%) translateX(-50%);
    left: 50%;
    top: 40px;
    ${tw`absolute w-3 h-3 rounded-full bg-black`};
  }
`
const SubtitleStyled = styled.p`
  ${tw`text-center text-grey-darker text-base`}
`

const SectionTitle = ({ title, subtitle }) => {
  const sub = subtitle ? <SubtitleStyled>{subtitle}</SubtitleStyled> : null;
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      {sub}
    </>
  )
}

export default SectionTitle

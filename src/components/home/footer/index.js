import React from "react"
// import Image from "@components/atoms/image";
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
<footer>    
  <section className="text-grey-darkest">
    <div className="p-6 container mx-auto px-4">
      <div className="w-full text-center my-10">
      </div>
      <div className="w-full text-xs sm:text-sm text-center">
        Copyright © {new Date().getFullYear()} @nnn All Rights Reserved.
      </div>
      <div className="flex items-center justify-center text-xs text-center mt-4">
        made with GatsbyJS
        <div
          className="rounded-full ml-1"
          style={{ width: `20px` }}
        >
          <StaticImage filename="@contents/images/gatsby-icon.png" alt="GatsbyJS"　/>
        </div>
      </div>
    </div>
  </section>
</footer>
)

export default Footer

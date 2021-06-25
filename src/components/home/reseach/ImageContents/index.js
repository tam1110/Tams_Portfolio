import React, { Children } from "react"
import dummy_fig from "@contents/images/gatsby-browser.jpeg"

const panel_active_style = {
    height: `80vh`,
    border: `2px solid green`,
    backgroundImage: `url(${dummy_fig})`, 
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    borderRadius: `50px`,
    color: `#fff`,
    position: `relative`,
    margin: `10px`,
    cursor: `pointer`,
    webkitTransition: `all 700ms ease-in`,
    flex: `5`
  }
  const panel_active_h3_style = {
    fontSize: `24px`,
    position: `absolute`,
    bottom: `20px`,
    left: `20px`,
    margin: `0`,
    opacity: `0`,
    transition:`opacity 0.3s ease-in 0.4s`,
    opacity: `1`
  }

const ReseachContentActive = (props) => (
    <div className="panel Active" style={panel_active_style}>
    <div className="panel h3" style={panel_active_h3_style}>
        <h3>{props.children}</h3>
    </div>
</div>
)

export default ReseachContentActive
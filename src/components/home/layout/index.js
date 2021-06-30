/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { StaticQuery, graphql } from "gatsby"
 import { Transition } from 'react-transition-group';
 import Header from "../header"
 import Footer from "../footer"
 import "./layout.css"
import BackgroundImage from "gatsby-background-image"
import StyledBackgroundSection from "../background"
 
 class Layout extends React.Component  {
   constructor(props) {
     super(props)
     this.state = { y: 0 , color: 'black', backgroundColor: 'white', inProp: false}
   }
 
  listenScrollEvent = e => {
    if (window.scrollY > 1800) {
      this.setState({color: 'white'})
      this.setState({backgroundColor: 'black'})
      this.setState({inProp: true})
    } else {
      this.setState({color: 'black'})
      this.setState({backgroundColor: 'white'})
      this.setState({inProp: true})

    }
  }
   componentDidMount() {
     window.addEventListener('scroll', this.listenScrollEvent)
   }

 
   render() {
     const { children } = this.props;
     return (
      <Transition in={this.state.inProp}>
      <div className="main" style = {{color: this.state.color, backgroundColor: this.state.backgroundColor}} >
        <main>{children}</main>
      </div>
      </Transition>
     )
   }
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 
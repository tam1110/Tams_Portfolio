import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'

const Image = (props) => (
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       images: allFile {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             childImageSharp {
  //               sizes(maxWidth: 600) {
  //                 ...GatsbyImageSharpSizes
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}

  //   render={(data) => {
  //     const image = data.images.edges.find(n => {
  //       return n.node.relativePath.includes(props.filename);
  //     });
  //     if (!image) { return null; }

  //     const imageSizes = image.node.childImageSharp.sizes;
  //     return (
  //       <Img
  //         alt={props.alt}
  //         sizes={imageSizes}
  //       />
  //     );
  //   }}
  // />
  <StaticImage src="@contents/" alt="Zenn" />
)
export default Image
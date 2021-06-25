import React from "react"
import dummy_fig from "@contents/images/gatsby-browser.jpeg"

const panels = document.querySelectorAll('.panel')

const container_style = {
    display: `flex`,
    width: `90vw`
}

const panel_style = {
    height: `80vh`,
    width: `30px`,
    border: `2px solid green`,
    backgroundImage: `url(${dummy_fig})`, 
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    borderRadius: `50px`,
    color: `#fff`,
    position: `relative`,
    margin: `10px`,
    cursor: `pointer`,
    webkitTransition: `all 700ms ease-in`
  }

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
  


  const panel_h3_style = {
    fontSize: `24px`,
    position: `absolute`,
    bottom: `20px`,
    left: `20px`,
    margin: `0`,
    opacity: `0`,
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



panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


const Reseach = () => (
    <div className="container" style = {container_style}>
        <div className="panel active" style={panel_active_style}>
            <div className="panel h3" style={panel_active_h3_style}>
                <h3>Explore The World</h3>
            </div>
        </div>
        <div className="panel" style={panel_style}>
            <div className="panel h3" style={panel_h3_style}>
                <h3>Explore The World</h3>
            </div>
        </div>
        <div className="panel" style={panel_style}>
            <div className="panel h3" style={panel_h3_style}>
                <h3>Explore The World</h3>
            </div>
        </div>
        <div className="panel" style={panel_style}>
            <div className="panel h3" style={panel_h3_style}>
                <h3>Explore The World</h3>
            </div>
        </div>

    </div>
  )
  
  export default Reseach

        {/* </div>
      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
        <h3>Wild Forest</h3>
      </div>
      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')">
        <h3>Sunny Beach</h3>
      </div>
      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')">
        <h3>City on Winter</h3>
      </div>
      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
        <h3>Mountains - Clouds</h3>
      </div> */}